import React, { FC, useEffect, useState } from "react";
import styles from "../index.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./settings";
import PosterTopTen from "@/components/Carts/TopTen";
import logo from "../../../images/icons/top10.svg";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-export-i18n";
import { ResponseTopMovieKPType } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "@/Redux/RootState";
import { Loader } from "@/components/Loader";
import { getDataTopMovies } from "@/Redux/topTenMovies/actions";

const SliderTopTen = () => {
  const { t } = useTranslation();
  const movies = useSelector((store: RootState) => store.topMovies.data);
  const [locale, setLocale] = useState<any>("ru");
  const put = useDispatch();
  const router = useRouter();
  const newSettings = {
    ...settings,
    centerMode: false,
    slidesToShow: 5,
  };

  useEffect(() => {
    if (router.query?.lang) {
      setLocale(router.query?.lang);
    } else {
      setLocale("ru");
    }
  }, [router]);

  useEffect(() => {
    try {
      put(getDataTopMovies());
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Image src={logo} alt=""></Image>
        <h4>{t("sliders_title.during_the_week")}</h4>
      </div>
      {!movies ? (
        <Loader type="loading_simple" />
      ) : (
        <Slider {...newSettings} className={styles.container}>
          {(movies as ResponseTopMovieKPType[]).map((item, i) => (
            <Link
              href={`https://www.kinopoisk.ru/film/${item.id}`}
              key={item.id}
            >
              <PosterTopTen num={i + 1} key={`${item.id}`} film={item} />
            </Link>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default SliderTopTen;
