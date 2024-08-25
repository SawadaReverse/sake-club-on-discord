import { randomInt } from 'crypto';

const getRandomIndex = (): 'tori' | 'ki' | 'zoku' => {
  const rand = randomInt(4);
  return rand === 1 ? 'tori' : rand === 2 ? 'ki' : 'zoku';
};

export const toriki = (): [
  'tori' | 'ki' | 'zoku',
  'tori' | 'ki' | 'zoku',
  'tori' | 'ki' | 'zoku',
] => {
  return [getRandomIndex(), getRandomIndex(), getRandomIndex()];
};
