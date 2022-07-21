import React from "react";
import { ReactComponent as MiniPlusIcon } from "../../../../assets/img/icon/miniPlusIcon.svg";
import style from "./AddPositionMobile.module.css";

interface IAddPositionDesktop {
  addPosition: any;
}

const AddPositionDesktop = ({ addPosition }: IAddPositionDesktop) => {
  return (
    <div className={style.btnWrapper}>
      <button type="button" className={style.addBtn} onClick={addPosition}>
        <MiniPlusIcon />
        <span>Добавить позицию</span>
      </button>
    </div>
  );
};

export default AddPositionDesktop;
