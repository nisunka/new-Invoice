import React from "react";
import { FieldRenderProps } from "react-final-form";
import errorStyle from "../../ErrorMessage.module.css";
import { validate } from "../../validation/validateInputNumber";
import style from "./PositionCount.module.css";

type Props = FieldRenderProps<number, any>;

const PositionCount: React.FC<Props> = ({ input, meta, ...rest }: Props) => {
  return (
    <div>
      <div className={style.item}>
        <label htmlFor="input-positionCount">
          <div className={style.itemHeader}>
            <span className={style.itemName}>Количество</span>
          </div>
          <div className={`${style.itemValue} borderMobileErrorCount`}>
            <input
              className={style.input}
              id="input-positionCount"
              type="string"
              {...input}
              {...rest}
              onKeyPress={validate}
            />
            <span className={errorStyle.message}>{meta.error}</span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default PositionCount;
