import React from "react";
import { FieldRenderProps } from "react-final-form";
import style from "./NdsOption.module.css";

function RadioInput<T extends string>({
  input,
  meta,
  ...rest
}: FieldRenderProps<T, any>) {
  return (
    <label className={style.label} htmlFor="one">
      <input
        className={style.input}
        type="radio"
        {...input}
        {...rest}
        id="one"
      />
    </label>
  );
}

export default RadioInput;
