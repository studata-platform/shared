import isFlagged from "./isFlagged";

describe("isFlagged", () => {
  it("Should return true when bit is flagged in bitmask", async () => {
    const bit = (1 << 0) | (1 << 3);

    expect(isFlagged(1 << 3, bit)).toBe(true);
    expect(isFlagged(bit, bit)).toBe(true);
  });

  it("Should return false when bit is not flagged in bitmask", async () => {
    const bit = (1 << 0) | (1 << 3);

    expect(isFlagged(1 << 2, bit)).toBe(false);
  });
});
