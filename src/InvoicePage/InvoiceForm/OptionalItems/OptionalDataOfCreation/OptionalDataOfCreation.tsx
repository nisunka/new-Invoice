import React from "react";
import { FieldRenderProps } from "react-final-form";
import style from "./OptionalDataOfCreation.module.css";
import dayjs from "dayjs";
import InputMask from "react-input-mask";

type Props = FieldRenderProps<string, any>;

const OptionalDataOfCreation: React.FC<Props> = ({
  input,
  meta,
  ...rest
}: Props) => {
  return (
    <div className={style.container} tabIndex={0}>
      <div className={style.leftSide}>
        <div className={style.leftWrapper}>
          <span className={style.namePosition}>Дата выставления</span>
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

export default OptionalDataOfCreation;
