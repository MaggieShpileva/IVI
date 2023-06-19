import { Grade } from "@/types/types";
import { useRouter } from "next/router";
import { DetailedHTMLProps, Dispatch, FC, useEffect, useState } from "react";
import styles from "./index.module.scss";

type MovieRatingProps = {
  raiting: Grade;
  votes: Grade;
};

const MovieRating: FC<MovieRatingProps> = ({ raiting, votes }) => {
  return (
    <div className={styles.raiting}>
      <h3 className={styles.title}>Рейтинг фильма</h3>
      <div className={styles.row}>
        <div className={styles.stars}>
          {Array.from({ length: 10 }, (item, index) => {
            let w = 32;
            {
              index < Math.floor(raiting.kp) ? (w = 32) : (w = 0);
              index === Math.floor(raiting.kp) && (w = 32 * (raiting.kp % 1));

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
          {raiting.kp > 6 ? (
            <h1 style={{ color: "green" }}>{raiting.kp.toFixed(1)}</h1>
          ) : (
            <h1 style={{ color: "red" }}>{raiting.kp.toFixed(1)}</h1>
          )}

          <p className={styles.count}>
            {votes?.kp.toLocaleString("ru-RU")} оценок
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieRating;
