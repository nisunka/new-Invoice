import React from "react";
import { FieldRenderProps } from "react-final-form";
import TooltipDeadline from "../../Tooltip/TooltipDeadline/TooltipDeadline";
import { deadLineTooltipMessage } from "../../Tooltip/tooltipMessage";
import InputMask from "react-input-mask";
import style from "./OptionalDeadline.module.css";

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
        <InputMask
          mask="99.99.9999"
          maskPlaceholder={null}
          className={style.input}
          type="text"
          {...input}
          {...rest}
        />
      </div>
    </div>
  );
};

export default OptionalDeadline;
