import { IPositionMobile } from "./PositionMobile.interface";
import { useState } from "react";
import { FieldArray } from "react-final-form-arrays";
import { ReactComponent as MiniPlusIcon } from "../../../../assets/img/icon/miniPlusIcon.svg";
import PositionMobileForm from "./PositionMobileForm/PositionMobileForm";
import PositionMobilePattern from "./PositionMobilePattern/PositionMobilePattern";
import style from "./PositionMobile.module.css";

const PositionMobile = ({
  initialValue,
  values,
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
  // открытие элементов
  const renderPattern = (values: any) => {
    setOpenPattern(true);
    document.querySelector("#root")!.classList.remove("fixedRoot");
    setOpenForm(!setOpenForm);
  };
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
        {openPattern && (
          <FieldArray name="positions" initialValue={values}>
            {() =>
              values.positions.map((name: string, index: number) => (
                <div key={index}>
                  <PositionMobilePattern
                    values={values.positions[index]}
                    deletePosition={() => deletePosition(index)}
                    duplicatePosition={() => duplicatePosition(index)}
                  />
                </div>
              ))
            }
          </FieldArray>
        )}
        {formOpened}
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
