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
      <label htmlFor="select-choiceAccount" className={style.leftSide}>
        <div>
          <span className={style.namePosition}>Выберите счёт</span>
        </div>
      </label>
      <div className={style.rightSide}>
        <Select<tochkaAccount | otherAccount, false, groupedOption>
          {...input}
          {...rest}
          options={options}
          id="select-choiceAccount"
          styles={customStyles}
          components={{ DropdownIndicator }}
          value={
            options.find((option: Option) => option.value === input.value) ||
            tochkaAccount[0]
          }
          defaultValue={tochkaAccount[0]}
          onChange={handleChange}
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
