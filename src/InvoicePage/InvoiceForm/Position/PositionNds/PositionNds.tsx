import React from "react";
import Select from "react-select";
import { DropdownIndicator } from "../../DropdownIndicator/DropdownIndicator";
import { Props, Option } from "./PositionNds.type";
import { customStyles } from "./customStyles";
import style from "./PositionNds.module.css";

const PositionNds: React.FC<Props> = ({
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
        <div className={style.itemHeader}>
          <span className={style.itemName}>НДС</span>
        </div>
        <div className={style.itemValue}>
          <Select
            styles={customStyles}
            components={{ DropdownIndicator }}
            defaultValue={options[0]}
            {...input}
            {...rest}
            onChange={handleChange}
            options={options}
            value={
              options
                ? options.find((option: Option) => option.value === input.value)
                : ""
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PositionNds;
