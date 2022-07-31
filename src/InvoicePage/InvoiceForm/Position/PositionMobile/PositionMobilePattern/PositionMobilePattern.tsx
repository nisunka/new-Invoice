import React from "react";
import style from "./PositionMobilePattern.module.css";

const PositionMobilePattern = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.head}>
          <div className={style.headLeftSide}>
            <div className={style.headTitle}>
              {/* название позиции */}
              Schneider Electric EASY 9 C32 30мА
            </div>
            <div className={style.headPriceWhat}>
              <div className={style.headPrice}>{/* цена */}1 500 ₽ </div>
              <div className={style.headWhat}>{/* ед измерения */} за шт.</div>
            </div>
          </div>
          <div className={style.headRightSide}>
            {/* кнопка "дублировать", "удалить" */}...
          </div>
        </div>
        <div className={style.body}>
          <div className={style.bodyLeftSide}>{/* количество */}3</div>
          <div className={style.bodyRightSide}>
            <div className={style.bodyTotal}>{/* Итого */}4 500 ₽</div>
            <div className={style.bodyNds}>{/* ндс */}НДС 10% </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PositionMobilePattern;