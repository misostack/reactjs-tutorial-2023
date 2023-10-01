import { generatePagers } from "@app/shared/utils";

test("generatePagers", () => {
  const testCases = [
    {
      input: { numberOfPages: 10, currentPage: 1, spaces: 5 },
      output: [1, 2, 3, 4, 5],
    },
    {
      input: { numberOfPages: 10, currentPage: 4, spaces: 5 },
      output: [1, 2, 3, 4, 5],
    },
    {
      input: { numberOfPages: 10, currentPage: 5, spaces: 5 },
      output: [3, 4, 5, 6, 7],
    },
    {
      input: { numberOfPages: 10, currentPage: 8, spaces: 5 },
      output: [6, 7, 8, 9, 10],
    },
    {
      input: { numberOfPages: 10, currentPage: 10, spaces: 5 },
      output: [6, 7, 8, 9, 10],
    },
  ].map((tc) => {
    return {
      output: tc.output,
      result: generatePagers(tc.input),
    };
  });
  expect(testCases[0].result).toEqual(testCases[0].output);
  expect(testCases[1].result).toEqual(testCases[1].output);
  expect(testCases[2].result).toEqual(testCases[2].output);
  expect(testCases[3].result).toEqual(testCases[3].output);
  expect(testCases[4].result).toEqual(testCases[4].output);
});
