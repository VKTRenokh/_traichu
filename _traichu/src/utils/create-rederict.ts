export const createRederict = (key: string, link: string): [string, () => void] => [
  key,
  () => window.location.assign(link),
];
