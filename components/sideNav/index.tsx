import { ReactNode } from "react";
import styles from "./styles.module.scss";
import IconLogo from "public/images/iconLogo.svg";
import IconHomeDefault from "public/images/iconHomeDefault.svg";
import IconSearchDefault from "public/images/iconSearchDefault.svg";
import IconCollectionDefault from "public/images/iconCollectionDefault.svg";
import IconIncrement from "public/images/iconIncrement.svg";
import IconHeart from "public/images/iconHeart.svg";
import useTrans from "hooks/useTrans";
import classNames from "classnames";
interface IRouter {
  icon: JSX.Element;
  name: string;
}
export default function SideNav() {
  const trans = useTrans();
  const routers = [
    { icon: <IconHomeDefault />, name: trans?.sideNav?.home },
    { icon: <IconSearchDefault />, name: trans?.sideNav?.search },
    { icon: <IconCollectionDefault />, name: trans?.sideNav?.yourLibary },
  ];
  const routersProfile = [
    {
      icon: (
        <div className={styles.wrapperIconMenuItem}>
          <IconIncrement />
        </div>
      ),
      name: trans?.sideNav?.createPlayList,
    },
    {
      icon: (
        <div className={styles.wrapperIconMenuItemFevourite}>
          <IconHeart />
        </div>
      ),
      name: trans?.sideNav?.favouriteSongs,
    },
  ];
  return (
    <nav className={styles.wrapperNav}>
      <div className={styles.icon}>
        <IconLogo />
      </div>
      <div className={styles.contentSideNav}>
        {routers?.map((router: IRouter, index: number) => (
          <div className={styles.sideNavItem} key={index}>
            {router?.icon}
            {router?.name}
          </div>
        ))}
        <div className={styles.wrapperItemProfile}>
          {routersProfile?.map((router: IRouter, index: number) => (
            <div className={styles.sideNavItemProfile} key={index}>
              {router?.icon}
              {router?.name}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
