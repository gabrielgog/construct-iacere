import React from "react";
import FormLayout from "components/FormLayout/FormLayout";
import Input from "components/Input/Input";
import Button from "components/Button";
import styles from "../index.module.scss";

const addProject = () => {
  return (
    <FormLayout>
      <div className={styles.form}>
        <h1>Add a Project</h1>
        <div className={styles.form__input}>
          <Input type="text" placeholder="Project Name" label="Project Name" />
        </div>
        <div className={styles.form__input}>
          <Input type="text" placeholder="Project Type" label="Project Type" />
        </div>

        <Button size="md" theme="primary">
          Add
        </Button>
      </div>
    </FormLayout>
  );
};

export default addProject;
