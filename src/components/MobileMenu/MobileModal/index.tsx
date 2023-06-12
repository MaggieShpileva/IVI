import { FC } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import { Button } from "@/components/Button/Button";
import Socials from "@/components/Socials";
import { IoDiamondOutline } from "react-icons/io5";
import { RiAwardLine } from "react-icons/ri";
import { BsTvFill, BsTv } from "react-icons/bs";
import { BiCameraMovie, BiMessageAlt } from "react-icons/bi";
import { WiTrain } from "react-icons/wi";
import { GoInfo, GoMail } from "react-icons/go";
import { TbDeviceTv } from "react-icons/tb";
import { MdDevicesOther, MdOutlineVideoLibrary } from "react-icons/md";
import { HiOutlinePhone, HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi2";
import { ModalListItem } from "./ModalListItem";
import { ContextSubMenu } from "@/components/ContextSubMenu";
import { DropDownMenuFilm } from "@/components/ContextSubMenu/DropDownMenuFilm";
import { DropDownMenuAnim } from "@/components/ContextSubMenu/DropDownMenuAnim";
import { DropDownMenuSerial } from "@/components/ContextSubMenu/DropDownMenuSerial";
import { Header } from "@/components/Header";

type Props = {
  modal: boolean;
};

export const MobileModal: FC<Props> = ({ modal }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={modal ? styles.modalHeader_open : styles.modalHeader}>
        <Header />
      </div>
      <div className={modal ? styles.mobileModal_open : styles.mobileModal}>
        <div className={styles.container}>
          <div className={styles.group}>
            <div className={styles.buttons}>
              <Link href={"/"}>
                <Button className={styles.subscribe} type="subscribeButton" color="purple">
                  <IoDiamondOutline />
                  {t("footer.subscribe")}
                </Button>
              </Link>
              <Link href={"https://www.ivi.ru/cert"}>
                <Button type="subscribeButton" color="purple">
                  <RiAwardLine />
                  {t("footer.certificate")}
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.group}>
            <nav>
              <ul className={styles.list}>
                <li>
                  <Link href={"/"} className={styles.link}>
                    {t("header.my_ivi")}
                  </Link>
                </li>
                <li>
                  <Link href={"https://www.ivi.ru/new"} className={styles.link}>
                    {t("header.whats_new")}
                  </Link>
                </li>
                <ModalListItem key="movies" icon={BiCameraMovie} text={t("header.movies")}>
                  <ContextSubMenu
                    className={styles.contextMenu}
                    title={t("contextSubMenu.all_films")}
                  >
                    <DropDownMenuFilm />
                  </ContextSubMenu>
                </ModalListItem>
                <ModalListItem key="series" icon={MdOutlineVideoLibrary} text={t("header.series")}>
                  <ContextSubMenu
                    className={styles.contextMenu}
                    title={t("contextSubMenu.all_series")}
                  >
                    <DropDownMenuSerial />
                  </ContextSubMenu>
                </ModalListItem>
                <ModalListItem key="animations" icon={WiTrain} text={t("header.animations")}>
                  <ContextSubMenu
                    className={styles.contextMenu}
                    title={t("contextSubMenu.all_animations")}
                  >
                    <DropDownMenuAnim />
                  </ContextSubMenu>
                </ModalListItem>
                <ModalListItem key="TV+" icon={BsTv} text="TV+">
                  <ul className={styles.listTV}>
                    <li>
                      <h3>{t("contextSubMenu.tv_online")}</h3>
                    </li>
                    <li>
                      <Link href={"https://www.ivi.ru/tvplus#"}>
                        {t("contextSubMenu.tv_channels")}
                      </Link>
                    </li>
                    <li>
                      <Link href={"https://www.ivi.ru/tvplus/razvlekatelnoe"}>
                        {t("contextSubMenu.Entertainment")}
                      </Link>
                    </li>
                    <li>
                      <Link href={"https://www.ivi.ru/tvplus/deti"}>
                        {t("contextSubMenu.children")}
                      </Link>
                    </li>
                    <li>
                      <Link href={"https://www.ivi.ru/tvplus/sport"}>
                        {t("contextSubMenu.sport_tv")}
                      </Link>
                    </li>
                    <li>
                      <Link href={"https://www.ivi.ru/tvplus/documentalnoe"}>
                        {t("contextSubMenu.documents")}
                      </Link>
                    </li>
                  </ul>
                </ModalListItem>
                <li>
                  <Link href={"https://www.ivi.ru/goodmovies"} className={styles.link}>
                    {t("footer.what_to_see")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.group}>
            <ul className={styles.list}>
              <li>
                <Link
                  href={
                    "https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready"
                  }
                  className={styles.link}
                >
                  {t("footer.ivi_films")}
                </Link>
              </li>
              <li>
                <Link
                  href={
                    "https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready"
                  }
                  className={styles.link}
                >
                  {t("footer.ivi_series")}
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.group}>
            <ul className={styles.list}>
              <ModalListItem icon={GoInfo} text={t("footer.about_us")}>
                <ul className={styles.listAbout}>
                  <li key="0">
                    <Link href={"https://corp.ivi.ru/"}>{t("footer.about_company")}</Link>
                  </li>
                  <li key="1">
                    <Link href={"https://corp.ivi.ru/career/#career-vacancy-block"}>
                      {t("footer.vacancies")}
                    </Link>
                  </li>
                  <li key="2">
                    <Link href={"https://www.ivi.ru/pages/beta/"}>
                      {t("footer.program_beta_test")}
                    </Link>
                  </li>
                  <li key="3">
                    <Link href={"https://www.ivi.ru/info/partners"}>
                      {t("footer.inform_partners_all")}
                    </Link>
                  </li>
                  <li key="4">
                    <Link href={"https://corp.ivi.ru/advertisers/"}>{t("footer.advertising")}</Link>
                  </li>
                  <li key="5">
                    <Link href={"https://www.ivi.ru/info/agreement"}>{t("footer.agreement")}</Link>
                  </li>
                  <li key="6">
                    <Link href={"https://www.ivi.ru/info/confidential"}>
                      {t("footer.confidential")}
                    </Link>
                  </li>
                  <li key="7">
                    <Link href={"https://www.ivi.ru/info/goryachaya-liniya-komplaens"}>
                      {t("footer.compliance")}
                    </Link>
                  </li>
                </ul>
              </ModalListItem>
              <li>
                <Link href={"https://www.ivi.ru/code"} className={styles.link}>
                  <TbDeviceTv />
                  {t("footer.login_by_code")}
                </Link>
              </li>
            </ul>
            <div className={`${styles.buttons} ${styles.buttons_dev}`}>
              <Link href={"https://www.ivi.ru/pages/tvsmart/"}>
                <Button type="deviceButton" color="purple">
                  <BsTvFill />
                  <div>
                    <span>{t("footer.watch_on")}</span>
                    <div>Smart TV</div>
                  </div>
                </Button>
              </Link>
              <Link href={"https://www.ivi.ru/devices"}>
                <Button type="deviceButton" color="purple">
                  <MdDevicesOther />
                  <div>
                    <div>{t("footer.all_devices")}</div>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.group}>
            <ModalListItem icon={BiMessageAlt} text={t("footer.support")}>
              <p className={styles.help}>
                {t("footer.ready_helps")}
                <br />
                {t("footer.operators_online")}
              </p>
              <div className={`${styles.buttons} ${styles.buttons_chat}`}>
                <Link href={"https://www.ivi.ru/profile"}>
                  <Button className={styles.buttonChat} type="chatButton" color="purple">
                    {t("footer.write_chat")}
                  </Button>
                </Link>
                <div className={styles.buttonsIcon}>
                  <Link href={"mailto:support@ivi.ru"} type="email">
                    <Button type="footerIconButton" color="purple">
                      <GoMail />
                    </Button>
                  </Link>
                  <Link href={"tel:+73832021280"} type="tel">
                    <Button type="footerIconButton" color="purple">
                      <HiOutlinePhone />
                    </Button>
                  </Link>
                </div>
              </div>
              <Link href={"https://ask.ivi.ru/"} className={styles.ask}>
                ask.ivi.ru
              </Link>
              <p>{t("footer.answers")}</p>
            </ModalListItem>
          </div>
          <div className={styles.group}>
            <Socials />
            <p className={styles.copyright}>© 2023 ООО «Иви.ру»</p>
          </div>
        </div>
      </div>
    </div>
  );
};
