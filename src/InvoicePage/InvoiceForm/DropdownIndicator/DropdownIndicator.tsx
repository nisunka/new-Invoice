import { components } from "react-select";
import { ReactComponent as ArrowSelect } from "../../../assets/img/icon/arrowSelect.svg";

export const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <ArrowSelect />
    </components.DropdownIndicator>
  );
};
