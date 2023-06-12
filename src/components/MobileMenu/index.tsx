import { FC, useState } from "react";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import styles from "./index.module.scss";
import Link from "next/link";
import { IconContext } from "react-icons";
import { MdSearch } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { BsCollectionPlayFill } from "react-icons/bs";
import { RiHome6Line } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { Button } from "../Button/Button";
import { MobileModal } from "./MobileModal";

const MobileMenu: FC = () => {
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setModal(false);
    const div =
      (e?.target as HTMLDivElement)
        ?.closest(`.${styles.item}`)
        ?.getAttribute("data-title") || "";
    setActiveItem(div);
  };

  const onClickBtn = (e: React.MouseEvent<HTMLDivElement>) => {
    setModal(!modal);
    const div =
      (e?.target as HTMLDivElement)
        ?.closest(`.${styles.item}`)
        ?.getAttribute("data-title") || "";
    setActiveItem(div);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.items}>
          <Link href="/">
            <div
              className={`${styles.item}  ${
                activeItem == "ivi" && styles.item_open
              }`}
              data-title="ivi"
              onClick={onClickHandler}
            >
              <IconContext.Provider
                value={{
                  className: `${styles.icon}`,
                }}
              >
                <div>
                  <RiHome6Line />
                </div>
              </IconContext.Provider>
              <span>{t("header.my_ivi")}</span>
            </div>
          </Link>
          <Link href="/movies">
            <div
              className={`${styles.item}  ${
                activeItem == "catalog" && styles.item_open
              }`}
              data-title="catalog"
              onClick={onClickHandler}
            >
              <IconContext.Provider
                value={{
                  className: `${styles.icon}`,
                }}
              >
                <div>
                  <BsCollectionPlayFill />
                </div>
              </IconContext.Provider>
              <span>{t("buttons.catalog")}</span>
            </div>
          </Link>
          <Link href="https://www.ivi.ru/profile?ivi_search">
            <div
              className={`${styles.item}  ${
                activeItem == "search" && styles.item_open
              }`}
              data-title="search"
              onClick={onClickHandler}
            >
              <IconContext.Provider
                value={{
                  className: `${styles.icon}`,
                }}
              >
                <div>
                  <MdSearch />
                </div>
              </IconContext.Provider>
              <span>{t("buttons.search")}</span>
            </div>
          </Link>
          <Link href="/">
            <div
              className={`${styles.item}  ${
                activeItem == "profile" && styles.item_open
              }`}
              data-title="profile"
              onClick={onClickHandler}
            >
              <IconContext.Provider
                value={{
                  className: `${styles.icon}`,
                }}
              >
                <div>
                  <RiUser3Line />
                </div>
              </IconContext.Provider>
              <span>{t("buttons.profile")}</span>
            </div>
          </Link>
          <Button>
            <div
              className={`${styles.item}  ${modal && styles.item_open}`}
              data-title="more"
              onClick={onClickBtn}
            >
              <IconContext.Provider
                value={{
                  className: `${styles.icon}`,
                }}
              >
                <div>{modal ? <CgClose /> : <BsThreeDots />}</div>
              </IconContext.Provider>
              <span>
                {modal ? t("buttons.close_btn") : t("buttons.more_btn")}
              </span>
            </div>
          </Button>
        </div>
      </div>
      <MobileModal modal={modal} />
    </>
  );
};

export default MobileMenu;
