export const customStyles = {
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (base: any, state: any) => ({
    ...base,
    transition: "all .2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
  }),
  menu: (base: any, state: any) => ({
    ...base,
    display: "absolute",
    left: "0",
    borderRadius: "10px",
    boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
    zIndex: 15,
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: "black",
    padding: 14,
    borderRadius: 10,
    cursor: state.isDisabled ? "auto" : "pointer",
    backgroundColor: state.isFocused ? "var(--grey-transparent-01)" : null,
  }),
  control: () => ({
    width: "400px",
    display: "flex",
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};
