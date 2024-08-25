import { LogLevel } from './logger';

type AssertLogLevel = (value: string) => asserts value is LogLevel;

export const assertIsLogLevel: AssertLogLevel = (
  value: string,
): asserts value is LogLevel => {
  if (!['DEBUG', 'INFO', 'ERROR'].includes(value)) {
    throw new Error(`Invalid log level: ${value}`);
  }
};
