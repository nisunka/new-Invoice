import React from "react";
import { Field } from "react-final-form";
import OptionalBase from "./OptionalBase/OptionalBase";
import OptionalDataOfCreation from "./OptionalDataOfCreation/OptionalDataOfCreation";
import OptionalDeadline from "./OptionalDeadLine/OptionalDeadline";
import style from "./OptionalItems.module.css";
import OptionalName from "./OptionalName/OptionalName";
import OptionalPriceNumber from "./OptionalPriceNumber/OptionalPriceNumber";
import dayjs from "dayjs";

interface IOptionalItems {
  initialValue: any;
  values: any;
}

const maxValue = (max: number) => (value: string | number) => {
  if (typeof value === "string") {
    return value.length > max ? `Сократите до ${max} символов` : undefined;
  } else {
    return value > max ? `Сократите до ${max} символов` : undefined;
  }
};

const OptionalItems = ({ initialValue, values }: IOptionalItems) => {
  return (
    <div className={style.container}>
      <Field<string>
        name="additional.base"
        component={OptionalBase}
        placeholder="Необязательно"
        validate={maxValue(210)}
        valueLength={String(values.base.length)}
        maxSymbols={210}
      />
      <Field<string>
        name="additional.name"
        component={OptionalName}
        placeholder="Должность и ФИО заказчика"
        validate={maxValue(120)}
        valueLength={String(values.name.length)}
        maxSymbols={120}
      />
      <Field<number>
        name="additional.priceNumber"
        component={OptionalPriceNumber}
        placeholder="Укажите номер счёта"
        validate={maxValue(20)}
        valueLength={values.priceNumber.length}
        maxSymbols={20}
      />
      <Field<string>
        name="additional.dataOfCreation"
        component={OptionalDataOfCreation}
        placeholder="дд.мм.ггг"
      />
      <Field<string>
        name="additional.deadLine"
        component={OptionalDeadline}
        placeholder="дд.мм.ггг"
      />
    </div>
  );
};

export default OptionalItems;
