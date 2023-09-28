import { assert, expect, test } from "vitest";
import { generatePagers } from "@/shared/utils";

test("generatePagers", () => {
  const testCases = [
    {
      input: { numberOfPages: 10, currentPage: 1, spaces: 5 },
      output: [1, 2, 3, 4, 5],
    },
  ];
  expect(generatePagers(testCases[0].input)).toEqual(testCases[0].output);
});
