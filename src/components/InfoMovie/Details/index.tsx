import { DetailedHTMLProps, Dispatch, FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useTranslation } from "next-export-i18n";
import { IMovie, MovieKinopoiskT } from "@/types/types";
import dayjs from "dayjs";
import "dayjs/locale/ru";
type Props = {
  movie: MovieKinopoiskT;
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
            <p>{movie.year}</p>
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
            <h5> Слоган</h5>
            <p>{movie.slogan}</p>
          </div>
          <div className={styles.row}>
            <h5> Бюджет</h5>
            <p>
              {movie.budget.value.toLocaleString("ru-RU")}{" "}
              {movie.budget.currency}
            </p>
          </div>

          <div className={styles.row}>
            <h5>Премьера в России</h5>
            <p className={styles.date}>
              {dayjs(movie.premiere.russia).locale("ru").format("D MMMM YYYY")}
            </p>
          </div>

          <div className={styles.row}>
            <h5>Премьера в мире</h5>
            <p className={styles.date}>
              {dayjs(movie.premiere.world).locale("ru").format("D MMMM YYYY")}
            </p>
          </div>

          <div className={styles.row}>
            <h5> Возраст</h5>
            <p>{movie.ageRating} + </p>
          </div>
          <div className={styles.row}>
            <h5> Время</h5>
            <p>{movie.movieLength} мин.</p>
          </div>
          <div className={styles.row}>
            <h5> Рейтинг MPAA</h5>
            <p>{movie.ratingMpaa}</p>
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
