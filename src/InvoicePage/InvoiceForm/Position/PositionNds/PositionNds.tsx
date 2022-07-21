import React from "react";
import { FieldRenderProps } from "react-final-form";
import Select, { components } from "react-select";
import style from "./PositionNds.module.css";
import { ReactComponent as ArrowSelect } from "../../../../assets/img/icon/arrowSelect.svg";

type Props = FieldRenderProps<string, HTMLElement>;

type Option = {
  label: string;
  value: string;
};

const PositionNds: React.FC<Props> = ({
  input,
  options,
  meta,
  ...rest
}: Props) => {
  const handleChange = (option: Option) => {
    input.onChange(option?.value);
  };

  const customStyles = {
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: (base: any, state: any) => ({
      ...base,
      transition: "all .2s ease",
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    }),

    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isDisabled ? "var(--medium-grey)" : "var(--dark)",
      padding: 20,
      borderRadius: 10,
      cursor: state.isDisabled ? "auto" : "pointer",
      backgroundColor: state.isFocused ? "var(--grey-transparent-01)" : null,
    }),
    control: () => ({
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
    <div className={style.wrapper}>
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
