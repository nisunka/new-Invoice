import React from "react";
import { Field } from "react-final-form";
import style from "./NdsMobile.module.css";
import NdsOption from "./NdsOption/NdsOption";

type NdsItems = "НДС 0%" | "НДС 10%" | "НДС 20%" | "Без НДС";

const NdsMobile = () => {
  return (
    <div className={style.container}>
      <label className={style.ndsLabel} tabIndex={0}>
        <Field<NdsItems>
          name={`nds`}
          component={NdsOption}
          type="radio"
          value="НДС 0%"
          className={style.ndsInput}
        />{" "}
        НДС 0%
      </label>
      <label className={style.ndsLabel} tabIndex={0}>
        <Field<NdsItems>
          name={`nds`}
          component={NdsOption}
          type="radio"
          value="НДС 10%"
          className={style.ndsInput}
        />{" "}
        НДС 10%
      </label>
      <label className={style.ndsLabel} tabIndex={0}>
        <Field<NdsItems>
          name={`nds`}
          component={NdsOption}
          type="radio"
          value="НДС 20%"
          className={style.ndsInput}
        />{" "}
        НДС 20%
      </label>
      <label className={style.ndsLabel} tabIndex={0}>
        <Field<NdsItems>
          name={`nds`}
          component={NdsOption}
          type="radio"
          value="Без НДС"
          className={style.ndsInput}
        />{" "}
        Без НДС
      </label>
    </div>
  );
};

export default NdsMobile;
