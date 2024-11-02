import { useState, useEffect, useRef } from "react";
import styles from "./index.module.scss";
import Filters from "@/components/Filters";
import { useTranslation } from "next-export-i18n";
import GenresSlider from "@/components/Sliders/GenresSlider";
import { MovieKinopoiskT, PersonForSliderType } from "@/types/types";
import SimpleSlider from "@/components/Sliders/SimpleSlider";
import PersonsSlider from "@/components/Sliders/PersonsSlider";
import { useSelector } from "react-redux";
import { wrapper } from "@/Redux/store";
import { selectMoviesWithFilters } from "@/Redux/moviesWithFilters/selectors";

import bestMovies from "../../data/new_data/movies.json"; //сделать 10 фильмов
import popularActors from "../../data/new_data/popularActors.json";
import dataMovie from "../../data/new_data/genres.json";
import { NextPage } from "next";
import MovieResults from "@/components/MovieResults";
import DefaultContent from "./DefaultContent";

const Movies: NextPage = () => {
  const { t } = useTranslation();
  const data = useSelector(selectMoviesWithFilters);
  const [isFilter, setIsFilter] = useState(false);

  // useEffect(() => {
  //   if (data !== undefined || data !== null) {
  //     setIsFilter(true);
  //   }
  // }, [data]);
  return (
    <>
      <section className={styles.container}>
        <section className={styles.filtersRow}>
          <Filters isFilter={isFilter} setIsFilter={setIsFilter} />
        </section>
        {isFilter ? <div className={styles.resultsRow}>{data.length !== 0 ? <MovieResults data={data} /> : <div className={styles.resultsEmpty}>{t("filters.not_found")}</div>}</div> : <DefaultContent setIsFilter={setIsFilter} />}
      </section>
    </>
  );
};

export default Movies;
