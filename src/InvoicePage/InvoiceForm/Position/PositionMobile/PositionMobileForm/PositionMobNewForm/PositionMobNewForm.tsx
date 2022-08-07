import { push } from "final-form-arrays";
import React, { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import PositionCount from "../../../PositionCount/PositionCount";
import { maxCount, maxPrice } from "../../../../validation/validatePosition";

import arrayMutators from "final-form-arrays";
import PositionTitle from "../../../PositionTitle/PositionTitle";
import PositionWhat from "../../../PositionWhat/PositionWhat";
import { positionsWhat, positionsNds } from "../../../positionOptions";
import PositionPrice from "../../../PositionPrice/PositionPrice";
import style from "./PositionMobNewForm.module.css";
// import NdsOption from "./NdsMobile/NdsOption/NdsOption";
import NdsMobile from "./NdsMobile/NdsMobile";

interface IPositionMobNewForm {
  initialValue: any;
  values: any;
  pushPosit: any;
  renderPattern: any;
}

const PositionMobNewForm = ({
  initialValue,
  values,
  pushPosit,
  renderPattern,
}: IPositionMobNewForm) => {
  const onSubmit = async (values: any) => {
    window.alert(JSON.stringify(values));
    pushPosit(values);
    console.log("зашло в функцию отправки");
    console.log(values);
    renderPattern(values);
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        mutators={{
          ...arrayMutators,
        }}
        render={({
          handleSubmit,
          form,
          submitting,
          pristine,
          values,
          form: {
            mutators: { push, pop },
          },
        }) => (
          <form onSubmit={handleSubmit}>
            <Field<string>
              required={true}
              name="title"
              component={PositionTitle}
              placeholder="Название товара или услуги"
              valueLength={
                typeof values.title === "string" ? values.title.length : 0
              }
              maxSymbols={500}
            />
            <Field<number>
              name={`count`}
              component={PositionCount}
              validate={maxCount(99999)}
            />
            <Field<string>
              name={`what`}
              component={PositionWhat}
              options={positionsWhat}
            />
            <Field<string>
              name={`price`}
              component={PositionPrice}
              placeholder="0 &#8381;"
              validate={maxPrice(99999999)}
            />
            <NdsMobile />
            <pre>{JSON.stringify(values)}</pre>
            <button disabled={pristine} className={style.saveBtn}>
              Сохранить
            </button>
          </form>
        )}
      />
    </div>
  );
};

export default PositionMobNewForm;
