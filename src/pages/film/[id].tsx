import { Breadcrumb } from "@/components/Breadcrumbs";
import styles from "./index.module.scss";
import { DescriptionCard } from "@/components/DescriptionCard";
import SliderContinueBrowsing from "@/components/Sliders/SliderContinueBrowsing";
import moviesData from "@/data/One_film_response_v2.json";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  PreviewData,
} from "next";
import { useRouter } from "next/router";
import { FilmLangType, ISimpleMovie, MovieKinopoiskT } from "@/types/types";
import { useTranslation } from "next-export-i18n";
import SimpleSlider from "@/components/Sliders/SimpleSlider";
import React, { useEffect, useState } from "react";
import ActorsSlider from "@/components/Sliders/ActorsSlider";
import axios from "axios";
import InfoMovie from "@/components/InfoMovie";
import { getContinueBrowsing } from "@/Redux/continue_browsing/actions";
import { connect, useDispatch, useSelector } from "react-redux";
import { Loader } from "@/components/Loader";
import TrailerCard from "@/components/TrailerCard";
import { selectMovieUser } from "@/Redux/movie/selectors";
import { selectBrowsingMovie } from "@/Redux/continue_browsing/selectors";
import { ParsedUrlQuery } from "querystring";
import { TrailerModal } from "@/components/Modals/TrailerModal";
import WatchOnAllDevices from "@/components/WatchOnAllDevices";

const CardId = (movie: MovieKinopoiskT) => {
  const [id, setId] = useState<any>();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const router = useRouter();
  const continueBrowsing = useSelector(selectBrowsingMovie);
  const put = useDispatch();
  const movieData = useSelector(selectMovieUser);
  const [similarMovies, setSimilarMovies] = useState<ISimpleMovie[]>([]);

  const breadcrumbs: Breadcrumb[] = [
    { item: "Фильмы", path: "/movies" },
    {
      item: movieData.genres !== undefined ? movieData?.genres[0].name : "",
      path: "/movies",
    },
  ];

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

    const movies = movie.similarMovies.map((item) => ({
      id: item.id,
      filmLang: [
        {
          lang: "ru",
          filmName: item.name,
        },
        {
          lang: "en",
          filmName: item.enName,
        },
      ] as FilmLangType[],

      filmPoster: item.poster.url,
    }));
    setSimilarMovies(movies);
  }, []);

  useEffect(() => {
    if (router.asPath !== id) {
      setIsLoading(false);
    }
  }, [router]);

  return (
    <div className={styles.container}>
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
        {/* <Comments /> */}
        {/* <SimpleSlider
          title={t("sliders_title.watching_with_a_movie")}
          films={similarMovies}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        /> */}
        <SliderContinueBrowsing
          title={t("sliders_title.continue_browsing")}
          type={"detailed"}
          movies={continueBrowsing}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        {isOpenModal && (
          <TrailerModal
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            trailer={movie.videos.trailers[0].url}
          />
        )}
        <WatchOnAllDevices
          filmLang={[
            { lang: "ru", filmName: movie.name },
            { lang: "en", filmName: movie.enName },
          ]}
          filmPicture={movie.poster.url}
        />
      </div>
      {/* {isLoading && <Loader type={"loading_page"} />} */}
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const { data } = await axios(
    `https://api.kinopoisk.dev/v1.3/movie/${context.params?.id}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": `13RH6Q2-2T1M1E7-M50R852-366EP7D`,
      },
    }
  );

  return { props: data };
};

export default CardId;
