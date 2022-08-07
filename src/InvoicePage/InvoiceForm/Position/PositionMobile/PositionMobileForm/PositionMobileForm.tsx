import ReactDOM from "react-dom";
import PositionMobHeader from "./PositionMobHeader/PositionMobHeader";
import style from "./PositionMobileForm.module.css";
import PositionMobNewForm from "./PositionMobNewForm/PositionMobNewForm";

interface IPositionMobileForm {
  closeForm: any;
  initialValue: any;
  values: any;
  pushPosit: any;
  renderPattern: any;
}

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
