import dayjs from "dayjs";

export const maxValue =
  (max: number, emptySpace: number) => (value: string | number) => {
    if (typeof value === "string") {
      return value.length > max
        ? `Сократите до ${max - emptySpace} символов`
        : undefined;
    } else {
      return value > max ? `Сократите до ${max} символов` : undefined;
    }
  };

export const validateDataOfCreation =
  (validAmount: number) => (value: string) => {
    if (value.length === 10) {
      console.log("все ок");
    } else if (value.length === 0) {
      return "";
    } else if (value.length < 10 && value.length !== 0) {
      return `Укажите дату в формате дд.мм.гггг`;
    }
  };

export const validateDeadLine = (validAmount: number) => (value: string) => {
  if (value.length === 10) {
    return validateDeadLineStep2(value);
  } else if (value.length === 0) {
    return "";
  } else if (value.length < 10 && value.length !== 0) {
    return `Укажите дату в формате дд.мм.гггг`;
  }
};

const validateDeadLineStep2 = (value: string) => {
  const customParseFormat = require("dayjs/plugin/customParseFormat");
  dayjs.extend(customParseFormat);
  const date = dayjs(value, "DD.MM.YYYY").add(3, "hour");
  const today = dayjs();
  if (dayjs(value, "MM.DD.YY").isValid() === true) {
    var isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
    dayjs.extend(isSameOrAfter);
    if (!dayjs(date).isSameOrAfter(today)) {
      return "Проверьте дату";
    } else {
      return "";
    }
  }
};
