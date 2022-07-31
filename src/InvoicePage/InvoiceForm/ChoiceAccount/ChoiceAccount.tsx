import React from "react";
import { Props, Option } from "./ChoiceAccount.type";
import Select from "react-select";
import {
  groupedOption,
  otherAccount,
  tochkaAccount,
} from "./choiceAccountOptions";
import { DropdownIndicator } from "../DropdownIndicator/DropdownIndicator";
import { customStyles } from "./customStyles";
import "./ChoiceAccountSelect.css";
import style from "./ChoiceAccount.module.css";

const ChoiceAccount: React.FC<Props> = ({
  input,
  options,
  meta,
  ...rest
}: Props) => {
  const handleChange = (option: any) => {
    input.onChange(option?.value);
  };

  return (
    <div className={`${style.container} containerChoiceAccount`} tabIndex={0}>
      <div className={style.leftSide}>
        <div>
          <span className={style.namePosition}>Выберите счёт</span>
        </div>
      </div>
      <div className={style.rightSide}>
        <Select<tochkaAccount | otherAccount, false, groupedOption>
          styles={customStyles}
          components={{ DropdownIndicator }}
          defaultValue={tochkaAccount[0]}
          {...input}
          {...rest}
          onChange={handleChange}
          options={options}
          value={
            options
              ? options.find((option: Option) => option.value === input.value)
              : ""
          }
          formatOptionLabel={(country) => (
            <div className="choiceAccountOption">
              <img
                className="choiceAccountOptionImage"
                src={country.image}
                alt="account"
              />
              <span>{country.label}</span>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default ChoiceAccount;
