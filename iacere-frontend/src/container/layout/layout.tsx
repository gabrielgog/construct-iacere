import React from "react";
import Header from "components/Header/Header";
import SideBar from "components/SideBar";
import styles from "./layout.module.scss";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.main__layout}>
      <SideBar />
      <Header />
      <section className={styles.main__page}>
        <div>{children}</div>
      </section>
    </div>
  );
};

export default Layout;
