import React from "react";
import { FieldRenderProps } from "react-final-form";
import style from "./PositionTotal.module.css";

type Props = FieldRenderProps<number, any>;

const PositionTotal: React.FC<Props> = ({ input, meta, ...rest }: Props) => {
  return (
    <div>
      <div className={style.item}>
        <label htmlFor="input-positionTotal">
          <div className={style.itemHeader}>
            <span className={style.itemName}>Итого</span>
          </div>
          <div className={style.itemValue}>
            <input
              className={style.input}
              id="input-positionTotal"
              type="number"
              {...input}
              {...rest}
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default PositionTotal;
