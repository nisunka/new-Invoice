import React, { useState } from "react";
import { ReactComponent as MiniPlusIcon } from "../../../../assets/img/icon/miniPlusIcon.svg";
import PositionMobile from "../PositionMobile/PositionMobile";
import style from "./AddPositionMobile.module.css";

interface IAddPositionMobile {
  initialValue: any;
  values: any;
  addPosition: any;
  deletePosition: any;
  duplicatePosition: any;
}

const AddPositionMobile = ({
  initialValue,
  values,
  addPosition,
  deletePosition,
  duplicatePosition,
}: IAddPositionMobile) => {
  const [openNewPosition, setOpenNewPosition] = useState(false);

  const savePosition = () => {
    document.querySelector("#root")!.classList.remove("fixed");
    setOpenNewPosition(false);
  };

  return (
    <div className={style.btnWrapper}>
      <button
        type="button"
        className={style.addBtn}
        onClick={() => {
          setOpenNewPosition(true);
          document.querySelector("#root")!.classList.add("fixed");
          document.querySelector("#mobile-position")!.classList.add("see");
        }}
      >
        <MiniPlusIcon />
        <span>Добавить позицию</span>
      </button>

      {openNewPosition && (
        <PositionMobile
          savePosition={savePosition}
          values={values}
          initialValue={initialValue}
          addPosition={addPosition}
          deletePosition={deletePosition}
          duplicatePosition={duplicatePosition}
        />
      )}
    </div>
  );
};

export default AddPositionMobile;
