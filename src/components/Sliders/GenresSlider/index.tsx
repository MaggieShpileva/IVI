import React, { FC } from "react";
import styles from "../index.module.scss";
import Slider from "react-slick";
import Poster from "@/components/Poster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GenresButton from "@/components/Filters/GenresButton";
import { settings } from "./../settings";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { selectMovies } from "@/Redux/movies/selectors";
import { genresIcons } from "@/data/filters";
import { setGenres } from "@/Redux/filter/actions";

import { useSelector } from "react-redux";

import { useRouter } from "next/router";
import { Loader } from "@/components/Loader";
import { GenresType } from "@/types/types";

type Props = {
  genresRu: GenresType[];
  genresEn: GenresType[];
};
const GenresSlider: FC<Props> = ({ genresRu, genresEn }) => {
  const newSettings = {
    ...settings, // текущие настройки слайдера
    centerMode: false, // дополнительные свойства
    slidesToShow: 7,
  };

  const dispatch = useAppDispatch();
  const router = useRouter();
  const lang = router.asPath.includes("lang=en") ? "en" : "ru";
  const genres = lang === "en" ? genresEn : genresRu;
  console.log(genres);
  return (
    <div>
      {genres === undefined ? (
        <Loader type="loading_simple" />
      ) : (
        <Slider {...newSettings} className={styles.container}>
          {genres?.map((item, i) => {
            const findItem = genresIcons.find(
              (elem) => elem.title === item.name
            );
            return (
              <GenresButton
                key={item.id}
                size="big"
                genres={item.name}
                id={findItem?.id || 1}
                onClick={() => dispatch(setGenres(item.name))}
                iconClass={findItem?.icon || ""}
              />
            );
          })}
        </Slider>
      )}
    </div>
  );
};

export default GenresSlider;
