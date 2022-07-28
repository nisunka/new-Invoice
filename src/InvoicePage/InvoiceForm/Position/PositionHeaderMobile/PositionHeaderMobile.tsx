import React, { useRef, useState } from "react";
import { Field } from "react-final-form";
import useOnClickOutside from "../../useOnClickOutside";
import PositionTitle from "../PositionTitle/PositionTitle";
import { ReactComponent as DeleteIcon } from "../../../../assets/img/icon/deleteIcon.svg";
import { ReactComponent as DuplicateIcon } from "../../../../assets/img/icon/duplicateIcon.svg";
import style from "./PositionHeaderMobile.module.css";

interface IPositionHeaderMobile {
  name: string;
  valueLength: any;
}

const PositionHeaderMobile = ({ name, valueLength }: IPositionHeaderMobile) => {
  return (
    <div className={style.header}>
      <Field<string>
        name={name}
        component={PositionTitle}
        placeholder="Название товара или услуги"
        valueLength={valueLength!}
        maxSymbols={500}
      />
    </div>
  );
};

export default PositionHeaderMobile;
