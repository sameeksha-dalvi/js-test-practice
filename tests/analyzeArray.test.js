import analyzeArray from "../src/analyzeArray";

test("returns correct average, min, max and length", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});