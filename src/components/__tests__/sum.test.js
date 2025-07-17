import { sum } from "../Sum";

test("sum of two numbers", () => {
  const result = sum(2, 3);

  // This is known as assertion
  expect(result).toBe(5);
});
