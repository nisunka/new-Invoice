import React from "react";
import { FieldRenderProps } from "react-final-form";
import { CounterSymbols } from "../../CounterSymbols/CounterSymbols";
import errorStyle from "../../ErrorMessage.module.css";
import style from "./OptionalName.module.css";

type Props = FieldRenderProps<string, any>;

const OptionalBase: React.FC<Props> = ({
  valueLength,
  maxSymbols,
  input,
  meta,
  ...rest
}: Props) => {
  return (
    <div className={style.container} tabIndex={0}>
      <label htmlFor="input-name" className={style.leftSide}>
        <div className={style.leftWrapper}>
          <span className={style.namePosition}>Должность и ФИО заказчика</span>
        </div>
      </label>
      <div className={style.rightSide}>
        <input
          className={style.input}
          type="text"
          id="input-name"
          {...input}
          {...rest}
        />
        <span className={style.counter}>
          {CounterSymbols(valueLength, maxSymbols)}
        </span>
        {meta.error && meta.touched && (
          <span
            className={`${errorStyle.messageOptionalBlock} ${errorStyle.optionalName}`}
          >
            {meta.error}
          </span>
        )}
      </div>
    </div>
  );
};

export default OptionalBase;
