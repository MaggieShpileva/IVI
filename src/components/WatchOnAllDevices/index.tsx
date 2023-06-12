import { DetailedHTMLProps, Dispatch, FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";
import { FilmLangType } from "@/types/types";
import tvBg from "../../images/tv-without-poster.png";
import ipadBG from "../../images/ipad-without-poster.png";
import { Button } from "@/components/Button/Button";
import { useRouter } from "next/router";
type Props = {
  filmPicture?: string;
  filmLang: FilmLangType[];
};

export const WatchOnAllDevices: FC<Props> = (props) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [locale, setLocale] = useState<any>("ru");

  useEffect(() => {
    if (router.query?.lang) {
      setLocale(router.query?.lang);
    } else {
      setLocale("ru");
    }
  }, [router]);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>
          {t("movie.watch")}{" "}
          {locale === "ru"
            ? props.filmLang[0].filmName
            : props.filmLang[1].filmName}
          {t("movie.all_devices")}
        </h2>
        <p>{t("movie.download")}</p>
        <Link href={"https://www.ivi.tv/devices"}>
          <Button color={"pink"} className={styles.button}>
            {t("buttons.connect_devices")}
          </Button>
        </Link>
      </div>
      <div className={styles.banner}>
        <div className={styles.tv}>
          <Image
            src={tvBg}
            alt=""
            width={600}
            className={styles.tv_bg_img}
          ></Image>
          {props.filmPicture && (
            <Image
              src={props.filmPicture}
              alt=""
              width={600}
              height={600}
              className={styles.tv_main_img}
            ></Image>
          )}
        </div>
        <div className={styles.ipad}>
          <Image
            src={ipadBG}
            alt=""
            width={500}
            className={styles.ipad_bg_img}
          ></Image>
          {props.filmPicture && (
            <Image
              src={props.filmPicture}
              alt=""
              width={600}
              height={600}
              className={styles.ipad_main_img}
            ></Image>
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchOnAllDevices;
