export const getRandomInt = (min: number, max: number): number => {
  const randFactor = Math.random();
  return Math.floor(randFactor * (max - min) + min);
};
