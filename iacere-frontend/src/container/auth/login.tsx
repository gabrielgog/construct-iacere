import React from "react";
import Button from "components/Button";
import Input from "components/Input/Input";
import styles from "./auth.module.scss";

const login = () => {
  return (
    <div className={styles.auth}>
      <h2>Login</h2>
      <p>Enter your details to login</p>
      <Input type="email" label="Email*" placeholder="Email Address" />

      <Input type="password" label="Password*" placeholder="*********" />

      <Button size="md" theme="primary">
        Login
      </Button>
    </div>
  );
};

export default login;
