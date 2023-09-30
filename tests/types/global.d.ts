import * as vitest from "vitest";
declare global {
  const expect: typeof vitest.expect;
  const describe: typeof vitest.describe;
  const it: typeof vitest.it;
  const test: typeof vitest.test;
}
export {};
