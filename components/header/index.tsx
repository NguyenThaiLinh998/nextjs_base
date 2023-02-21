import React, { Fragment, useState } from "react";
import styles from "./styles.module.scss";
import IconLeft from "public/images/iconLeft.svg";
import IconRight from "public/images/iconRight.svg";
import IconUser from "public/images/iconUser.svg";
import IconUp from "public/images/iconUp.svg";
import IconDown from "public/images/iconDown.svg";
import { Button, Dropdown, Menu, Space } from "antd";
import { useRouter } from "next/router";
import useTrans from "hooks/useTrans";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const trans = useTrans();

  const menu = (
    <Menu className={styles.menuWrapper}>
      <Menu.Item className={styles.menuItem}>
        {trans?.header?.setting}
      </Menu.Item>
    </Menu>
  );
  return (
    <header>
      <div className={styles.wrapperHeader}>
        <div className={styles.layoutBackground}></div>
        <section className={styles.containerHeader}>
          <div className={styles.iconHeader}>
            <div className={styles.icon}>
              <IconLeft />
            </div>
            <div className={styles.icon}>
              <IconRight />
            </div>
          </div>
          <div className={styles.dropdownWrapper}>
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              className={styles.dropdownRightHeader}
              onOpenChange={(open: boolean) => setIsOpen(open)}
              overlayClassName={styles.contentDropDown}
            >
              <div>
                <div className={styles.wrapperIcon}>
                  <IconUser />
                </div>
                <span>User</span>
                {isOpen ? <IconUp /> : <IconDown />}
              </div>
            </Dropdown>
          </div>
        </section>
      </div>
    </header>
  );
}
