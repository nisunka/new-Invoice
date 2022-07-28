import React, { useRef, useState } from "react";
import { Field } from "react-final-form";
import useOnClickOutside from "../../useOnClickOutside";
import PositionTitle from "../PositionTitle/PositionTitle";
import { ReactComponent as DeleteIcon } from "../../../../assets/img/icon/deleteIcon.svg";
import { ReactComponent as DuplicateIcon } from "../../../../assets/img/icon/duplicateIcon.svg";
import style from "./PositionHeader.module.css";

interface IPositionHeader {
  name: string;
  valueLength: any;
  duplicatePosition: any;
  deletePosition: any;
}

const PositionHeader = ({
  name,
  valueLength,
  deletePosition,
  duplicatePosition,
}: IPositionHeader) => {
  const [openMenu, setOpenMenu] = useState(false);
  const refOpenMenu = useRef(null);
  useOnClickOutside(refOpenMenu, () => setOpenMenu(false));
  return (
    <div className={style.header}>
      <Field<string>
        name={name}
        component={PositionTitle}
        placeholder="Название товара или услуги"
        valueLength={valueLength!}
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
                  <span onClick={duplicatePosition} className={style.menuBtn}>
                    Дублировать
                    <DuplicateIcon />
                  </span>
                </li>
                <li className={`${style.menuItem}`}>
                  <span
                    onClick={deletePosition}
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
  );
};

export default PositionHeader;
