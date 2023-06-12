import { DetailedHTMLProps, Dispatch, FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useTranslation } from "next-export-i18n";
import { FilmLangType, IMovie } from "@/types/types";
import { useRouter } from "next/router";
import DetailsMovie from "./Details";
import MovieRating from "./MovieRating";

type Props = {
  className: string;
  movie: IMovie;
};

export const InfoMovie: FC<Props> = ({ className, movie }) => {
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
    <div className={[styles.container, className].join(" ")}>
      {movie.filmLang && (
        <div className={styles.datas}>
          {locale === "en"
            ? movie.filmLang[1].filmDescription
            : movie.filmLang[0].filmDescription}
        </div>
      )}
      <DetailsMovie movie={movie} />
      <MovieRating
        raiting={movie.filmGrade}
        totalGrade={movie.filmTotalGrade}
      />
    </div>
  );
};

export default InfoMovie;
