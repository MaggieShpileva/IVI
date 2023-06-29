import { FC, useState, useEffect } from "react";
import styles from "./index.module.scss";
import Poster from "../Poster";
import Link from "next/link";
import { IMovie, ISimpleMovie, MovieT } from "@/types/types";
import { Button } from "../Button/Button";
import { useAppSelector } from "@/hooks/hooks";
import { selectFilters } from "@/Redux/filter/selectors";
import { useTranslation } from "next-export-i18n";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies } from "@/Redux/movies/selectors";
import { utimes } from "fs";
import { getInitialMovies } from "@/Redux/movies/actions";
import PosterMovie from "../PosterMovie";

const SHOW_SIZE = 14;

const MovieResults: FC = () => {
  const { t } = useTranslation();
  const [itemsToShow, setItemsToShow] = useState<ISimpleMovie[]>([]);
  const [next, setNext] = useState(0);
  const [locale, setLocale] = useState<any>("ru");
  const router = useRouter();
  const put = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  ////////////////
  const movies = useSelector(selectMovies);
  useEffect(() => {
    console.log("movies", movies);
  }, [movies]);

  useEffect(() => {
    put(getInitialMovies({ page: 1 }));
    setCurrentPage(currentPage + 1);
  }, []);

  // useEffect(() => {
  //   if (
  //     router.query?.filter === "Best films" ||
  //     router.query?.filter === "Лучшие фильмы"
  //   ) {
  //     console.log(router.query?.filter);
  //     console.log(bestFilmsSet);
  //     setItemsToShow(bestFilmsSet);
  //   }
  //   console.log(router.query?.filter);
  // }, [router.query]);

  const handleClick = () => {
    setCurrentPage(currentPage + 1);
    console.log(currentPage);
    put(getInitialMovies({ page: currentPage }));
  };

  useEffect(() => {
    if (router.query?.lang) {
      setLocale(router.query?.lang);
    } else {
      setLocale("ru");
    }
  }, [router]);

  return (
    <div className={styles.results}>
      <div className={styles.results__list}>
        {Array.isArray(movies.data) &&
          movies.data?.map((item, index) => (
            <Link
              href={`/film/${item.kinopoiskId}?lang=${
                router.asPath.includes("lang=en") ? "en" : "ru"
              }`}
              key={index}
            >
              <PosterMovie film={item} />
            </Link>
          ))}
      </div>
      <Button className={styles.results__moreBtn} onClick={handleClick}>
        {t("buttons.show_more")}
      </Button>
    </div>
  );
};

export default MovieResults;
