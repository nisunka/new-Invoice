import React from "react";
import { FieldRenderProps } from "react-final-form";
import style from "./PartnerName.module.css";

type Props = FieldRenderProps<string, any>;

const PartnerName: React.FC<Props> = ({ input, meta, ...rest }: Props) => {
  return (
    <div className={style.container} tabIndex={0}>
      <div className={style.leftSide}>
        <div>
          <span className={style.namePosition}>Данные контрагента</span>
        </div>
      </div>
      <div className={style.rightSide}>
        <input className={style.input} type="text" {...input} {...rest} />
      </div>
    </div>
  );
};

export default PartnerName;
