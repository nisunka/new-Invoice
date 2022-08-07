import React from "react";
import { FieldRenderProps } from "react-final-form";
import TooltipBase from "../../Tooltip/TooltipBase/TooltipBase";
import { baseTooltipMessage } from "../../Tooltip/tooltipMessage";
import { CounterSymbols } from "../../CounterSymbols/CounterSymbols";
import errorStyle from "../../ErrorMessage.module.css";
import style from "./OptionalBase.module.css";

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
      <label htmlFor="input-base" className={style.leftSide}>
        <div className={style.leftWrapper}>
          <span className={style.namePosition}>Основание</span>
          <div className={style.tooltip}>
            <TooltipBase>{baseTooltipMessage}</TooltipBase>
          </div>
        </div>
      </label>
      <div className={style.rightSide}>
        <input
          className={style.input}
          id="input-base"
          type="text"
          {...input}
          {...rest}
        />
        <span className={style.counter}>
          {CounterSymbols(valueLength, maxSymbols)}
        </span>

        {meta.error && meta.touched && (
          <span
            className={`${errorStyle.messageOptionalBlock} ${errorStyle.optionalBase}`}
          >
            {meta.error}
          </span>
        )}
      </div>
    </div>
  );
};

export default OptionalBase;
