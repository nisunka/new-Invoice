import React from "react";
import { Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import { MatchMediaWrapper } from "../../MatchMedia/MatchMediaWrapper";
import style from "./Position.module.css";
import PositionCount from "./PositionCount/PositionCount";
import PositionNds from "./PositionNds/PositionNds";
import { positionsWhat, positionsNds } from "./positionOptions";
import PositionPrice from "./PositionPrice/PositionPrice";
import PositionTotal from "./PositionTotal/PositionTotal";
import PositionWhat from "./PositionWhat/PositionWhat";
import AddPositionDesktop from "./AddPositionDesktop/AddPositionDesktop";
import AddPositionMobile from "./AddPositionMobile/AddPositionMobile";
import PositionHeader from "./PositionHeader/PositionHeader";

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
  const desktopContent = (
    <div>
      <FieldArray name="positions" initialValue={initialValue}>
        {({ positions }: any) =>
          values.positions.map((name: string, index: number) => (
            <div key={index}>
              <div className={style.container}>
                <PositionHeader
                  name={`positions.${index}.title`}
                  valueLength={values.positions[index].title.length}
                  deletePosition={() => deletePosition(index)}
                  duplicatePosition={() => duplicatePosition(index)}
                />
                <div className={style.body}>
                  <div className={style.bodyItem}>
                    <Field<number>
                      name={`positions.${index}.count`}
                      component={PositionCount}
                      validate={maxCount(99999)}
                    />
                  </div>
                  <div className={style.bodyItem}>
                    <Field<string>
                      name={`positions.${index}.what`}
                      component={PositionWhat}
                      options={positionsWhat}
                    />
                  </div>
                  <div className={style.bodyItem}>
                    <Field<string>
                      name={`positions.${index}.price`}
                      component={PositionPrice}
                      placeholder="0 &#8381;"
                      validate={maxPrice(99999999)}
                    />
                  </div>
                  <div className={style.bodyItem}>
                    <Field<string>
                      name={`positions.${index}.nds`}
                      component={PositionNds}
                      options={positionsNds}
                    />
                  </div>
                  <div className={style.bodyItem}>
                    <Field<number>
                      name={`positions.${index}.total`}
                      component={PositionTotal}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </FieldArray>

      <AddPositionDesktop addPosition={addPosition} />
    </div>
  );

  const mobileContent = (
    <div>
      <AddPositionMobile
        values={values}
        initialValue={initialValue}
        addPosition={addPosition}
        deletePosition={deletePosition}
        duplicatePosition={duplicatePosition}
      />
    </div>
  );

  return (
    <MatchMediaWrapper
      mobileContent={mobileContent}
      desktopContent={desktopContent}
    />
  );
};

export default Position;
