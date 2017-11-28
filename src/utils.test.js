import * as utils from "./utils";

describe("capitalize", () => {
  it("capitalize a string", () => {
    expect(utils.capitalize("pikachu")).toBe("Pikachu");
  });
});

describe("formatName", () => {
  it("capitalize a string and change hyphens to spaces", () => {
    expect(utils.formatName("pikachu-rock-star")).toBe("Pikachu rock-star");
  });
});

describe("formatDate", () => {
  it("format a date into hh:mm:ss format", () => {
    expect(utils.formatDate(new Date(1509933962000))).toBe("03:06:02");
  });
});

describe("flatten", () => {
  it("flatten an array of array", () => {
    expect(utils.flatten([[0, 1], [2, 3], [4, 5]])).toEqual([0, 1, 2, 3, 4, 5]);
  });
});

describe("groupBy", () => {
  it("transform an array into an object by grouping value according to a predicate", () => {
    expect(utils.groupBy([0, 1, 2, 3, 4, 5], value => value % 2)).toEqual({
      0: [0, 2, 4],
      1: [1, 3, 5]
    });
  });
});

describe("mean", () => {
  it("calculate the arithmetic mean of an array of numbers", () => {
    expect(utils.mean([7, 10, 13])).toBe(10);
  });
});

describe("mapOverObject", () => {
  it("map over the values of an object", () => {
    expect(
      utils.mapOverObject(value => value * value, { foo: 3, bar: 5 })
    ).toEqual({
      foo: 9,
      bar: 25
    });
  });
});
