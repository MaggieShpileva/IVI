import { CountriesType, GenresType } from "@/types/types";
import { FC, useState } from "react";
import Icons from "./Icons";
import styles from "./index.module.scss";
import Rating from "./Rating";

type Props = {
  raiting: number;
  filmYear: number;
  country: CountriesType[];
  genres: GenresType[];
};
const Info: FC<Props> = ({ raiting, filmYear, country, genres }) => {
  return (
    <div className={styles.container}>
      <Icons />
      <Rating
        raiting={raiting}
        filmYear={filmYear}
        country={country}
        genres={genres}
      />
    </div>
  );
};

export default Info;
