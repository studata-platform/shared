import isFlagged from "./isFlagged";

export default (flags: any, bit: number) =>
  Object.values(flags).filter(flag => isFlagged(flag, bit));
