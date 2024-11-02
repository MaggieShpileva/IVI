import bestMovies from "../../../data/new_data/movies.json"; //сделать 10 фильмов
import popularActors from "../../../data/new_data/popularActors.json";
import dataMovie from "../../../data/new_data/genres.json";
import styles from "./index.module.scss";
import GenresSlider from "@/components/Sliders/GenresSlider";
import SimpleSlider from "@/components/Sliders/SimpleSlider";
import { MovieKinopoiskT, PersonForSliderType } from "@/types/types";
import { useTranslation } from "next-export-i18n";
import { Dispatch, FC, SetStateAction, useState } from "react";
import PersonsSlider from "@/components/Sliders/PersonsSlider";

type Props = {
  setIsFilter: Dispatch<SetStateAction<boolean>>;
};

const DefaultContent: FC<Props> = ({ setIsFilter }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className={styles.genresRow}>
        <h2 className={styles.genresRow__title}>{t("contextSubMenu.genres")}</h2>
        <GenresSlider genresRu={dataMovie.genresRu} genresEn={dataMovie.genresEn} setIsFilter={setIsFilter} />
      </div>
      <SimpleSlider title={t("sliders_title.top_movies")} films={bestMovies.docs as MovieKinopoiskT[]} isLoading={isLoading} setIsLoading={setIsLoading} />
      <div className={styles.personRow}>
        <h2 className={styles.personRow__title}>{t("sliders_title.persons")} </h2>
        <PersonsSlider popularActors={popularActors as PersonForSliderType[]} />
      </div>
    </>
  );
};

export default DefaultContent;
