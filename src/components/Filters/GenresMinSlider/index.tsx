import { Dispatch, FC, MouseEvent, SetStateAction } from "react";
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
import { useRouter } from "next/router";
import { getMoviesWithGender } from "@/Redux/moviesWithFilters/actions";
import { useDispatch } from "react-redux";

const PrevButton: FC = (props: any) => {
  return (
    <Button
      className={`${styles.prev} ${
        props.className.includes("slick-disabled") && styles.disabled
      }`}
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
      className={`${styles.next} ${
        props.className.includes("slick-disabled") && styles.disabled
      }`}
      onClick={props.onClick}
    >
      <BsChevronCompactRight />
    </Button>
  );
};

type Props = {
  genres: {
    id: number;
    name: string;
  }[];
  setIsFilter: Dispatch<SetStateAction<boolean>>;
};

const GenresMinSlider: FC<Props> = ({ genres, setIsFilter }) => {
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

  const put = useDispatch();
  const router = useRouter();
  const lang = router.asPath.includes("lang=en") ? "en" : "ru";
  // const genres = lang === "en" ? genresEn : genresRu;
  const handleClick = (event: MouseEvent) => {
    setIsFilter(true);
    const target = event.target as HTMLButtonElement;
    put(getMoviesWithGender(target.textContent));
  };

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
            iconClass={findItem?.icon || ""}
            onClick={handleClick}
          />
        );
      })}
    </Slider>
  );
};

export default GenresMinSlider;
