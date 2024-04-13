import { BsTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";

import style from "./Contact.module.css";

const Contact = ({ info, onDelete }) => {
  return (
    <>
      <div>
        <div>
          <p className={style.data}>
            <FaUser />
            {info.name}
          </p>
        </div>
        <div>
          <p className={style.data}>
            <BsTelephoneFill /> {info.number}
          </p>
        </div>
      </div>
      <button
        className={style.button}
        type="button"
        onClick={() => onDelete(info.id)}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
