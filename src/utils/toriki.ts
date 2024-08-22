const getRandomIndex = (): 'tori' | 'ki' | 'zoku' => {
  const rand = Math.floor(Math.random() * 3);
  return rand === 1 ? 'tori' : rand === 2 ? 'ki' : 'zoku';
};

export const toriki = (): [
  'tori' | 'ki' | 'zoku',
  'tori' | 'ki' | 'zoku',
  'tori' | 'ki' | 'zoku',
] => {
  return [getRandomIndex(), getRandomIndex(), getRandomIndex()];
};
