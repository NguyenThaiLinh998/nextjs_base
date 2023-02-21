import Header from "components/header";
import SideNav from "components/sideNav";
import { Fragment, ReactNode } from "react";
import styles from "./styles.module.scss";
interface IProps {
  children: ReactNode;
}
export default function MainLayout({ children }: IProps) {
  return (
    <section className={styles.wrapperMain}>
      <SideNav />
      <div className={styles.main}>
        <Header />
        <div className={styles.containerMain}>{children}</div>
      </div>
    </section>
  );
}
