import dayjs from "dayjs";

export const maxValue =
  (max: number, emptySpace: number) => (value: string | number) => {
    const borderErrorOpt = document.querySelector(
      ".borderMobileErrorOptPriceN"
    );
    if (typeof value === "string") {
      if (value.length > max) {
        borderErrorOpt?.classList.add("borderMobileErrorRed");
        return `Сократите до ${max - emptySpace} символов`;
      } else {
        borderErrorOpt?.classList.remove("borderMobileErrorRed");
        return undefined;
      }
    } else {
      if (value > max) {
        borderErrorOpt?.classList.add("borderMobileErrorRed");
        return `Сократите до ${max} символов`;
      } else {
        borderErrorOpt?.classList.remove("borderMobileErrorRed");
        return undefined;
      }
    }
  };

export const maxValueName =
  (max: number, emptySpace: number) => (value: string | number) => {
    const borderErrorOptName = document.querySelector(
      ".borderMobileErrorOptName"
    );
    if (typeof value === "string") {
      if (value.length > max) {
        borderErrorOptName?.classList.add("borderMobileErrorRed");
        return `Сократите до ${max - emptySpace} символов`;
      } else {
        borderErrorOptName?.classList.remove("borderMobileErrorRed");
        return undefined;
      }
    } else {
      if (value > max) {
        borderErrorOptName?.classList.add("borderMobileErrorRed");
        return `Сократите до ${max} символов`;
      } else {
        borderErrorOptName?.classList.remove("borderMobileErrorRed");
        return undefined;
      }
    }
  };

export const maxValueBase =
  (max: number, emptySpace: number) => (value: string | number) => {
    const borderErrorOpt = document.querySelector(".borderMobileErrorOptBase");
    if (typeof value === "string") {
      if (value.length > max) {
        borderErrorOpt?.classList.add("borderMobileErrorRed");
        return `Сократите до ${max - emptySpace} символов`;
      } else {
        borderErrorOpt?.classList.remove("borderMobileErrorRed");
        return undefined;
      }
    } else {
      if (value > max) {
        borderErrorOpt?.classList.add("borderMobileErrorRed");
        return `Сократите до ${max} символов`;
      } else {
        borderErrorOpt?.classList.remove("borderMobileErrorRed");
        return undefined;
      }
    }
  };

export const validateDataOfCreation =
  (validAmount: number) => (value: string) => {
    const borderErrorOpt = document.querySelector(
      ".borderMobileErrorDataOfCreation"
    );
    if (value.length === 10) {
      var regex =
        /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
      if (!regex.test(value)) {
        borderErrorOpt?.classList.add("borderMobileErrorRed");
        return `Укажите дату в формате дд.мм.гггг`;
      }
    } else if (value.length === 0) {
      borderErrorOpt?.classList.remove("borderMobileErrorRed");
      return "";
    } else if (value.length < 10 && value.length !== 0) {
      borderErrorOpt?.classList.add("borderMobileErrorRed");
      return `Укажите дату в формате дд.мм.гггг`;
    }
  };

export const validateDeadLine = (validAmount: number) => (value: string) => {
  const borderErrorOpt = document.querySelector(".borderMobileErrorDeadline");
  if (value.length === 10) {
    var regex =
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    if (!regex.test(value)) {
      borderErrorOpt?.classList.add("borderMobileErrorRed");
      return `Укажите дату в формате дд.мм.гггг`;
    } else {
      return validateDeadLineStep2(value);
    }
  } else if (value.length === 0) {
    borderErrorOpt?.classList.remove("borderMobileErrorRed");
    return "";
  } else if (value.length < 10 && value.length !== 0) {
    borderErrorOpt?.classList.add("borderMobileErrorRed");
    return `Укажите дату в формате дд.мм.гггг`;
  }
};

const validateDeadLineStep2 = (value: string) => {
  const borderErrorOpt = document.querySelector(".borderMobileErrorDeadline");
  const customParseFormat = require("dayjs/plugin/customParseFormat");
  dayjs.extend(customParseFormat);
  const date = dayjs(value, "DD.MM.YYYY").add(3, "hour");
  const today = dayjs();
  if (dayjs(value, "MM.DD.YY").isValid() === true) {
    var isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
    dayjs.extend(isSameOrAfter);
    if (!dayjs(date).isSameOrAfter(today)) {
      borderErrorOpt?.classList.add("borderMobileErrorRed");
      return "Проверьте дату";
    } else {
      borderErrorOpt?.classList.remove("borderMobileErrorRed");
      return "";
    }
  }
};
