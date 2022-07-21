import React from "react";
import { FieldRenderProps } from "react-final-form";
import TooltipBase from "../../Tooltip/TooltipBase/TooltipBase";
import { baseTooltipMessage } from "../../Tooltip/tooltipMessage";
import errorStyle from "../../ErrorMessage.module.css";
import countSymbols from "../../CountSymbols.module.css";
import style from "./OptionalBase.module.css";

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

const OptionalBase: React.FC<Props> = ({
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
          <span className={style.namePosition}>Основание</span>
          <div className={style.tooltip}>
            <TooltipBase>{baseTooltipMessage}</TooltipBase>
          </div>
        </div>
      </div>
      <div className={style.rightSide}>
        <input className={style.input} type="text" {...input} {...rest} />
        <span className={style.counter}>
          {counterSymbols(valueLength, maxSymbols)}
        </span>

        {meta.error && meta.touched && (
          <span className={errorStyle.message}>{meta.error}</span>
        )}
      </div>
    </div>
  );
};

export default OptionalBase;
