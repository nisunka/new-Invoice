import { IPositionMobilePattern } from "./PositionMobilePattern.interface";
import { useRef, useState } from "react";
import useOnClickOutside from "../../../useOnClickOutside";
import PositionHeaderMenu from "../../PositionHeader/PositionHeaderMenu/PositionHeaderMenu";
import { ReactComponent as DecrementIcon } from "../../../../../assets/img/icon/countDecrement.svg";
import { ReactComponent as IncrementIcon } from "../../../../../assets/img/icon/countIncrement.svg";
import style from "./PositionMobilePattern.module.css";

const PositionMobilePattern = ({
  values,
  deletePosition,
  duplicatePosition,
}: IPositionMobilePattern) => {
  const [openMenu, setOpenMenu] = useState(false);
  const refOpenMenu = useRef(null);
  useOnClickOutside(refOpenMenu, () => setOpenMenu(false));

  // count
  const [counter, setCounter] = useState(Number(values.count));
  values.count = counter;
  // total
  const totalPrice = counter * Number(values.price);
  values.total = totalPrice;

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.head}>
          <div className={style.headLeftSide}>
            <p className={`${style.headTitle} mobilePositionTitle`}>
              {values.title}
            </p>
            <div className={style.headPriceWhat}>
              <div className={style.headPrice}>{values.price} </div>
              <div className={style.headWhat}>за {values.what}</div>
            </div>
          </div>
          <div className={style.headRightSide}>
            <div ref={refOpenMenu}>
              <button
                type="button"
                className={style.positionBtn}
                onClick={() => setOpenMenu((prev: boolean) => !prev)}
              />
              {openMenu && (
                <PositionHeaderMenu
                  duplicatePosition={duplicatePosition}
                  deletePosition={deletePosition}
                />
              )}
            </div>
          </div>
        </div>
        <div className={style.body}>
          <div className={style.bodyLeftSide}>
            <div className={style.counterBtn}>
              <span onClick={() => setCounter(counter - 1)}>
                <DecrementIcon />
              </span>
              <span>{counter}</span>
              <span onClick={() => setCounter(counter + 1)}>
                <IncrementIcon />
              </span>
            </div>
          </div>
          <div className={style.bodyRightSide}>
            <div className={style.bodyTotal}>{totalPrice}</div>
            <div className={style.bodyNds}>{values.nds}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PositionMobilePattern;
