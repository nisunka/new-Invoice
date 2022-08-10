import { IPositionMobNewForm } from "./PositionMobNewForm.interface";
import { Field, Form } from "react-final-form";
import PositionCount from "../../../PositionCount/PositionCount";
import {
  maxCountMobile,
  maxPriceMobile,
} from "../../../../validation/validatePosition";
import arrayMutators from "final-form-arrays";
import PositionTitle from "../../../PositionTitle/PositionTitle";
import PositionWhat from "../../../PositionWhat/PositionWhat";
import { positionsWhat } from "../../../positionOptions";
import PositionPrice from "../../../PositionPrice/PositionPrice";
import NdsMobile from "./NdsMobile/NdsMobile";
import style from "./PositionMobNewForm.module.css";

const PositionMobNewForm = ({
  initialValue,
  values,
  pushPosit,
  renderPattern,
}: IPositionMobNewForm) => {
  const onSubmit = async (values: any) => {
    if (values.count !== typeof Number) {
      values.count = 1;
    }
    if (values.what !== typeof String) {
      values.what = "шт.";
    }
    if (values.price !== typeof String) {
      values.price = 1;
    }
    pushPosit(values);
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
              validate={maxCountMobile(99999)}
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
              validate={maxPriceMobile(99999999)}
            />
            <NdsMobile />
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
