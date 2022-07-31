export const customStyles = {
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
