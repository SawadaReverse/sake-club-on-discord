import { AssertionError } from 'assert';

export function assertIsDefined<T>(
  actual: T,
  expected: unknown,
): asserts actual is NonNullable<T> {
  if (!actual) {
    throw new AssertionError({
      message: 'value is undefined',
      actual,
      expected,
    });
  }
}
