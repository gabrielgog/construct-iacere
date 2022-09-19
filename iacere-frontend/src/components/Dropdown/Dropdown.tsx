import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import styles from "./dropdown.module.scss";

interface type {
  children?: React.ReactNode;
  content: React.ReactNode;
}

const Dropdown = ({ children, content }: type) => (
  <div>
    <Menu as="div">
      <div>
        <Menu.Button className={styles.menuButton}>{children}</Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={styles.drop}>
          <div>{content}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  </div>
);

export default Dropdown;
