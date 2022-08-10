import React from "react";
import { FieldRenderProps } from "react-final-form";
import { validate } from "../../validation/validateInputNumber";
import errorStyle from "../../ErrorMessage.module.css";
import style from "./OptionalPriceNumber.module.css";

type Props = FieldRenderProps<string, any>;

const OptionalPriceNumber: React.FC<Props> = ({
  valueLength,
  maxSymbols,
  input,
  meta,
  ...rest
}: Props) => {
  return (
    <div className={style.container} tabIndex={0}>
      <label htmlFor="input-price" className={style.leftSide}>
        <div className={style.leftWrapper}>
          <span className={style.namePosition}>Номер выставляемого счёта</span>
        </div>
      </label>
      <div className={`${style.rightSide} borderMobileErrorOptPriceN`}>
        <input
          id="input-price"
          className={style.input}
          type="text"
          {...input}
          {...rest}
          onKeyPress={validate}
        />
        {meta.error && meta.touched && (
          <span
            className={`${errorStyle.messageOptionalBlock} ${errorStyle.optionalPNumber}`}
          >
            {meta.error}
          </span>
        )}
      </div>
    </div>
  );
};

export default OptionalPriceNumber;
