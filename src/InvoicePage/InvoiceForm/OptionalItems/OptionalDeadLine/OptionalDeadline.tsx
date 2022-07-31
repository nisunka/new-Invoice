import React from "react";
import { FieldRenderProps } from "react-final-form";
import TooltipDeadline from "../../Tooltip/TooltipDeadline/TooltipDeadline";
import { deadLineTooltipMessage } from "../../Tooltip/tooltipMessage";
import style from "./OptionalDeadline.module.css";
import errorStyle from "../../ErrorMessage.module.css";
import { validate } from "../../validation/validateInputNumber";

type Props = FieldRenderProps<string, any>;

const OptionalDeadline: React.FC<Props> = ({ input, meta, ...rest }: Props) => {
  return (
    <div className={style.container} tabIndex={0}>
      <div className={style.leftSide}>
        <div className={style.leftWrapper}>
          <span className={style.namePosition}>Срок оплаты</span>
          <div className={style.tooltip}>
            <TooltipDeadline>{deadLineTooltipMessage}</TooltipDeadline>
          </div>
        </div>
      </div>
      <div className={style.rightSide}>
        <input
          className={style.input}
          type="text"
          {...input}
          {...rest}
          onKeyPress={validate}
        />
        {meta.error && meta.touched && (
          <span
            className={`${errorStyle.messageOptionalBlock} ${errorStyle.optionalDate}`}
          >
            {meta.error}
          </span>
        )}
      </div>
    </div>
  );
};

export default OptionalDeadline;
