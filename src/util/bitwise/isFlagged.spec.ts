import isFlagged from "./isFlagged";

describe("isFlagged", () => {
  test("Matches bit exactly", async () => {
    expect(isFlagged(1 << 1, 1 << 1)).toBe(true);
  });

  test("Matches flagged of a bit", async () => {
    const bit = (1 << 0) | (1 << 3);

    expect(isFlagged(1 << 3, bit)).toBe(true);
  });

  test("Does not match flag of a bit", async () => {
    const bit = (1 << 0) | (1 << 3);

    expect(isFlagged(1 << 2, bit)).toBe(false);
  });
});
