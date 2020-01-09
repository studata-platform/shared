import isFlagged from "./isFlagged";

export default (flags: { [name: string]: number }, bit: number): number[] =>
  Object.values(flags).filter(flag => isFlagged(flag, bit));
