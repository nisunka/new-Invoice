export const maxCount = (max: number) => (value: string | number) =>
  value >= max
    ? `Макс. ${String(max).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}`
    : undefined;

export const maxCountMobile = (max: number) => (value: string | number) => {
  const borderError = document.querySelector(".borderMobileErrorCount");
  if (value >= max) {
    borderError?.classList.add("borderMobileErrorRed");
    return `Максимальное количество — ${String(max).replace(
      /(\d)(?=(\d\d\d)+([^\d]|$))/g,
      "$1 "
    )}`;
  } else {
    borderError?.classList.remove("borderMobileErrorRed");
    return undefined;
  }
};

export const maxPrice = (max: number) => (value: string | number) =>
  Number(value) >= max
    ? `Макс. ${String(max).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")} ₽`
    : undefined;

export const maxPriceMobile = (max: number) => (value: string | number) => {
  const borderError = document.querySelector(".borderMobileErrorPrice");
  if (value >= max) {
    borderError?.classList.add("borderMobileErrorRed");
    return `Максимальная цена — ${String(max).replace(
      /(\d)(?=(\d\d\d)+([^\d]|$))/g,
      "$1 "
    )} ₽`;
  } else {
    borderError?.classList.remove("borderMobileErrorRed");
    return undefined;
  }
};
