export const maxCount = (max: number) => (value: string | number) =>
  value >= max ? `Макс. ${max}` : undefined;

export const maxPrice = (max: number) => (value: string | number) =>
  Number(value) >= max ? `Макс. ${max} ₽` : undefined;
