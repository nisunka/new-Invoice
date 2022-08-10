import { FieldRenderProps } from "react-final-form";

function RadioInput<T extends string>({
  input,
  meta,
  ...rest
}: FieldRenderProps<T, any>) {
  return (
    <label htmlFor="one">
      <input type="radio" {...input} {...rest} id="one" />
    </label>
  );
}

export default RadioInput;
