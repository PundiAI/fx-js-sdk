import { Duration } from "cosmjs-types/google/protobuf/duration";
import Long from "long";

export function durationToNanos(duration: Duration | undefined): string {
  if (duration === undefined) {
    return "0";
  }
  return duration.seconds.mul(1e9).add(duration.nanos).toString();
}

export function nanosToDuration(nanos: string): Duration {
  return Duration.fromPartial({
    seconds: Long.fromString(nanos).div(1e9),
    nanos: parseInt(nanos.length > 9 ? nanos.substring(nanos.length - 9) : nanos, 10),
  });
}
