import { FC } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import styles from "./index.module.scss";
import { Button } from "../Button/Button";
import { useAppDispatch } from "@/hooks/hooks";
import { setCountries, setGenres, setYears } from "@/Redux/filter/actions";
import { useTranslation } from "next-export-i18n";

const PrevButton: FC = (props: any) => {
  return (
    <Button
      className={`${styles.prev} ${
        props.className.includes("slick-disabled") && styles.disabled
      }`}
      onClick={props.onClick}
    >
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

const Suggestion: FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    variableWidth: true,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
  };

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  return (
    <Slider {...settings} className={styles.container}>
      <Button
        className={styles.slide}
        key={"2022"}
        onClick={() => dispatch(setYears([2022, 2022]))}
      >
        {t("filters.2022_year")}
      </Button>
      <Button
        className={styles.slide}
        key={"20002010"}
        onClick={() => dispatch(setYears([2000, 2010]))}
      >
        {"2000 - 2010"}
      </Button>
      <Button
        className={styles.slide}
        key={"19402000"}
        onClick={() => dispatch(setYears([1940, 2000]))}
      >
        {t("filters.before_2000_year")}
      </Button>
      <Button
        className={styles.slide}
        key={"russian"}
        onClick={() => dispatch(setCountries("Россия"))}
      >
        {t("filters.russian_movies")}
      </Button>
      <Button
        className={styles.slide}
        key={"ussr"}
        onClick={() => dispatch(setCountries("СССР"))}
      >
        {t("filters.soviet_movies")}
      </Button>
      <Button
        className={styles.slide}
        key={"usa"}
        onClick={() => dispatch(setCountries("США"))}
      >
        {t("filters.american_movies")}
      </Button>
      <Button
        className={styles.slide}
        key={"comedy"}
        onClick={() => dispatch(setGenres("комедия"))}
      >
        {t("filters.comedy")}
      </Button>
      <Button
        className={styles.slide}
        key={"thrillers"}
        onClick={() => dispatch(setGenres("триллер"))}
      >
        {t("filters.thrillers")}
      </Button>
      <Button
        className={styles.slide}
        key={"detectives"}
        onClick={() => dispatch(setGenres("детектив"))}
      >
        {t("filters.detectives")}
      </Button>
      <Button
        className={styles.slide}
        key={"adventures"}
        onClick={() => dispatch(setGenres("приключения"))}
      >
        {t("filters.adventures")}
      </Button>
      <Button
        className={styles.slide}
        key={"fantastic"}
        onClick={() => dispatch(setGenres("фантастика"))}
      >
        {t("filters.fantastic")}
      </Button>
      <Button
        className={styles.slide}
        key={"drama"}
        onClick={() => dispatch(setGenres("драма"))}
      >
        {t("filters.drama")}
      </Button>
    </Slider>
  );
};

export default Suggestion;
