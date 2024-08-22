import { assertIsDefined } from '../utils/assertIsDefined';

const BOT_TOKEN = process.env.BOT_TOKEN;
assertIsDefined(BOT_TOKEN);

const CHANNEL_NAME = process.env.CHANNEL_NAME;
assertIsDefined(CHANNEL_NAME);

const LOG_LEVEL = process.env.LOG_LEVEL;
assertIsDefined(LOG_LEVEL);

const TORIKI_COMMAND = process.env.TORIKI_COMMAND;
assertIsDefined(TORIKI_COMMAND);

export { BOT_TOKEN, CHANNEL_NAME, LOG_LEVEL, TORIKI_COMMAND };
