import React from "react";
import { FieldRenderProps } from "react-final-form";
import errorStyle from "../../ErrorMessage.module.css";
import style from "./PositionCount.module.css";

type Props = FieldRenderProps<number, any>;

const PositionCount: React.FC<Props> = ({ input, meta, ...rest }: Props) => {
  return (
    <div>
      <div className={style.item}>
        <div className={style.itemHeader}>
          <span className={style.itemName}>Количество</span>
        </div>
        <div className={style.itemValue}>
          <input className={style.input} type="number" {...input} {...rest} />
          <span className={errorStyle.message}>{meta.error}</span>
        </div>
      </div>
    </div>
  );
};

export default PositionCount;
