import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Icons from "./Info/Icons";
import Info from "./Info";
import { ISimpleMovie, MovieKinopoiskT, SimilarMovie } from "@/types/types";
import { useRouter } from "next/router";
import { useTranslation } from "next-export-i18n";
const posterImage = require("../../images/posterImage.jpeg");

export type PosterMovieProps = {
  film: MovieKinopoiskT;
};

const Poster: FC<PosterMovieProps> = ({ film }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();
  const [locale, setLocale] = useState<any>("ru");

  useEffect(() => {
    if (router.query?.lang) {
      setLocale(router.query?.lang);
    } else {
      setLocale("ru");
    }
  }, [router]);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.container}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.poster}>
          <Image
            src={film?.poster.url ? film.poster.url : film.backdrop.previewUrl}
            alt=""
            className={styles.img}
            fill
            sizes="100%"
            priority={true}
          ></Image>

          {isOpen && film.rating && (
            <Info
              raiting={film.rating.kp}
              filmYear={film.year}
              country={film.countries}
              genres={film.genres}
            />
          )}
        </div>
        {/* <div className={styles.description}>
          <span className={styles.name}>
            {locale === "ru" ? film?.name : film?.enName}
          </span>
          <span className={styles.tariff}>{t("movie.free")}</span>
        </div> */}
      </div>
    </div>
  );
};

export default Poster;
