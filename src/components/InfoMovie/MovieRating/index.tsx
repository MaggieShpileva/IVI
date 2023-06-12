import { DetailedHTMLProps, Dispatch, FC, useEffect, useState } from "react";
import styles from "./index.module.scss";

type MovieRatingProps = {
  raiting: number;
  totalGrade: number;
};

const MovieRating: FC<MovieRatingProps> = ({ raiting, totalGrade }) => {
  return (
    <div className={styles.raiting}>
      <h3 className={styles.title}>Рейтинг фильма</h3>
      <div className={styles.row}>
        <div className={styles.stars}>
          {Array.from({ length: 10 }, (item, index) => {
            let w = 32;
            {
              index < Math.floor(raiting) ? (w = 32) : (w = 0);
              index === Math.floor(raiting) && (w = 32 * (raiting % 1));

              return (
                <div className={styles.star} key={index}>
                  <span className={styles.grey_star}></span>
                  <span className={styles.red_star} style={{ width: w }}></span>

                  <p>{index}</p>
                </div>
              );
            }
          })}
        </div>
        <div className={styles.raiting_value}>
          {raiting > 6 ? (
            <h1 style={{ color: "green" }}>{raiting}</h1>
          ) : (
            <h1 style={{ color: "red" }}>{raiting}</h1>
          )}

          <p className={styles.count}>
            {totalGrade.toLocaleString("ru-RU")} оценок
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieRating;
