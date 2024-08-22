import { Client, Events } from 'discord.js';
import { Logger } from './utils/logger';
import { shouldRun } from './utils/shouldRun';
import { intents } from './libs/config';
import { getTorikiResult } from './libs/getTorikiResult';
import { BOT_TOKEN } from './libs/environment';

const main = async () => {
  const client = new Client({ intents });
  await client.login(BOT_TOKEN);

  client.once(Events.ClientReady, (c) => {
    Logger.info(`Logged in as ${c.user.tag}`);
  });

  client.on(Events.MessageCreate, async (message) => {
    Logger.debug(`shouldRun: ${shouldRun(client, message)}`);
    if (shouldRun(client, message)) {
      const sendText = getTorikiResult(client);
      message.channel.send(sendText);
    }
  });
};

try {
  main();
} catch (error) {
  if (error instanceof Error) {
    Logger.error(error.message);
  } else {
    Logger.error(`fatal error: ${JSON.stringify(error)}`);
  }
}
