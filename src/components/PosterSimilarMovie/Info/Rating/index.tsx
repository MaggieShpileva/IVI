import { CountriesType, GenresType } from "@/types/types";
import { FC, useState } from "react";
import styles from "./index.module.scss";
import ProgressBar from "./ProgressBar";

type Props = {
  raiting: number;
  filmYear: number;
  country: { country: string }[];
  genres: { genre: string }[];
};

const Rating: FC<Props> = ({ raiting, filmYear, country, genres }) => {
  const renderValue = (array: any, childKey: string) => {
    return array.slice(0, 3).map((item: any, index: number) => {
      if (index == array.length - 1 || index === 2) {
        return ` ${item[childKey]}`;
      } else {
        return `${item[childKey]}, `;
      }
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.rating}>
        <h5>
          {Math.floor(raiting)},<span>{raiting.toString().slice(-1)}</span>
        </h5>
        <div className={styles.div_progress_bar}>
          <ProgressBar progress={raiting * 10} style={"small"} />
          <ProgressBar progress={raiting * 7} style={"small"} />
          <ProgressBar progress={raiting * 11} style={"small"} />
          <ProgressBar progress={raiting * 10} style={"small"} />
        </div>
      </div>
      <div className={styles.story}>
        <p>сюжет</p>
        <ProgressBar progress={raiting * 10} style={"big"} />
      </div>

      <div className={styles.info}>
        <p>
          {filmYear}, {renderValue(country, "country")}
        </p>
        <p>{renderValue(genres, "genre")}</p>
      </div>
    </div>
  );
};

export default Rating;
