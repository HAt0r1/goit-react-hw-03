import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import style from "./ContactForm.module.css";

const validationForm = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Too short name")
    .max(8, "Max 8 symbols")
    .required("This field is required"),
  number: Yup.string()
    .min(7, "Too short number")
    .max(12, "Max 12 symbols")
    .required("This field is required"),
});

const userData = {
  name: "",
  number: "",
};

const ContactForm = ({ onFunc }) => {
  const nameId = useId();
  const numberId = useId();
  return (
    <Formik
      initialValues={userData}
      onSubmit={onFunc}
      validationSchema={validationForm}
    >
      <Form className={style.form}>
        <div className={style.inputContainer}>
          <label htmlFor={nameId}>Name</label>
          <Field className={style.input} type="text" name="name" id={nameId} />
          <ErrorMessage className={style.error} name="name" component="span" />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor={numberId}>Number</label>
          <Field
            className={style.input}
            type="tel"
            name="number"
            id={numberId}
          />
          <ErrorMessage
            className={style.error}
            name="number"
            component="span"
          />
        </div>
        <button className={style.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
