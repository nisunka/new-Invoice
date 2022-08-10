import style from "./CounterSymbols.module.css";

export const CounterSymbols = (valueLength: string, maxSymbols: number) => {
  const isError = Number(valueLength) > maxSymbols;
  return (
    <span className={isError ? `${style.countError}` : `${style.count}`}>
      {valueLength} / {maxSymbols}
    </span>
  );
};
