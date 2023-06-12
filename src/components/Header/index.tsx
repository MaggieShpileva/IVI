import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import logo from "../../images/icons/logo.svg";
import DesktopMenu from "./DesktopMenu";
import SubMenu from "./DesktopMenu/SubMenu";
import SearchButton from "./Buttons/Search";
import ProfileButton from "./Buttons/Profile";
import NotificationButton from "./Buttons/Notification";
import WatchingButton from "./Buttons/WatchForFree";
import { useRouter } from "next/router";
import Link from "next/link";
import LanguageButton from "./Buttons/Language";
import { useTranslation } from "next-export-i18n";
import { Loader } from "../Loader";

export const Header: FC = () => {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
  const [subMenuTitle, setSubMenuTitle] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    setIsLoader(false);
  }, [router]);
  return (
    <header className={styles.header}>
      {isLoader && <Loader type="loading_page" />}

      <div className={styles.container}>
        {isOpenSubMenu && <div className={styles.container_active}></div>}

        <div className={styles.main_part}>
          <Link href="/">
            <Image src={logo} width={66} height={48} alt="logo" />
          </Link>
          <DesktopMenu
            isOpenSubMenu={isOpenSubMenu}
            setIsOpenSubMenu={setIsOpenSubMenu}
            setSubMenuTitle={setSubMenuTitle}
            isLoader={isLoader}
            setIsLoader={setIsLoader}
          />
        </div>

        <div className={styles.buttons}>
          <WatchingButton
            isOpenSubMenu={isOpenSubMenu}
            setIsOpenSubMenu={setIsOpenSubMenu}
            setSubMenuTitle={setSubMenuTitle}
          />
          <SearchButton
            isOpenSubMenu={isOpenSubMenu}
            setIsOpenSubMenu={setIsOpenSubMenu}
          />
          <NotificationButton
            isOpenSubMenu={isOpenSubMenu}
            setIsOpenSubMenu={setIsOpenSubMenu}
          />
          <ProfileButton
            isOpenSubMenu={isOpenSubMenu}
            setIsOpenSubMenu={setIsOpenSubMenu}
            setSubMenuTitle={setSubMenuTitle}
          />
          <LanguageButton
            isOpenSubMenu={isOpenSubMenu}
            setIsOpenSubMenu={setIsOpenSubMenu}
          />
        </div>
        {isOpenSubMenu && (
          <SubMenu
            isOpenSubMenu={isOpenSubMenu}
            setIsOpenSubMenu={setIsOpenSubMenu}
            subMenuTitle={subMenuTitle}
          />
        )}
      </div>
    </header>
  );
};
