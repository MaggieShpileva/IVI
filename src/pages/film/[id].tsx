import Breadcrumbs, { Breadcrumb } from "@/components/Breadcrumbs";
import styles from "./index.module.scss";
import { DescriptionCard } from "@/components/DescriptionCard";
import SliderContinueBrowsing from "@/components/Sliders/SliderContinueBrowsing";
import moviesData from "@/data/One_film_response_v2.json";
import { Comments } from "@/components/Comments";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
  PreviewData,
} from "next";
import { useRouter } from "next/router";
import { IMovieRes, MovieKinopoiskT } from "@/types/types";
import { useTranslation } from "next-export-i18n";
import SimpleSlider from "@/components/Sliders/SimpleSlider";
import React, { useEffect, useState } from "react";
import ActorsSlider from "@/components/Sliders/ActorsSlider";
import { TrailerModal } from "@/components/Modals/TrailerModal";
import WatchOnAllDevices from "../../components/WatchOnAllDevices";
import axios from "axios";
import InfoMovie from "@/components/InfoMovie";
import { getContinueBrowsing } from "@/Redux/continue_browsing/actions";
import { connect, useDispatch, useSelector } from "react-redux";
import { Loader } from "@/components/Loader";
import dataForTrailers from "../../data/trailers_for_movie.json";
import TrailerCard from "@/components/TrailerCard";
import { getMovieData } from "@/Redux/movie/actions";
import { selectMovieUser } from "@/Redux/movie/selectors";
import { RootState, wrapper } from "@/Redux/store";
import { selectBrowsingMovie } from "@/Redux/continue_browsing/selectors";
import { END } from "redux-saga";
import { ParsedUrlQuery } from "querystring";

const CardId = ({ movie }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [id, setId] = useState<any>();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const router = useRouter();
  const continueBrowsing = useSelector(selectBrowsingMovie);
  const put = useDispatch();
  const movieData = useSelector(selectMovieUser);

  // useEffect(() => {
  //   put(getMovieData({ id: idTest }));
  // }, []);
  console.log(movie);
  // const breadcrumbs: Breadcrumb[] = [
  //   { item: "Фильмы", path: "/movies" },
  //   {
  //     item: movieData.genres !== undefined ? movieData?.genres[0].name : "",
  //     path: "/movies",
  //   },
  // ];

  // useEffect(() => {
  //   put(
  //     getContinueBrowsing({
  //       id: movie.id,
  //       poster: movie.filmPoster,
  //       name: {
  //         ruName: movie.filmLang[0].filmName,
  //         enName: movie.filmLang[1].filmName,
  //       },
  //       description: {
  //         ruName: movie.filmLang[0].filmDescription,
  //         enName: movie.filmLang[1].filmDescription,
  //       },
  //     })
  //   );
  //   setId(router.asPath);
  // }, []);

  useEffect(() => {
    if (router.asPath !== id) {
      setIsLoading(false);
    }
  }, [router]);

  return (
    <div className={styles.container}>
      {/* {movie.id} */}
      {movie.id === 0 || movie === undefined ? (
        <Loader type={"loading_page"} />
      ) : (
        <div>
          <div className={styles.wrapper}>
            <TrailerCard
              filmPicture={movie.poster.url}
              filmLink={movie.videos.trailers[0].url}
              isOpenModal={isOpenModal}
              setIsOpenModal={setIsOpenModal}
              className={styles.trailer}
            />
            <DescriptionCard movie={movie} className={styles.discription} />
            <ActorsSlider
              // filmGrade={movie.filmGrade}
              persons={movie.persons || []}
              className={styles.slider_actors}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
            <InfoMovie className={styles.info} movie={movie} />
          </div>
          <Comments />
          {/* <SimpleSlider
            title={t("sliders_title.watching_with_a_movie")}
            films={movie.similarMovies}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          /> */}
          {/* <SliderContinueBrowsing
            title={t("movie.trailers")}
            type={"detailed"}
            movies={continueBrowsing}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          /> */}
          {/* {isOpenModal && (
            <TrailerModal
              isOpenModal={isOpenModal}
              setIsOpenModal={setIsOpenModal}
              trailer={movie.filmTrailer}
            />
          )}
          <WatchOnAllDevices
            filmLang={movie.filmLang}
            filmPicture={movie.filmPoster}
          /> */}
        </div>
      )}
      {isLoading && <Loader type={"loading_page"} />}
    </div>
  );
};

export const getStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) => {
  try {
    const movieResponse = await axios.get(
      `https://api.kinopoisk.dev/v1.3/movie/${context.params?.id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": `13RH6Q2-2T1M1E7-M50R852-366EP7D`,
        },
      }
    );
    return {
      props: { movie: movieResponse.data as MovieKinopoiskT },
      revalidate: 60,
    };
  } catch (e) {
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "1", lang: "ru" } },
      { params: { id: "1", lang: "en" } },
    ],
    fallback: "blocking", // can also be true or 'blocking'
  };
};
export default CardId;
