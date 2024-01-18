export const parseKey = (event: KeyboardEvent): string => {
  if (event.ctrlKey) {
    return `<C-${event.key}>`;
  }

  if (event.altKey) {
    return `<A-${event.key}>`;
  }

  return event.key;
};
