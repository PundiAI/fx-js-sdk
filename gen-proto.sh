#!/usr/bin/env bash

set -o errexit -o nounset -o pipefail

command -v shellcheck >/dev/null && shellcheck "$0"

OUT_DIR="./src/types"

if [ -d "$OUT_DIR/fx" ]; then
  rm -rf "$OUT_DIR/fx"
fi

proto_dirs=$(find ./fx-core/proto/fx -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
proto_dirs="${proto_dirs}
./proto/fx/dex/v1
./proto/cosmos/gov/v1
./cosmos-sdk/proto/cosmos/upgrade/v1beta1"
# shellcheck disable=SC2046
for dir in $proto_dirs; do
  protoc \
    --plugin="$(yarn bin protoc-gen-ts_proto)" \
    --ts_proto_out="$OUT_DIR" \
    --proto_path="./proto" \
    --proto_path="./cosmos-sdk/proto" \
    --proto_path="./cosmos-sdk/third_party/proto" \
    --proto_path="./ethermint/proto" \
    --proto_path="./ibc-go/proto" \
    --proto_path="./fx-core/proto" \
    --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=messages" \
    $(find "${dir}" -maxdepth 1 -name '*.proto')
done

rm -rf "$OUT_DIR/cosmos/base" "$OUT_DIR/cosmos/msg" "$OUT_DIR/cosmos/staking"
rm -rf "$OUT_DIR/cosmos_proto" "$OUT_DIR/gogoproto" "$OUT_DIR/google" "$OUT_DIR/ibc" "$OUT_DIR/ethermint" "$OUT_DIR/tendermint"

proto_ts_dirs=$(find "$OUT_DIR/fx" -path -prune -o -name '*.ts' -print0 | xargs -0 -n1 dirname | sort | uniq)
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

perl -pi -e 's|cosmjs-types/cosmos/bank|../../../cosmos/bank|g' "$OUT_DIR/fx/erc20/v1/tx.ts" "$OUT_DIR/fx/erc20/v1/erc20.ts"
perl -pi -e 's|../../../google|cosmjs-types/google|g' "$OUT_DIR/cosmos/upgrade/v1beta1/upgrade.ts" "$OUT_DIR/cosmos/gov/v1/tx.ts"
perl -pi -e 's|../../base/v1beta1/coin|cosmjs-types/cosmos/base/v1beta1/coin|g' "$OUT_DIR/cosmos/gov/v1/tx.ts"