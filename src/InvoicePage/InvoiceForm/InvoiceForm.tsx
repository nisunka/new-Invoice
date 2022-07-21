import React from "react";
import { Field, Form, useField } from "react-final-form";
import { initialInvoiceValues } from "../constants";
import ChoiceAccount from "./ChoiceAccount/ChoiceAccount";
import { groupedAccounts } from "./ChoiceAccount/choiceAccountOptions";
import TitleForm from "./TitleForm/TitleForm";

import style from "./InvoiceForm.module.css";
import PartnerName from "./PartnerName/PartnerName";
import arrayMutators, { insert } from "final-form-arrays";
import Position from "./Position/Position";
import OptionalItems from "./OptionalItems/OptionalItems";
import AddSign from "./Position/AddSign/AddSign";
import SubmitBtn from "./SubmitBtn/SubmitBtn";

interface IValues {
  withApproved: any;
  additional: any;
  choiceAccount: string;
  partnerName: string;
  positions: any;
  photo: any;
}

const InvoiceForm = () => {
  const onSubmit = async (values: IValues) => {
    console.log(JSON.stringify(values, undefined, 2));
  };

  return (
    <div className={style.container}>
      <Form
        onSubmit={onSubmit}
        mutators={{
          ...arrayMutators,
        }}
        initialValues={initialInvoiceValues}
        render={({
          handleSubmit,
          form: {
            mutators: { push, remove, insert },
          },
          submitting,
          pristine,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={style.formContainer}>
              {/* ВЫБРАТЬ СЧЕТ */}
              <div className={style.formItem}>
                <div className={style.formTitle}>
                  <TitleForm title="Счёт" />
                </div>
                <div className={style.formBody}>
                  <Field
                    name="choiceAccount"
                    component={ChoiceAccount}
                    options={groupedAccounts}
                  />
                </div>
              </div>
              {/* КОНТРАГЕНТ */}
              <div className={style.formItem}>
                <div className={style.formTitle}>
                  <TitleForm title="Контрагент" />
                </div>
                <div className={style.formBody}>
                  <Field
                    name="partnerName"
                    component={PartnerName}
                    placeholder="Название или ИНН"
                  />
                </div>
              </div>
              {/* ПОЗИЦИИ */}
              <div className={style.formItem}>
                <div className={style.formTitle}>
                  <TitleForm title="Позиции" />
                </div>
                <div className={style.formBody}>
                  <Position
                    initialValue={values.positions}
                    values={values}
                    addPosition={() =>
                      push("positions", {
                        title: "",
                        count: 1,
                        what: "шт.",
                        price: "",
                        nds: "Без НДС",
                        total: 0,
                      })
                    }
                    deletePosition={(index: number) =>
                      remove("positions", index)
                    }
                    duplicatePosition={(index: number) =>
                      insert("positions", index, values.positions[index])
                    }
                  />
                </div>
              </div>

              {/* ДОПОЛНИТЕЛЬНО */}
              <div className={style.formItem}>
                <div className={style.formTitle}>
                  <TitleForm title="Дополнительно" />
                </div>
                <div className={style.formBody}>
                  <OptionalItems
                    initialValue={values.additional}
                    values={values.additional}
                  />
                </div>
              </div>

              {/* ДОБАВИТЬ ПОДПИСЬ/ПЕЧАТЬ */}
              <div className={style.formItem}>
                <div className={style.formBody}>
                  <AddSign name="withApproved" value={values.withApproved} />
                </div>
              </div>

              {/* КНОПКА ОТПРАВИТЬ */}
              <SubmitBtn />
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default InvoiceForm;
