import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/Button/Button";
import GenresButton from "../GenresButton";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import styles from "./index.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { selectMovies } from "@/Redux/movies/selectors";
import { genresIcons } from "@/data/filters";
import { setGenres } from "@/Redux/filter/actions";
import { useRouter } from "next/router";

const PrevButton: FC = (props: any) => {
  return (
    <Button
      className={`${styles.prev} ${props.className.includes("slick-disabled") && styles.disabled}`}
      onClick={props.onClick}
    >
      {" "}
      <BsChevronCompactLeft />
    </Button>
  );
};

const NextButton: FC = (props: any) => {
  return (
    <Button
      className={`${styles.next} ${props.className.includes("slick-disabled") && styles.disabled}`}
      onClick={props.onClick}
    >
      <BsChevronCompactRight />
    </Button>
  );
};

const GenresMinSlider: FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 5,
    variableWidth: false,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    responsive: [
      {
        breakpoint: 744,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const { genresEn, genresRu } = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const lang = router.asPath.includes("lang=en") ? "en" : "ru";
  const genres = lang === "en" ? genresEn : genresRu;

  return (
    <Slider {...settings} className={styles.container}>
      {genres.map((item, i) => {
        const findItem = genresIcons.find((elem) => elem.title === item.name);
        return (
          <GenresButton
            size="small"
            genres={item.name}
            id={findItem?.id || 1}
            key={item.id}
            onClick={() => dispatch(setGenres(item.name))}
            iconClass={findItem?.icon || ""}
          />
        );
      })}
    </Slider>
  );
};

export default GenresMinSlider;
