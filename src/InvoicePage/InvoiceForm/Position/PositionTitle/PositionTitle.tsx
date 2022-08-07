import React from "react";
import { FieldRenderProps } from "react-final-form";
import { CounterSymbols } from "../../CounterSymbols/CounterSymbols";
import style from "./PositionTitle.module.css";

type Props = FieldRenderProps<string, any>;

const PositionTitle: React.FC<Props> = ({
  valueLength,
  maxSymbols,
  input,
  meta,
  ...rest
}: Props) => {
  return (
    <div className={style.header} tabIndex={0}>
      <div className={style.headerWrapper}>
        <div className={style.itemHeader}>
          <span className={style.itemName}>Название</span>
        </div>
        <textarea
          maxLength={510}
          className={style.textarea}
          {...input}
          {...rest}
        />
        <span className={style.counter}>
          {CounterSymbols(valueLength, maxSymbols)}
        </span>
      </div>
    </div>
  );
};

export default PositionTitle;
