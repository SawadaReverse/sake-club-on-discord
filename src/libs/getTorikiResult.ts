import { toriki } from '../utils/toriki';
import { getEmojiByName } from './getEmojiByName';
import { Client } from 'discord.js';

export const getTorikiResult = (client: Client<boolean>) => {
  const result = toriki();
  const emoji0 = getEmojiByName(client, result[0]);
  const emoji1 = getEmojiByName(client, result[1]);
  const emoji2 = getEmojiByName(client, result[2]);

  let sendText = `<:${emoji0.name}:${emoji0.id}> <:${emoji1.name}:${emoji1.id}> <:${emoji2.name}:${emoji2.id}>`;
  if (result[0] === 'tori' && result[1] === 'ki' && result[2] === 'zoku') {
    sendText += ' 🎉';
  }

  return sendText;
};
