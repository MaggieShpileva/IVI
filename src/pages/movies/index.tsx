import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import styles from "./index.module.scss";
import Breadcrumbs, { Breadcrumb } from "@/components/Breadcrumbs";
import Filters from "@/components/Filters";
import MovieResults from "@/components/MovieResults";
import { useTranslation } from "next-export-i18n";
import GenresSlider from "@/components/Sliders/GenresSlider";
import { MovieKinopoiskT, PersonForSliderType } from "@/types/types";
import SimpleSlider from "@/components/Sliders/SimpleSlider";
import PersonsSlider from "@/components/Sliders/PersonsSlider";
import { useSelector } from "react-redux";
import { wrapper } from "@/Redux/store";
import { Loader } from "@/components/Loader";
// import { getMoviesData, getMoviesDataStart } from "@/Redux/movies/actions";
import axios from "axios";
import { selectMoviesWithFilters } from "@/Redux/moviesWithFilters/selectors";

import bestMovies from "../../data/new_data/movies.json"; //сделать 10 фильмов
import popularActors from "../../data/new_data/popularActors.json";
import dataMovie from "../../data/new_data/genres.json";
import { NextPage } from "next";

const Movies: NextPage = ({
  genresData,
  bestMoviesData,
  popularActorsData,
}: any) => {
  const { t } = useTranslation();
  const data = useSelector(selectMoviesWithFilters);
  const [isFilter, setIsFilter] = useState(false);
  // useEffect(() => {
  //   put(getMoviesData());
  // }, []);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <section className={styles.container}>
        <section className={styles.filtersRow}>
          <Filters isFilter={isFilter} setIsFilter={setIsFilter} />
        </section>
        {isFilter ? (
          <div className={styles.resultsRow}>
            {Array.isArray(data) ? (
              <MovieResults data={data} />
            ) : (
              <div className={styles.resultsEmpty}>
                {t("filters.not_found")}
              </div>
            )}
          </div>
        ) : (
          <>
            {/* genres */}
            <div className={styles.genresRow}>
              <h2 className={styles.genresRow__title}>
                {t("contextSubMenu.genres")}
              </h2>
              <GenresSlider
                genresRu={genresData.genresRu}
                genresEn={genresData.genresEn}
              />
            </div>
            <SimpleSlider
              title={t("sliders_title.top_movies")}
              films={bestMoviesData.docs as MovieKinopoiskT[]}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
            <div className={styles.personRow}>
              <h2 className={styles.personRow__title}>
                {t("sliders_title.persons")}{" "}
              </h2>
              <PersonsSlider
                popularActors={popularActorsData as PersonForSliderType[]}
              />
            </div>
          </>
        )}
      </section>
    </>
  );
};

export const getStaticProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const popularActorsData = popularActors;
    const bestMoviesData = bestMovies;
    const genresData = dataMovie;
    return { props: { genresData, bestMoviesData, popularActorsData } };
  }
);
// export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
//   (store) => async (context) => {
//     store.dispatch(getMoviesData());

//     const data = store.getState().movies;
//     if (!data) {
//       return {
//         notFound: true,
//       };
//     }
//     return {
//       props: { data },
//       revalidate: true,
//     };
//   }
// );

export default Movies;
//export default Movies;
