import React, { useRef, useState } from "react";
import { Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import { MatchMediaWrapper } from "../../MatchMedia/MatchMediaWrapper";
import style from "./Position.module.css";
import PositionCount from "./PositionCount/PositionCount";
import PositionNds from "./PositionNds/PositionNds";
import { positionsWhat, positionsNds } from "./positionOptions";
import PositionPrice from "./PositionPrice/PositionPrice";
import PositionTitle from "./PositionTitle/PositionTitle";
import PositionTotal from "./PositionTotal/PositionTotal";
import PositionWhat from "./PositionWhat/PositionWhat";
import { ReactComponent as DeleteIcon } from "../../../assets/img/icon/deleteIcon.svg";
import { ReactComponent as DuplicateIcon } from "../../../assets/img/icon/duplicateIcon.svg";
import AddPositionDesktop from "./AddPositionDesktop/AddPositionDesktop";
import useOnClickOutside from "../useOnClickOutside";
import AddPositionMobile from "./AddPositionMobile/AddPositionMobile";

interface IPosition {
  initialValue: any;
  values: any;
  addPosition: any;
  deletePosition: any;
  duplicatePosition: any;
}

const maxCount = (max: number) => (value: string | number) =>
  value >= max ? `Макс. ${max}` : undefined;

const maxPrice = (max: number) => (value: string | number) =>
  Number(value) >= max ? `Макс. ${max} ₽` : undefined;

const Position = ({
  initialValue,
  values,
  addPosition,
  deletePosition,
  duplicatePosition,
}: IPosition) => {
  const [openMenu, setOpenMenu] = useState(false);
  const refOpenMenu = useRef(null);
  useOnClickOutside(refOpenMenu, () => setOpenMenu(false));

  const desktopContent = (
    <div>
      <FieldArray name="positions" initialValue={initialValue}>
        {({ positions }: any) =>
          values.positions.map((name: string, index: number) => (
            <div key={index}>
              <div className={style.container}>
                <div className={style.header}>
                  <Field<string>
                    name={`positions.${index}.title`}
                    component={PositionTitle}
                    placeholder="Название товара или услуги"
                    valueLength={values.positions[index].title.length}
                    maxSymbols={500}
                  />
                  <div ref={refOpenMenu}>
                    <button
                      type="button"
                      className={style.positionBtn}
                      onClick={() => setOpenMenu((prev: boolean) => !prev)}
                    />
                    {openMenu && (
                      <div className={style.menu}>
                        <div className={style.menuWrapper}>
                          <ul className={style.menuList}>
                            <li className={style.menuItem}>
                              <span
                                onClick={() => duplicatePosition(index)}
                                className={style.menuBtn}
                              >
                                Дублировать
                                <DuplicateIcon />
                              </span>
                            </li>
                            <li className={`${style.menuItem}`}>
                              <span
                                onClick={() => deletePosition(index)}
                                className={`${style.menuBtn} ${style.menuBtnRed}`}
                              >
                                Удалить
                                <DeleteIcon />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className={style.body}>
                  <Field<number>
                    name={`positions.${index}.count`}
                    component={PositionCount}
                    validate={maxCount(99999)}
                  />
                  <Field<string>
                    name={`positions.${index}.what`}
                    component={PositionWhat}
                    options={positionsWhat}
                  />
                  <Field<string>
                    name={`positions.${index}.price`}
                    component={PositionPrice}
                    placeholder="0 &#8381;"
                    validate={maxPrice(99999999)}
                  />
                  <Field<string>
                    name={`positions.${index}.nds`}
                    component={PositionNds}
                    options={positionsNds}
                  />
                  <Field<number>
                    name={`positions.${index}.total`}
                    component={PositionTotal}
                  />
                </div>
              </div>
            </div>
          ))
        }
      </FieldArray>

      <AddPositionDesktop addPosition={addPosition} />
    </div>
  );

  const mobileContent = <AddPositionMobile addPosition={addPosition} />;

  return (
    <MatchMediaWrapper
      mobileContent={mobileContent}
      desktopContent={desktopContent}
    />
  );
};

export default Position;
