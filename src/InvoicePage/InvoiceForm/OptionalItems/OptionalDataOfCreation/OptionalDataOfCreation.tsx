import React from "react";
import { FieldRenderProps } from "react-final-form";
import style from "./OptionalDataOfCreation.module.css";
import errorStyle from "../../ErrorMessage.module.css";
import { validate } from "../../validation/validateInputNumber";

type Props = FieldRenderProps<string, any>;

const OptionalDataOfCreation: React.FC<Props> = ({
  input,
  meta,
  ...rest
}: Props) => {
  return (
    <div className={style.container} tabIndex={0}>
      <label htmlFor="input-dataOfCreation" className={style.leftSide}>
        <div className={style.leftWrapper}>
          <span className={style.namePosition}>Дата выставления</span>
        </div>
      </label>
      <div className={`${style.rightSide} borderMobileErrorDataOfCreation`}>
        <input
          id="input-dataOfCreation"
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

export default OptionalDataOfCreation;
