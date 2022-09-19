import React from "react";
import Layout from "container/layout/layout";
import Card from "components/Card/Card";
import styles from "./index.module.scss";

const Dashboard = () => {
  return (
    <Layout>
      <div className={styles.dashboard}>
        <div className={styles.dashboard__card}>
          <Card title="Total Users" subtitle={100} />
          <Card title="Total Projects" subtitle={100} />
          <Card title="Completed Projects" subtitle={100} />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
