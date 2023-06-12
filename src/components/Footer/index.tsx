import { FC } from "react";
import Link from "next/link";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import styles from "./index.module.scss";
import { Button } from "@/components/Button/Button";
import { IoMailOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { MdDevicesOther } from "react-icons/md";
import { BsTvFill } from "react-icons/bs";
import { HiOutlinePhone, HiOutlineSpeakerphone } from "react-icons/hi";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Image from "next/image";
import speakerphone from "../../images/speakerphone.png";
import Socials from "@/components/Socials";

export const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.content}>
          <nav className={styles.cols}>
            <h3 className={styles.cols__title}>{t("footer.about_us")}</h3>
            <ul className={styles.list} >
              <li key="0">
                <Link
                  href={"https://corp.ivi.ru/"}
                  className={styles.list__link}
                >
                  {t("footer.about_company")}
                </Link>
              </li>
              <li key="1">
                <Link
                  href={"https://corp.ivi.ru/career/#career-vacancy-block"}
                  className={styles.list__link}
                >
                  {t("footer.vacancies")}
                </Link>
              </li>
              <li key="2">
                <Link
                  href={"https://www.ivi.ru/pages/beta/"}
                  className={styles.list__link}
                >
                  {t("footer.program_beta_test")}
                </Link>
              </li>
              <li key="3">
                <Link
                  href={"https://www.ivi.ru/info/partners"}
                  className={styles.list__link}
                >
                  {t("footer.inform_partners")}
                </Link>
              </li>
              <li key="4">
                <Link
                  href={"https://corp.ivi.ru/advertisers/"}
                  className={styles.list__link}
                >
                  {t("footer.advertising")}
                </Link>
              </li>
              <li key="5">
                <Link
                  href={"https://www.ivi.ru/info/agreement"}
                  className={styles.list__link}
                >
                  {t("footer.agreement")}
                </Link>
              </li>
              <li key="6">
                <Link
                  href={"https://www.ivi.ru/info/confidential"}
                  className={styles.list__link}
                >
                  {t("footer.confidential")}
                </Link>
              </li>
              <li key="7">
                <Link
                  href={"https://www.ivi.ru/info/goryachaya-liniya-komplaens"}
                  className={styles.list__link}
                >
                  {t("footer.compliance")}
                </Link>
              </li>
            </ul>
          </nav>
          <nav className={styles.cols}>
            <h3 className={styles.cols__title}>{t("footer.sections")}</h3>
            <ul className={styles.list}>
              <li key="0">
                <Link href={"/"} className={styles.list__link}>
                  {t("header.my_ivi")}
                </Link>
              </li>
              <li key="1">
                <Link
                  href={"https://www.ivi.ru/new"}
                  className={styles.list__link}
                >
                  {t("header.whats_new")}
                </Link>
              </li>
              <li key="2">
                <Link href={"/movies"} className={styles.list__link}>
                  {t("header.movies")}
                </Link>
              </li>
              <li key="3">
                <Link
                  href={"https://www.ivi.ru/series"}
                  className={styles.list__link}
                >
                  {t("header.series")}
                </Link>
              </li>
              <li key="4">
                <Link
                  href={"https://www.ivi.ru/animation"}
                  className={styles.list__link}
                >
                  {t("header.animations")}
                </Link>
              </li>
              <li key="5">
                <Link
                  href={"https://www.ivi.ru/tvplus"}
                  className={styles.list__link}
                >
                  TV+
                </Link>
              </li>
              <li key="6">
                <Link
                  href={"https://www.ivi.ru/goodmovies"}
                  className={styles.list__link}
                >
                  {t("footer.what_to_see")}
                </Link>
              </li>
              <li className={styles.list__sert} key="7">
                <Link
                  href={"https://www.ivi.ru/cert"}
                  className={styles.list__link}
                >
                  {t("footer.certificate")}
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.cols}>
            <h3 className={styles.cols__title}>{t("footer.support")}</h3>
            <p>
              {t("footer.ready_helps")}
              <br />
              {t("footer.operators_online")}
            </p>
            <div className={styles.support}>
              <Link href={"https://www.ivi.ru/profile"}>
                <Button type="chatButton" color="purple">
                  {t("footer.write_chat")}
                </Button>
              </Link>
              <div className={styles.support__btns}>
                <Link href={"mailto:support@ivi.ru"} type="email">
                  <Button color="purple" type="footerIconButton">
                    <GoMail />
                  </Button>
                </Link>
                <Link href={"tel:+73832021280"} type="tel">
                  <Button type="footerIconButton" color="purple">
                    <HiOutlinePhone />
                  </Button>
                </Link>
              </div>
              <Link href={"https://ask.ivi.ru/"} className={styles.ask}>
                ask.ivi.ru
              </Link>
              <p>{t("footer.answers")}</p>
            </div>
          </div>
          <div className={styles.cols}>
            <Link
              href={"https://www.ivi.ru/subscribe?redirect_url=%2F"}
              className={styles.widget}
            >
              <div className={styles.widget__img}>
                <Image src={speakerphone} alt="speakerphone" priority width="72" height="72"></Image>
              </div>
              <p className={styles.widget__text}>
                {t("footer.watch_movies")}
              </p>
            </Link>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.columns}>
            <div className={styles.stories}>
              <Link
                href={"https://go.onelink.me/app/devicesiOS"}
                key="App Store"
              >
                <Button type="footerStoresButton" color="purple">
                  <FaApple />
                  <div>
                    <span>{t("footer.download_to")}</span>
                    <div>App Store</div>
                  </div>
                </Button>
              </Link>
              <Link
                href={"https://go.onelink.me/app/devicesAndroid"}
                key="Google Play"
              >
                <Button type="footerStoresButton" color="purple">
                  <FaGooglePlay />
                  <div>
                    <span>{t("footer.available_in")}</span>
                    <div>Google Play</div>
                  </div>
                </Button>
              </Link>
              <Link href={"https://www.ivi.ru/pages/tvsmart/"} key="Smart TV">
                <Button type="footerStoresButton" color="purple">
                  <BsTvFill />
                  <div>
                    <span>{t("footer.watch_on")}</span>
                    <div>Smart TV</div>
                  </div>
                </Button>
              </Link>
              <Link href={"https://www.ivi.ru/devices"} key="all devices">
                <Button type="footerStoresButton" color="purple">
                  <MdDevicesOther />
                  <div>
                    <div>{t("footer.all_devices")}</div>
                  </div>
                </Button>
              </Link>
            </div>
            <div className={styles.copyrights}>
              <p>© 2023 ООО «Иви.ру»</p>
              <p>
                HBO ® and related service marks are the property of Home Box
                Office, Inc
              </p>
            </div>
          </div>
          <div className={styles.columns}>
            <div className={styles.socials}>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
