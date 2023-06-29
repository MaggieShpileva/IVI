import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Icons from "./Info/Icons";
import Info from "./Info";
import { ISimpleMovie, MovieT, SimilarMovie } from "@/types/types";
import { useRouter } from "next/router";
import { useTranslation } from "next-export-i18n";
const posterImage = require("../../images/posterImage.jpeg");

export type PosterMovieProps = {
  film: MovieT;
};
const PosterMovie: FC<PosterMovieProps> = ({ film }) => {
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

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.container}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className={styles.poster}>
          <Image
            src={film?.posterUrl}
            alt=""
            className={styles.img}
            fill
            sizes="100%"
          ></Image>
          {isOpen && (
            <Info
              raiting={film.ratingKinopoisk}
              filmYear={film.year}
              country={film.countries}
              genres={film.genres}
            />
          )}
        </div>
        <div className={styles.description}>
          <span className={styles.name}>
            {locale === "ru" ? film?.nameRu : film?.nameEn}
          </span>
          <span className={styles.tariff}>{t("movie.free")}</span>
        </div>
      </div>
    </div>
  );
};

export default PosterMovie;
