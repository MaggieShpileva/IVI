import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/Button/Button";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import styles from "./index.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { selectMovies } from "@/Redux/movies/selectors";
import { setCountries } from "@/Redux/filter/actions";
import { useRouter } from "next/router";

const PrevButton: FC = (props: any) => {
  return (
    <Button
      className={`${styles.prev} ${props.className.includes("slick-disabled") && styles.disabled}`}
      onClick={props.onClick}
    >
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

const CountriesSlider: FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
  };

  const { countriesRu, countriesEn } = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const lang = router.asPath.includes("lang=en") ? "en" : "ru";
  const countries = lang === "en" ? countriesEn : countriesRu;

  return (
    <Slider {...settings} className={styles.container}>
      {countries.map((item, i) => (
        <Button
          className={styles.slide}
          key={item.id}
          onClick={() => dispatch(setCountries(item.name))}
        >
          {item.name}
        </Button>
      ))}
    </Slider>
  );
};

export default CountriesSlider;
