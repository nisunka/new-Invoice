import React, { useRef, useState } from "react";
import { Field } from "react-final-form";
import useOnClickOutside from "../../useOnClickOutside";
import PositionTitle from "../PositionTitle/PositionTitle";
import style from "./PositionHeader.module.css";
import { IPositionHeader } from "./PositionHeader.interface";
import PositionHeaderMenu from "./PositionHeaderMenu/PositionHeaderMenu";

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
          <PositionHeaderMenu
            duplicatePosition={duplicatePosition}
            deletePosition={deletePosition}
          />
        )}
      </div>
    </div>
  );
};

export default PositionHeader;
