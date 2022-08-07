import { push } from "final-form-arrays";
import { useEffect, useState } from "react";
import { Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import { ReactComponent as MiniPlusIcon } from "../../../../assets/img/icon/miniPlusIcon.svg";
import PositionCount from "../PositionCount/PositionCount";
import PositionHeader from "../PositionHeader/PositionHeader";
import PositionNds from "../PositionNds/PositionNds";
import { positionsNds, positionsWhat } from "../positionOptions";
import PositionPrice from "../PositionPrice/PositionPrice";
import PositionTotal from "../PositionTotal/PositionTotal";
import PositionWhat from "../PositionWhat/PositionWhat";
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
  let patternS = null;
  if (openPattern) {
    patternS = (
      <FieldArray name="positions" initialValue={values}>
        {({ positions }: any) =>
          values.positions.map((name: string, index: number) => (
            <div key={index}>
              <PositionMobilePattern values={values} />
            </div>
          ))
        }
      </FieldArray>
    );
  } else {
    let patternS = null;
  }

  const renderPattern = (values: any) => {
    setOpenPattern(true);
    console.log("зашло в функцию рендера", values);
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
        {patternS}
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
