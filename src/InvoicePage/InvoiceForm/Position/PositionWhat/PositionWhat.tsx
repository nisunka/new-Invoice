import React from "react";
import Select from "react-select";
import { DropdownIndicator } from "../../DropdownIndicator/DropdownIndicator";
import { customStyles } from "./customStyles";
import style from "./PositionWhat.module.css";
import { Props, Option } from "./PositionWhat.type";

const PositionWhat: React.FC<Props> = ({
  input,
  options,
  meta,
  ...rest
}: Props) => {
  const handleChange = (option: Option) => {
    input.onChange(option?.value);
  };

  return (
    <div>
      <div className={style.item}>
        <label htmlFor="input-positionWhat">
          <div className={style.itemHeader}>
            <span className={style.itemName}>Ед.измер.</span>
          </div>
          <div className={style.itemValue}>
            <Select
              {...input}
              {...rest}
              options={options}
              id="input-positionWhat"
              styles={customStyles}
              components={{ DropdownIndicator }}
              defaultValue={options[1]}
              onChange={handleChange}
              value={
                options.find(
                  (option: Option) => option.value === input.value
                ) || ""
              }
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default PositionWhat;
