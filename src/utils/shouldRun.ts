import { CHANNEL_NAME, TORIKI_COMMAND } from '../libs/environment';
import { Logger } from './logger';
import { Client, Message } from 'discord.js';

export const shouldRun = (
  client: Client<boolean>,
  message: Message<boolean>,
) => {
  Logger.debug(`message: ${JSON.stringify(message)}`);
  if (message.author.bot || !message.guildId) return false;

  const guild = client.guilds.cache.get(message.guildId);
  Logger.debug(`guild: ${JSON.stringify(guild)}`);
  if (!guild) return false;

  const channel = guild.channels.cache.get(message.channelId);
  Logger.debug(`channel: ${JSON.stringify(channel)}`);
  if (!channel || channel.name !== CHANNEL_NAME) {
    return false;
  }

  return message.content === TORIKI_COMMAND;
};
