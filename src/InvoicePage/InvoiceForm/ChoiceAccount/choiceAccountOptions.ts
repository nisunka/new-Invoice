import rusAccount from "../../../assets/img/accountLogo/rusAccount.svg";
import alfaAccount from "../../../assets/img/accountLogo/alfaAccount.svg";

export interface tochkaAccount {
  readonly value: string;
  readonly label: string;
  readonly image: any;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export interface otherAccount {
  readonly value: string;
  readonly label: string;
  readonly image: any;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export interface groupedOption {
  readonly label: string;
  readonly options: readonly tochkaAccount[] | readonly otherAccount[];
}

export const tochkaAccount = [
  {
    value: "50 275,37 ₽ — Расчётный",
    label: "50 275,37 ₽ — Расчётный",
    isFixed: true,
    image: rusAccount,
  },
];

export const otherAccount = [
  {
    value: "Расчётный счёт в Альфа-Банк - **5564",
    label: "Расчётный счёт в Альфа-Банк - **5564",
    isFixed: true,
    image: alfaAccount,
  },
  {
    value: "Расчётный счёт в Альфа-Банк - **9963",
    label: "Расчётный счёт в Альфа-Банк - **9963",
    image: alfaAccount,
  },
];

export const groupedAccounts: readonly groupedOption[] = [
  {
    label: "В Точке",
    options: tochkaAccount,
  },
  {
    label: "В других банках",
    options: otherAccount,
  },
];
