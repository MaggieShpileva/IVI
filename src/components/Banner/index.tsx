import React, { FC } from "react";
import styles from "./index.module.scss";
import Slider from "react-slick";
import Image from "next/image";
import bannerImg from "../../images/banner__foto.jpeg";
import { settings } from "./settings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import helmet from "helmet";
import { NextApiHandler } from "next";

type Movie = {
  id: number;
  poster: string;
  logo: string;
  trailer: string;
  name: string;
};
type Props = {
  movies: Movie[];
};
const Banner: FC<Props> = ({ movies }) => {
  const renderSlides = () => {
    return movies?.map((item, index) => {
      return (
        <div key={`${item}-${index}`} className={styles.slide}>
          <iframe
            className={styles.slide_img}
            src={`${item.trailer}?controls=0&autoplay=1&disablekb=1&fs=0&loop=1&modestbranding=1&iv_load_policy=3&mute=1`}
            title={`${item.id}`}
            frameBorder="0"
            width="720"
            height="405"
            allowFullScreen
            allow="autoplay; encrypted-media;"
            loading="lazy"
          ></iframe>

          <div
            className={styles.bg}
            onClick={() => {
              // console.log(item.id);
            }}
          ></div>
          <div className={styles.logo}>
            <Image
              src={item.logo}
              alt=""
              width={520}
              height={200}
              priority={index === item.id}
            ></Image>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>{renderSlides()}</Slider>
    </div>
  );
};
export default Banner;
