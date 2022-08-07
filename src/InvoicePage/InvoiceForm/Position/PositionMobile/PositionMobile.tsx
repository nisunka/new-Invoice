import { push } from "final-form-arrays";
import { useEffect, useState } from "react";
import { ReactComponent as MiniPlusIcon } from "../../../../assets/img/icon/miniPlusIcon.svg";
import style from "./PositionMobile.module.css";
import PositionMobileForm from "./PositionMobileForm/PositionMobileForm";
import PositionMobilePattern from "./PositionMobilePattern/PositionMobilePattern";
// import PositionMobilePattern from "./PositionMobilePattern/PositionMobilePattern";

interface IPositionMobile {
  initialValue: any;
  values: any;
  addPosition: any;
  deletePosition: any;
  duplicatePosition: any;
  pushPosit: any;
}

const PositionMobile = ({
  initialValue,
  values,
  addPosition,
  deletePosition,
  duplicatePosition,
  pushPosit,
}: IPositionMobile) => {
  // состояние открытого или закрытого портала
  const [openForm, setOpenForm] = useState(false);
  // закрыть форму кнопкой назад
  const closeForm = () => {
    document.querySelector("#root")!.classList.remove("fixedRoot");
    setOpenForm(!setOpenForm);
  };

  // кнопка передать values и отрендерить компонент
  const [openPattern, setOpenPattern] = useState(false);
  let newPattern = null;
  const renderPattern = (values: any) => {
    setOpenPattern(true);
    console.log("зашло в функцию рендера", values);
  };

  if (openPattern) {
    newPattern =
      "Вот сюда должен рендерится компонент с данными из модалки <PositionMobilePattern />";
  } else {
    newPattern = null;
  }

  // генерация просто формы над позицией
  let formOpened = null;
  // кнопка добавить позицию
  if (openForm === true) {
    document.querySelector("#root")!.classList.add("fixedRoot");
    formOpened = (
      <PositionMobileForm
        closeForm={closeForm}
        initialValue={initialValue}
        values={values}
        pushPosit={pushPosit}
        renderPattern={renderPattern}
      />
    );
  } else {
    formOpened = null;
  }

  return (
    <div>
      <div className={style.container}>
        {formOpened}
        {newPattern}
        <div className={style.btnWrapper}>
          <button
            type="button"
            className={style.addBtn}
            onClick={() => setOpenForm(true)}
          >
            <MiniPlusIcon />
            <span>Добавить позицию</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default PositionMobile;
