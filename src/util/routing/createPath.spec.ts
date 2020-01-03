import createPath from "./createPath";

describe("createPath", () => {
  test("Should add parameters to path with parameter with parameter template", () => {
    const mockPath = "/my-path/:param1";
    const mockParameters = {
      param1: "my-param-1"
    };

    // @ts-ignore
    expect(createPath(mockPath, mockParameters)).toEqual("/my-path/my-param-1");
  });
});
