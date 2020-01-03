import getFlaggedBits from "./getFlaggedBits";

describe("getFlaggedBits", () => {
  test("Should only return flags that are in bit", async () => {
    const mockRoles = {
      role1: 1 << 0,
      role2: 1 << 1,
      role3: 1 << 2,
      role1and3: (1 << 0) | (1 << 2)
    };

    expect(getFlaggedBits(mockRoles, mockRoles.role1and3)).toEqual([
      mockRoles.role1,
      mockRoles.role3,
      mockRoles.role1and3
    ]);

    expect(getFlaggedBits(mockRoles, mockRoles.role1)).toEqual([
      mockRoles.role1
    ]);
  });
});
