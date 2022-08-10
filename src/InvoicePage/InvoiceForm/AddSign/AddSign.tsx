import { Field } from "react-final-form";
import { IAddSign } from "./AddSign.interface";
import { ReactComponent as PlusIcon } from "../../../assets/img/icon/plusIcon.svg";
import style from "./AddSign.module.css";

const AddSign = ({ name, value }: IAddSign) => {
  return (
    <div className={style.container}>
      <label htmlFor="input-switch" className={style.wrapper}>
        <span className={style.title}>Добавить подпись или печать</span>
        <Field<boolean>
          id="input-switch"
          name={name}
          component="input"
          type="checkbox"
          className={style.switch}
        />
      </label>

      {value && (
        <div className={style.wrapperLoading}>
          <PlusIcon />
          <input
            id="upload-photo"
            accept="image/png, image/gif, image/jpeg"
            name="photo"
            type="file"
            className={style.uploadPhoto}
          />
          <span className={style.text}>Загрузить файл</span>
          <span className={style.format}>JPG, PNG, PDF, TIFF, до 20 Мб</span>
        </div>
      )}
    </div>
  );
};

export default AddSign;
