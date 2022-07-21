import React from "react";
import { FieldRenderProps } from "react-final-form";
import { priceTooltipMessage } from "../../Tooltip/tooltipMessage";
import TooltipPrice from "../../Tooltip/TooltipPrice/TooltipPrice";
import errorStyle from "../../ErrorMessage.module.css";
import style from "./PositionPrice.module.css";

type Props = FieldRenderProps<string, any>;

const PositionPrice: React.FC<Props> = ({ input, meta, ...rest }: Props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.item}>
        <div className={style.itemHeader}>
          <span className={style.itemName}>Цена</span>
          <div className={style.tooltip}>
            <TooltipPrice>{priceTooltipMessage}</TooltipPrice>
          </div>
        </div>
        <div className={style.itemValue}>
          <input type="number" className={style.input} {...input} {...rest} />
          <span className={errorStyle.message}>{meta.error}</span>
        </div>
      </div>
    </div>
  );
};

export default PositionPrice;
