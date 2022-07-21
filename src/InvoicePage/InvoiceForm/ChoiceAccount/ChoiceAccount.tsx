import React from "react";
import { FieldRenderProps } from "react-final-form";
import Select, { components } from "react-select";
import {
  groupedOption,
  otherAccount,
  tochkaAccount,
} from "./choiceAccountOptions";
import { ReactComponent as ArrowSelect } from "../../../assets/img/icon/arrowSelect.svg";
import "./ChoiceAccountSelect.css";
import style from "./ChoiceAccount.module.css";

type Props = FieldRenderProps<string, HTMLElement>;

type Option = {
  label: string;
  value: string;
};

const ChoiceAccount: React.FC<Props> = ({
  input,
  options,
  meta,
  ...rest
}: Props) => {
  const handleChange = (option: any) => {
    input.onChange(option?.value);
  };

  // styles
  const customStyles = {
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: (base: any, state: any) => ({
      ...base,
      transition: "all .2s ease",
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      // borderBottom: "1px dotted black",
      // color: state.isSelected ? "black" : "black",
      color: "black",
      padding: 14,
      borderRadius: 10,
      cursor: state.isDisabled ? "auto" : "pointer",
      backgroundColor: state.isFocused ? "var(--grey-transparent-01)" : null,
    }),
    control: () => ({
      // ширина инпута всего
      width: "400px",
      display: "flex",
    }),
    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <ArrowSelect />
      </components.DropdownIndicator>
    );
  };

  return (
    <div className={style.container} tabIndex={0}>
      <div className={style.leftSide}>
        <div className={style.leftWrapper}>
          <span className={style.namePosition}>Выберите счёт</span>
        </div>
      </div>
      <div className={`${style.rightSide} ${"rightSide"}`}>
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
