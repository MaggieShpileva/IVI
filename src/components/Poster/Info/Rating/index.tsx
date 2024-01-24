import { CountriesType, GenresType, NameT } from "@/types/types";
import { FC, useState } from "react";
import styles from "./index.module.scss";
import ProgressBar from "./ProgressBar";

type Props = {
  raiting: number;
  filmYear: number;
  country: NameT[];
  genres: NameT[];
};

const Rating: FC<Props> = ({ raiting, filmYear, country, genres }) => {
  const renderValue = (array: any) => {
    return array.slice(0, 2).map((item: any, index: number) => {
      if (index == 1) {
        return ` ${item.name}`;
      } else {
        return `${item.name}, `;
      }
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.rating}>
        {/* {raiting} */}
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
          {filmYear}, {renderValue(country)}
        </p>
        <p>{renderValue(genres)}</p>
      </div>
    </div>
  );
};

export default Rating;
