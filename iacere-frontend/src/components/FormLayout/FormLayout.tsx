import React from "react";
import PropTypes from "prop-types";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";
import BackArrow from "assets/icons/back.svg";
import Close from "assets/icons/close.svg";
import styles from "./formlayout.module.scss";

interface Prop {
  children: React.ReactNode;
}

const FormLayout = ({ children }: Prop) => {
  const navigate = useNavigate();

  const handleClose = () => {
    return navigate(-1);
  };

  return (
    <div className={styles.formlayout__container}>
      <div>
        <div className={styles.formlayout__content}>
          <div className={styles.formlayout__button}>
            <Button
              theme="default"
              onClick={() => {
                navigate(-1);
              }}
              size="sm"
            >
              <img src={BackArrow} alt="back" /> &nbsp; Back
            </Button>
            <Button theme="default" size="sm" onClick={() => handleClose()}>
              Close &nbsp; <img src={Close} alt="back" />
            </Button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

FormLayout.propTypes = {
  children: PropTypes.node
};

export default FormLayout;
