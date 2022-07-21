import React from "react";
import style from "./SubmitBtn.module.css";

const SubmitBtn = () => {
  return (
    <div className={style.btnContainer}>
      <button type="submit" className={style.sendBtn}>
        Проверить и выставить
      </button>
    </div>
  );
};

export default SubmitBtn;
