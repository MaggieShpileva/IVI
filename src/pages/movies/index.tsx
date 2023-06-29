import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import styles from "./index.module.scss";
import Breadcrumbs, { Breadcrumb } from "@/components/Breadcrumbs";
import Description from "@/components/Description";
import Suggestion from "@/components/Suggestion";
import Filters from "@/components/Filters";
import Sort from "@/components/Sort";
import MovieResults from "@/components/MovieResults";
import FiltersTitleRow from "@/components/Filters/FiltersTitleRow";
import { useTranslation } from "next-export-i18n";
import { GetStaticProps, GetServerSideProps, NextPage } from "next";
import GenresSlider from "@/components/Sliders/GenresSlider";
import {
  IMovie,
  IPerson,
  ISimpleMovie,
  MoviesForFilmsPageT,
  SearchParamsType,
  SortType,
} from "@/types/types";
import SimpleSlider from "@/components/Sliders/SimpleSlider";
import PersonsSlider from "@/components/Sliders/PersonsSlider";
import { connect, useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { selectMovies } from "@/Redux/movies/selectors";
import { wrapper } from "@/Redux/store";
import { selectFilters } from "@/Redux/filter/selectors";
import {
  setActorsFilter,
  setCountries,
  setDirectorsFilter,
  setGenres,
  setRating,
  setResultsFilter,
  setScore,
  setYears,
} from "@/Redux/filter/actions";
import { sortHandler } from "@/Redux/filter/worker";
import { filterRangesHandler } from "@/Redux/filter/worker";
import { useRouter } from "next/router";
import { Loader } from "@/components/Loader";
// import { getMoviesData, getMoviesDataStart } from "@/Redux/movies/actions";
import axios from "axios";
import { getInitialMovies } from "@/Redux/movies/actions";
import { MoviesFilters } from "@/components/MoviesFilters";

const Movies: NextPage = ({ data }: any) => {
  const put = useDispatch();
  const dataMovie = useSelector(selectMovies);

  const router = useRouter();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const truncText = <p>{t("descriptions.movies_description_trunc")}</p>;
  const fullText = (
    <>
      <p>{t("descriptions.movies_description_full_1")}</p>
      <p>{t("descriptions.movies_description_full_2")}</p>
      <p>{t("descriptions.movies_description_full_3")}</p>
      <p>{t("descriptions.movies_description_full_4")}</p>
    </>
  );

  const breadcrumbsBegin: Breadcrumb[] = [
    { item: "Мой Иви", path: "/" },
    {
      item: "Фильмы",
      path: `/movies?lang=${router.asPath.includes("lang=en") ? "en" : "ru"}`,
    },
  ];

  const [breadcrumbs, setBreadcrumbs] =
    useState<Breadcrumb[]>(breadcrumbsBegin);

  return (
    <>
      <Head>
        <title>{t("filters.search_movies")}</title>
      </Head>
      <div className={styles.container}>
        <Breadcrumbs breadcrumbs={breadcrumbs} type="pages" del="/" />
        <>
          <h1 className={styles.title}>{t("filters.movies_online")}</h1>
          <Description
            truncText={truncText}
            fullText={fullText}
            className={styles.description}
          />
        </>
        <MoviesFilters />
        <MovieResults />
      </div>

      {/* {isLoading && <Loader type="loading_page" />} */}
      {/* <div className={styles.container}>
        <section className={styles.headerbar}>

          {!isFilter && (
            
          )}
          {isFilter && (
            <>
              <h1 className={styles.title}>{t("header.movies")}</h1>
              <FiltersTitleRow />
            </>
          )}
        </section>
        {!isFilter && (
          <div className={styles.suggestionRow}>
            <Suggestion />
          </div>
        )}
        {isFilter && (
          <div className={styles.sortRow}>
            <Sort />
          </div>
        )}
        <section className={styles.filtersRow}>
          <Filters />
        </section>
      </div>
      {!isFilter && (
        <section>
          <div className={styles.genresRow}>
            <h2 className={styles.genresRow__title}>
              {t("contextSubMenu.genres")}
            </h2>
            <GenresSlider
              genresRu={dataMovie.genresRu}
              genresEn={dataMovie.genresEn}
            />
          </div>
          <SimpleSlider
            title={t("sliders_title.top_movies")}
            films={dataMovie.bestFilmsSet as ISimpleMovie[]}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
          <div className={styles.personRow}>
            <h2 className={styles.personRow__title}>
              {t("sliders_title.persons")}{" "}
            </h2>
            <PersonsSlider popularActors={dataMovie.popularActors} />
          </div>
        </section>
      )}
      {isFilter && (
        <section className={styles.container}>
          <div className={styles.resultsRow}>
            {results.length ? (
              <MovieResults />
            ) : (
              <div className={styles.resultsEmpty}>
                {t("filters.not_found")}
              </div>
            )}
          </div>
        </section>
      )} */}
    </>
  );
};

// export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
// (store) => async (context) => {
// store.dispatch(getMoviesData());
// await new Promise((resolve) => {
//   const unsubscribe = store.subscribe(() => {
//     const data = store.getState().movies;
//     if (data) {
//       unsubscribe();
//       // resolve();
//     }
//   });
// });
// const data = await store.getState().movies;

// return {
//   props: { data },
//   revalidate: true,
// };
// }
// );

// export const getStaticProps = wrapper.getServerSideProps(
//   (store) => async (context) => {
//     await store.dispatch(getDataBanner());
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     const movies = (await store.getState()
//       .homePage) as MoviesForSlidersOnHomePageT;
//     const banner = await store.getState().banner.data;
//     return { props: { movies, banner } };
//   }
// );
export default Movies;
//export default Movies;
