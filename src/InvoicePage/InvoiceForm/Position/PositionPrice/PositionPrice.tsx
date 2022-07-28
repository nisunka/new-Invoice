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
          <div className={style.headerMobile}>
            <span className={style.titleMobile}>Стоимость</span>
            <p className={style.descrMobile}>
              Укажите цену с учётом НДС. Без НДС, если платите налоги по УСН.
              Если у вас ОСНО и вы продаёте товары или услуги, освобождённые от
              уплаты НДС, выберите НДС 0%.
            </p>
          </div>
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
