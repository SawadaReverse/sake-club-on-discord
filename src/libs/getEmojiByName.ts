import { Client } from 'discord.js';

export const getEmojiByName = (client: Client<boolean>, name: string) => {
  const emoji = client.emojis.cache.find((emoji) => emoji.name === name);
  if (!emoji) {
    throw new Error(`Emoji ${name} not found`);
  }
  return emoji;
};
