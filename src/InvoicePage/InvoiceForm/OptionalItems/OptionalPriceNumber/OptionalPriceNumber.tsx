import React from "react";
import { FieldRenderProps } from "react-final-form";
import errorStyle from "../../ErrorMessage.module.css";
import style from "./OptionalPriceNumber.module.css";

type Props = FieldRenderProps<number, any>;

const OptionalPriceNumber: React.FC<Props> = ({
  valueLength,
  maxSymbols,
  input,
  meta,
  ...rest
}: Props) => {
  return (
    <div className={style.container} tabIndex={0}>
      <div className={style.leftSide}>
        <div className={style.leftWrapper}>
          <span className={style.namePosition}>Номер выставляемого счёта</span>
        </div>
      </div>
      <div className={style.rightSide}>
        <input className={style.input} type="number" {...input} {...rest} />
        {meta.error && meta.touched && (
          <span className={errorStyle.message}>{meta.error}</span>
        )}
      </div>
    </div>
  );
};

export default OptionalPriceNumber;
