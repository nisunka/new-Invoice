import ReactDOM from "react-dom";
import { IPositionMobileForm } from "./PositionMobileForm.interface";
import PositionMobHeader from "./PositionMobHeader/PositionMobHeader";
import style from "./PositionMobileForm.module.css";
import PositionMobNewForm from "./PositionMobNewForm/PositionMobNewForm";

const PositionMobileForm = ({
  closeForm,
  initialValue,
  values,
  pushPosit,
  renderPattern,
}: IPositionMobileForm) => {
  const modal = document.querySelector("#mobile-position");
  if (!modal) return null;
  return ReactDOM.createPortal(
    <div className={style.container}>
      <div className={style.wrapper}>
        <PositionMobHeader closeForm={closeForm} title="Новая позиция" />
        <PositionMobNewForm
          initialValue={initialValue}
          values={values}
          pushPosit={pushPosit}
          renderPattern={renderPattern}
        />
      </div>
    </div>,
    modal
  );
};

export default PositionMobileForm;
