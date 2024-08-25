import { assertIsLogLevel } from './assertIsLogLevel';
import { assertIsDefined } from './assertIsDefined';

const getEnvironment = (): {
  BOT_TOKEN: string;
  CHANNEL_NAME: string;
  LOG_LEVEL: 'DEBUG' | 'INFO' | 'ERROR';
  TORIKI_COMMAND: string;
} => {
  const BOT_TOKEN = process.env.BOT_TOKEN;
  assertIsDefined(BOT_TOKEN, 'valid bot token');

  const CHANNEL_NAME = process.env.CHANNEL_NAME;
  assertIsDefined(CHANNEL_NAME, 'channel name');

  const LOG_LEVEL = process.env.LOG_LEVEL;
  assertIsDefined(LOG_LEVEL, 'log level');
  assertIsLogLevel(LOG_LEVEL);

  const TORIKI_COMMAND = process.env.TORIKI_COMMAND;
  assertIsDefined(TORIKI_COMMAND, 'toriki command');

  return {
    BOT_TOKEN,
    CHANNEL_NAME,
    LOG_LEVEL,
    TORIKI_COMMAND,
  };
};

export const env = getEnvironment();
