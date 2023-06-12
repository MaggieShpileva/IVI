import { DetailedHTMLProps, Dispatch, FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useTranslation } from "next-export-i18n";
import { IMovie } from "@/types/types";

type Props = {
  movie: IMovie;
};

const DetailsMovie: FC<Props> = ({ movie }) => {
  const [isDetails, setIsDetails] = useState(false);

  return (
    <div className={styles.details}>
      <h3 onClick={() => setIsDetails(true)}> Детали о фильме</h3>
      {isDetails ? (
        <div className={styles.show_details}>
          <div className={styles.row}>
            <h5>Год производства</h5>
            <p>{movie.filmYear}</p>
          </div>
          <div className={styles.row}>
            <h5>Страна</h5>
            {movie.countries.map((item, index) => {
              return <p key={index}>{item.name}</p>;
            })}
          </div>
          <div className={styles.row}>
            <h5>Жанр</h5>
            {movie.genres.slice(0, 3).map((item, index) => {
              return <p key={index}>{item.name} </p>;
            })}
          </div>

          <div className={styles.row}>
            <h5>Режиссер</h5>
            {movie?.directors ? (
              movie.directors.map((item, index) => {
                return <p key={index}>{item.name}</p>;
              })
            ) : (
              <p> — </p>
            )}
          </div>
          <div className={styles.row}>
            <h5> Возраст</h5>
            <p>{movie.filmAge} + </p>
          </div>
          <div className={styles.row}>
            <h5> Время</h5>
            <p>{movie.filmTime} мин.</p>
          </div>
          <div className={styles.row}>
            <h5> Рейтинг MPAA</h5>
            <p>{movie.filmR}</p>
          </div>
          <h3 onClick={() => setIsDetails(false)}>Свернуть детали фильма</h3>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DetailsMovie;
