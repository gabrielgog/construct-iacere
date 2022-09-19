import React from "react";
import Button from "components/Button";
import Table from "components/Table";
import Dropdown from "components/Dropdown/Dropdown";
import { Option } from "components/Dropdown/Option";
import { projectHeaders, projectTable } from "container/mocks/table";
import Dots from "assets/icons/vertical-dot.svg";

import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const project = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.project}>
      <div className={styles.project__button}>
        <Button
          theme="primary"
          size="sm"
          onClick={() => navigate("/add-project")}
        >
          Add a Project
        </Button>
      </div>
      <div className={styles.project__table}>
        <Table headers={projectHeaders} tableData={projectTable} type="">
          {(row) => (
            <>
              <td>
                <span>{row.name}</span>
              </td>
              <td>
                <span>{row.type}</span>
              </td>
              <td>
                <span>{row.users}</span>
              </td>
              <td>
                <span>{row.status}</span>
              </td>
              <td>
                <Dropdown
                  content={
                    <>
                      <Option>
                        <p>View</p>
                      </Option>

                      <Option>
                        <p>Delete</p>
                      </Option>
                    </>
                  }
                >
                  <img src={Dots} alt="dot" />
                </Dropdown>
              </td>
            </>
          )}
        </Table>
      </div>
    </div>
  );
};

export default project;
