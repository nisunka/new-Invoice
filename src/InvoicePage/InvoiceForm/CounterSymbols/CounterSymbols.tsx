import style from "./CounterSymbols.module.css";

export const CounterSymbols = (valueLength: string, maxSymbols: number) => {
  if (Number(valueLength) > maxSymbols) {
    return (
      <span className={style.countError}>
        {valueLength} / {maxSymbols}
      </span>
    );
  } else {
    return (
      <span className={style.count}>
        {valueLength} / {maxSymbols}
      </span>
    );
  }
};
