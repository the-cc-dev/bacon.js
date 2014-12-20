import slice from "./helpers/slice";

export default function withDescription() {
  var desc, obs, _i;

  desc = 2 <= arguments.length ? slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []);
  obs = arguments[_i++];
  return describe.apply(null, desc).apply(obs);
}