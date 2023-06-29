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
import SimpleSliderMovie from "@/components/Sliders/SimpleSliderMovie";

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
  // const breadcrumbs: Breadcrumb[] = [
  //   { item: "Фильмы", path: "/movies" },
  //   {
  //     item: movieData.genres !== undefined ? movieData?.genres[0].name : "",
  //     path: "/movies",
  //   },
  // ];

  useEffect(() => {
    put(
      getContinueBrowsing({
        id: movie.id,
        poster: movie.poster.url,
        name: {
          ruName: movie.name,
          enName: movie.enName,
        },
        description: {
          ruName: movie.description,
          enName: movie.description,
        },
      })
    );
    setId(router.asPath);
  }, []);

  useEffect(() => {
    if (router.asPath !== id) {
      setIsLoading(false);
    }
  }, [router]);
  console.log(movie);

  return (
    <div className={styles.container}>
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
              persons={movie.persons || []}
              className={styles.slider_actors}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
            <InfoMovie className={styles.info} movie={movie} />
          </div>
          <Comments />
          <SimpleSliderMovie
            title={t("sliders_title.watching_with_a_movie")}
            films={movie.similarMovies}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
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
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const locales = ["ru", "en"];

  const paths = locales.flatMap((locale) => {
    return [Array(1)].map((movie) => ({
      params: { id: moviesData.id.toString(), lang: locale },
    }));
  });

  return {
    paths,
    fallback: "blocking",
  };
};
export default CardId;
