interface positionsWhat {
  readonly value: string;
  readonly label: string;
  readonly isDisabled?: boolean;
}

export const positionsWhat = [
  {
    label: "Количество",
    value: "Количество",
    isDisabled: true,
  },
  {
    label: "шт.",
    value: "шт.",
  },
  {
    label: "тыс.шт",
    value: "тыс.шт",
  },
  {
    label: "млн.шт",
    value: "млн.шт",
  },
  {
    label: "компл.",
    value: "компл.",
  },
];

export const positionsNds = [
  {
    label: "Без НДС",
    value: "Без НДС",
  },
  {
    label: "НДС 0%",
    value: "НДС 0%",
  },
  {
    label: "НДС 10%",
    value: "НДС 10%",
  },
  {
    label: "НДС 20%",
    value: "НДС 20%",
  },
];
