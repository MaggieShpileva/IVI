import { DetailedHTMLProps, Dispatch, FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useTranslation } from "next-export-i18n";
import { FilmLangType, IMovie, MovieKinopoiskT } from "@/types/types";
import { useRouter } from "next/router";
import DetailsMovie from "./Details";
import MovieRating from "./MovieRating";

type Props = {
  className: string;
  movie: MovieKinopoiskT;
};

export const InfoMovie: FC<Props> = ({ className, movie }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.datas}>{movie.description}</div>
      <DetailsMovie movie={movie} />
      <MovieRating raiting={movie.rating} votes={movie.votes} />
    </div>
  );
};

export default InfoMovie;
