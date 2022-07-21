import React from "react";
import { FieldRenderProps } from "react-final-form";
import countSymbols from "../../CountSymbols.module.css";
import style from "./PositionTitle.module.css";

type Props = FieldRenderProps<string, any>;

const counterSymbols = (valueLength: string, maxSymbols: number) => {
  if (Number(valueLength) > maxSymbols) {
    return (
      <span className={countSymbols.countError}>
        {valueLength} / {maxSymbols}
      </span>
    );
  } else {
    return (
      <span className={countSymbols.count}>
        {valueLength} / {maxSymbols}
      </span>
    );
  }
};

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
        <textarea
          maxLength={510}
          className={style.textarea}
          {...input}
          {...rest}
        />
        <span className={style.counter}>
          {counterSymbols(valueLength, maxSymbols)}
        </span>
      </div>
    </div>
  );
};

export default PositionTitle;
