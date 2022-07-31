import { ReactComponent as MiniPlusIcon } from "../../../../assets/img/icon/miniPlusIcon.svg";
import style from "./PositionMobile.module.css";
// import PositionMobilePattern from "./PositionMobilePattern/PositionMobilePattern";

interface IPositionMobile {
  initialValue: any;
  values: any;
  addPosition: any;
  deletePosition: any;
  duplicatePosition: any;
}

const PositionMobile = ({
  initialValue,
  values,
  addPosition,
  deletePosition,
  duplicatePosition,
}: IPositionMobile) => {
  // открытие позиции
  // const [openNewPosition, setOpenNewPosition] = useState(false);

  // создание компонента позиция
  // const [showPosition, setShowPosition] = useState(false);

  // открыть позицию
  // const addNewPosition = () => {
  //   addPosition();
  //   setOpenNewPosition(true);
  //   document.querySelector("#root")!.classList.add("fixedRoot");
  // };

  // нажатие на кнопку сохранить внутри создания позиции
  // const handlerClick = (values: any) => {
  //   setShowPosition(!showPosition);
  //   setOpenNewPosition(false);
  //   document.querySelector("#root")!.classList.remove("fixedRoot");
  // };

  // let pattern = null;

  // if (showPosition) {
  //   pattern = <PositionMobilePattern />;
  // } else {
  //   pattern = null;
  // }

  // const addPositionMobile = () => {
  //   document.querySelector("#root")!.classList.add("fixedRoot");
  //   setOpenNewPosition(true);
  // };

  return (
    <div>
      <div className={style.container}>
        {/* {openNewPosition && ()} */}

        <div className={style.btnWrapper}>
          <button
            type="button"
            className={style.addBtn}
            // onClick={addPositionMobile}
          >
            <MiniPlusIcon />
            <span>Добавить позицию</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default PositionMobile;
