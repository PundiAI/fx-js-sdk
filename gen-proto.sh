#!/usr/bin/env bash

set -o errexit -o nounset -o pipefail

command -v shellcheck >/dev/null && shellcheck "$0"

TS_PROTO_OPTS="esModuleInterop=true,forceLong=long,useOptionals=true,useDate=false"

OUT_DIR="./src"

PLUGIN_PATH="./bin/protoc-gen-ts_proto_yarn_2"

if [ -d "$OUT_DIR/fx" ]; then
  rm -rf "$OUT_DIR/fx"
fi

perl -pi -e 's|ibc.core.client.v1.Height|.ibc.core.client.v1.Height|g' ./fx-core/proto/fx/ibc/applications/transfer/v1/tx.proto

if [ -d "./ibc-go/proto/ibc/applications/transfer" ]; then
  rm -rf "./ibc-go/proto/ibc/applications/transfer"
fi

proto_dirs=$(find ./fx-core/proto/fx -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
for dir in $proto_dirs; do
  protoc \
    --plugin="$PLUGIN_PATH" \
    --ts_proto_yarn_2_out="$OUT_DIR" \
    --proto_path="./proto" \
    --proto_path="./fx-core/proto" \
    --proto_path="./cosmos-sdk/proto" \
    --proto_path="./cosmos-sdk/third_party/proto" \
    --proto_path="./ibc-go/proto" \
    --ts_proto_yarn_2_opt="$TS_PROTO_OPTS" \
    "./proto/fx/dex/v1/tx.proto" \
    $(find "${dir}" -maxdepth 1 -name '*.proto')
done

perl -pi -e 's|.ibc.core.client.v1.Height|ibc.core.client.v1.Height|g' ./fx-core/proto/fx/ibc/applications/transfer/v1/tx.proto
rm -rf "$OUT_DIR/cosmos" "$OUT_DIR/cosmos_proto" "$OUT_DIR/gogoproto" "$OUT_DIR/google" "$OUT_DIR/ibc"

proto_ts_dirs=$(find ./src/fx -path -prune -o -name '*.ts' -print0 | xargs -0 -n1 dirname | sort | uniq)
for dir in $proto_ts_dirs; do
    ts_files=$(find "${dir}" -maxdepth 1 -name '*.ts')
    for ts_file in $ts_files; do
      perl -pi -e 's|../../../google|cosmjs-types/google|g' "$ts_file"
      perl -pi -e 's|../../../../../ibc|cosmjs-types/ibc|g' "$ts_file"
      perl -pi -e 's|../../../../cosmos|cosmjs-types/cosmos|g' "$ts_file"
      perl -pi -e 's|../../cosmos|cosmjs-types/cosmos|g' "$ts_file"
      perl -pi -e 's|../cosmjs-types|cosmjs-types|g' "$ts_file"
    done
done