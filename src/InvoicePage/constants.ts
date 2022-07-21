// Исходные значения

export const initialInvoiceValues = {
  choiceAccount: "",
  partnerName: "",
  positions: [
    { title: "", count: 1, what: "шт.", price: "", nds: "Без НДС", total: 0 },
  ],
  additional: {
    base: "",
    name: "",
    priceNumber: "",
    dataOfCreation: "",
    deadLine: "",
  },
  withApproved: false,
};