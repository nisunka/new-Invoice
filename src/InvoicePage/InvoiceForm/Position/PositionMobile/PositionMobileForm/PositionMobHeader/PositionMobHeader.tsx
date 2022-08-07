import { ReactComponent as BackIconMobile } from "../../../../../../assets/img/icon/backIconMobile.svg";
import { ReactComponent as CloseIconMobile } from "../../../../../../assets/img/icon/closeIconMobile.svg";
import style from "./PositionMobHeader.module.css";

interface IPositionMobHeader {
  closeForm: any;
  title: string;
}

const PositionMobHeader = ({ closeForm, title }: IPositionMobHeader) => {
  const titleNav = <h2 className={style.title}>{title}</h2>;
  return (
    <div className={style.container}>
      <button onClick={closeForm}>
        <BackIconMobile className={style.iconBtn} />
      </button>
      {titleNav}
      <button>
        <CloseIconMobile className={style.iconBtn} />
      </button>
    </div>
  );
};

export default PositionMobHeader;
