import React from "react";
import style from "./TitleForm.module.css";

interface title {
  title: string;
}

const TitleForm = (props: title) => {
  return (
    <div className={style.container}>
      <p className={style.title}>{props.title}</p>
    </div>
  );
};

export default TitleForm;
