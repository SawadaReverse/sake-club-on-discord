import { AssertionError } from 'assert';

export function assertIsDefined<T>(value: T): asserts value is NonNullable<T> {
  if (!value) {
    throw new AssertionError({
      message: 'value is undefined',
      actual: value,
    });
  }
}
