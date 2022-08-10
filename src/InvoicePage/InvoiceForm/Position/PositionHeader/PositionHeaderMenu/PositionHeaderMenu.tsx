import { ReactComponent as DeleteIcon } from "../../../../../assets/img/icon/deleteIcon.svg";
import { ReactComponent as DuplicateIcon } from "../../../../../assets/img/icon/duplicateIcon.svg";
import style from "./PositionHeaderMenu.module.css";

interface IPositionHeaderMenu {
  deletePosition(): void;
  duplicatePosition(): void;
}

const PositionHeaderMenu = ({
  deletePosition,
  duplicatePosition,
}: IPositionHeaderMenu) => {
  return (
    <div className={style.menu}>
      <div className={style.menuWrapper}>
        <ul className={style.menuList}>
          <li className={style.menuItem}>
            <span onClick={duplicatePosition} className={style.menuBtn}>
              Дублировать
              <DuplicateIcon />
            </span>
          </li>
          <li className={`${style.menuItem}`}>
            <span
              onClick={deletePosition}
              className={`${style.menuBtn} ${style.menuBtnRed}`}
            >
              Удалить
              <DeleteIcon />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PositionHeaderMenu;
