"use client";
import { Breadcrumb } from "@/components/Breadcrumbs";
import styles from "./index.module.scss";
import { DescriptionCard } from "@/components/DescriptionCard";
import SliderContinueBrowsing from "@/components/Sliders/SliderContinueBrowsing";
import { useRouter } from "next/router";
import { FilmLangType, ISimpleMovie, MovieKinopoiskT } from "@/types/types";
import { useTranslation } from "next-export-i18n";
import React, { useEffect, useState } from "react";
import ActorsSlider from "@/components/Sliders/ActorsSlider";
import axios from "axios";
import InfoMovie from "@/components/InfoMovie";
import { getContinueBrowsing } from "@/Redux/continue_browsing/actions";
import { useDispatch, useSelector } from "react-redux";
import TrailerCard from "@/components/TrailerCard";
import { selectMovieUser } from "@/Redux/movie/selectors";
import { selectBrowsingMovie } from "@/Redux/continue_browsing/selectors";
import { TrailerModal } from "@/components/Modals/TrailerModal";
import WatchOnAllDevices from "@/components/WatchOnAllDevices";
import { Loader } from "@/components/Loader";

export default function CardId() {
  const route = useRouter();
  const [movie, setMovie] = useState<MovieKinopoiskT | null>(null);
  const movieId = route.query.id;

  useEffect(() => {
    const getFilmData = async () => {
      try {
        const { data } = await axios(`https://api.kinopoisk.dev/v1.3/movie/${movieId}`, {
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": `13RH6Q2-2T1M1E7-M50R852-366EP7D`,
          },
        });
        setMovie(data);
      } catch (e) {
        setMovie(null);
      }
    };
    getFilmData();
  }, []);
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
    if (movie) {
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

      const movies =
        movie.similarMovies &&
        movie.similarMovies.map((item) => ({
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
    }
  }, []);

  useEffect(() => {
    if (router.asPath !== id) {
      setIsLoading(false);
    }
  }, [router]);

  if (!movie) {
    return <Loader type={"loading_page"} />;
  }
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.wrapper}>
          <TrailerCard filmPicture={movie.poster.url} filmLink={movie.videos.trailers[0].url} isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} className={styles.trailer} />
          <DescriptionCard movie={movie} className={styles.discription} />
          <ActorsSlider persons={movie.persons || []} className={styles.slider_actors} isLoading={isLoading} setIsLoading={setIsLoading} />
          <InfoMovie className={styles.info} movie={movie} />
        </div>
        {/* <Comments /> */}
        {/* <SimpleSlider
          title={t("sliders_title.watching_with_a_movie")}
          films={similarMovies}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        /> */}
        <SliderContinueBrowsing title={t("sliders_title.continue_browsing")} type={"detailed"} movies={continueBrowsing} isLoading={isLoading} setIsLoading={setIsLoading} />
        {isOpenModal && <TrailerModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} trailer={movie.videos.trailers[0].url} />}
        <WatchOnAllDevices
          filmLang={[
            { lang: "ru", filmName: movie.name },
            { lang: "en", filmName: movie.enName },
          ]}
          filmPicture={movie.poster.url}
        />
      </div>
      {isLoading && <Loader type={"loading_page"} />}
    </div>
  );
}
