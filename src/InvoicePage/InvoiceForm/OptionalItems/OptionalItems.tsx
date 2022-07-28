import React from "react";
import { Field } from "react-final-form";
import { IOptionalItems } from "./OptionalItems.interface";
import OptionalBase from "./OptionalBase/OptionalBase";
import OptionalDataOfCreation from "./OptionalDataOfCreation/OptionalDataOfCreation";
import OptionalDeadline from "./OptionalDeadLine/OptionalDeadline";
import OptionalName from "./OptionalName/OptionalName";
import OptionalPriceNumber from "./OptionalPriceNumber/OptionalPriceNumber";
import formatString from "format-string-by-pattern";
import "dayjs/plugin/isSameOrAfter";
import {
  maxValue,
  validateDataOfCreation,
  validateDeadLine,
} from "../validation/validateOptionalItems";
import { maskPriceNumber, maskDate } from "./optionalItemsMask";

const OptionalItems = ({ values }: IOptionalItems) => {
  return (
    <div>
      <Field<string>
        name="additional.base"
        component={OptionalBase}
        placeholder="Необязательно"
        validate={maxValue(210, 0)}
        valueLength={String(values.base.length)}
        maxSymbols={210}
      />
      <Field<string>
        name="additional.name"
        component={OptionalName}
        placeholder="Должность и ФИО заказчика"
        validate={maxValue(120, 0)}
        valueLength={String(values.name.length)}
        maxSymbols={120}
      />
      <Field<string>
        name="additional.priceNumber"
        component={OptionalPriceNumber}
        placeholder="Укажите номер счёта"
        validate={maxValue(24, 4)}
        valueLength={Number(values.priceNumber.length)}
        parse={formatString(maskPriceNumber.parse)}
      />
      <Field<string>
        name="additional.dataOfCreation"
        component={OptionalDataOfCreation}
        placeholder="дд.мм.ггг"
        parse={formatString(maskDate.parse)}
        validate={validateDataOfCreation(10)}
      />
      <Field<string>
        name="additional.deadLine"
        component={OptionalDeadline}
        placeholder="дд.мм.ггг"
        parse={formatString(maskDate.parse)}
        validate={validateDeadLine(10)}
      />
    </div>
  );
};

export default OptionalItems;
