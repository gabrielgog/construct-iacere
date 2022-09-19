import React from "react";
import FormLayout from "components/FormLayout/FormLayout";
import Button from "components/Button";
import Input from "components/Input/Input";
import Select from "components/Select/Select";
import styles from "../../projects/index.module.scss";

const AddUser = () => {
  return (
    <FormLayout>
      <div className={styles.form}>
        <h1>Add a User</h1>
        <div className={styles.form__input}>
          <Input type="text" placeholder="Enter your name" label="Name" />
        </div>
        <div className={styles.form__input}>
          <Input type="text" placeholder="Enter your email" label="Email" />
        </div>

        <div className={styles.form__input}>
          <Input type="text" placeholder="Enter your phone" label="Phone" />
        </div>

        <div className={styles.form__input}>
          <Select
            label="Select project"
            placeholder="Select"
            onChange={(e) => e}
            options={[{}]}
          />
        </div>

        <Button size="md" theme="primary">
          Continue
        </Button>
      </div>
    </FormLayout>
  );
};

export default AddUser;
