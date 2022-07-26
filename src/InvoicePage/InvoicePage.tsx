import React from "react";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";
import InvoiceForm from "./InvoiceForm/InvoiceForm";
import style from "./InvoicePage.module.css";

const InvoicePage = () => {
  return (
    <div className={style.container}>
      <HeaderNavigation title="Выставление счёта" />
      <InvoiceForm />
    </div>
  );
};

export default InvoicePage;
