import React from "react";
import ReactDOM from "react-dom";
import { Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import HeaderNavigation from "../../../HeaderNavigation/HeaderNavigation";
import PositionCount from "../PositionCount/PositionCount";
import PositionHeaderMobile from "../PositionHeaderMobile/PositionHeaderMobile";
import PositionNds from "../PositionNds/PositionNds";
import { positionsNds, positionsWhat } from "../positionOptions";
import PositionPrice from "../PositionPrice/PositionPrice";
import PositionWhat from "../PositionWhat/PositionWhat";
import style from "./PositionMobile.module.css";

interface IPositionMobile {
  initialValue: any;
  values: any;
  addPosition: any;
  deletePosition: any;
  duplicatePosition: any;
  savePosition: any;
}

const maxCount = (max: number) => (value: string | number) =>
  value >= max ? `Макс. ${max}` : undefined;

const maxPrice = (max: number) => (value: string | number) =>
  Number(value) >= max ? `Макс. ${max} ₽` : undefined;

// const savePosition = () => {
//   return
// }

const PositionMobile = ({
  initialValue,
  values,
  addPosition,
  deletePosition,
  duplicatePosition,
  savePosition,
}: IPositionMobile) => {
  const modal = document.querySelector("#mobile-position");
  if (!modal) return null;
  return ReactDOM.createPortal(
    <div className={style.containerPositionMobile}>
      <div className={style.wrapperPositionMobile}>
        <div className={style.header}>
          <HeaderNavigation title="Новая позиция" />
        </div>
        <div className={style.bodyPosition}>
          <FieldArray name="positions" initialValue={initialValue}>
            {({ positions }: any) =>
              values.positions.map((name: string, index: number) => (
                <div key={index}>
                  <div className={style.container}>
                    <div className={style.bodyItem}>
                      <PositionHeaderMobile
                        name={`positions.${index}.title`}
                        valueLength={values.positions[index].title.length}
                      />
                    </div>
                    <div className={style.bodyItem}>
                      <Field<number>
                        name={`positions.${index}.count`}
                        component={PositionCount}
                        validate={maxCount(99999)}
                      />
                    </div>
                    <div className={style.bodyItem}>
                      <Field<string>
                        name={`positions.${index}.what`}
                        component={PositionWhat}
                        options={positionsWhat}
                      />
                    </div>
                    <div className={style.bodyItem}>
                      <Field<string>
                        name={`positions.${index}.price`}
                        component={PositionPrice}
                        placeholder="0 &#8381;"
                        validate={maxPrice(99999999)}
                      />
                    </div>
                    <div className={style.bodyItem}>
                      <Field<string>
                        name={`positions.${index}.nds`}
                        component={PositionNds}
                        options={positionsNds}
                      />
                    </div>
                  </div>
                </div>
              ))
            }
          </FieldArray>
          <div className={style.btnContainer}>
            <button className={style.btnSavePosition} onClick={savePosition}>
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>,
    modal
  );
};

export default PositionMobile;
