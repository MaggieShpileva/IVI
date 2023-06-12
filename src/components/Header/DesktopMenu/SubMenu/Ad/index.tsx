import { FC, useState } from "react";
import Slider from "react-slick";
import styles from "./index.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings1, settings2, settings3 } from "./settings";
import Image from "next/image";
import icon from "../../../../../images/icons/logo.svg";
import img from "../../../../../images/banner__foto.jpeg";
import poster1 from "@/images/ad/ad_poster_1.jpeg";
import poster2 from "@/images/ad/ad_poster_2.jpeg";
import poster3 from "@/images/ad/ad_poster_3.jpeg";
import poster4 from "@/images/ad/ad_poster_4.jpeg";

const posters = [poster1, poster2, poster3, poster4];

type Props = {
  type: string;
};

const Ad: FC<Props> = ({ type }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const renderSlides = () => {
    return posters.map((poster, index) => {
      return (
        <div key={index} className={styles.slide}>
          <Image src={poster} alt={`Poster ${index}`}></Image>
        </div>
      );
    });
  };

  return (
    <div className={styles[type]}>
      <div className={styles.sliders}>
        <div className={styles.container_slider}>
          <Slider {...settings1} className={styles.no_active}>
            {renderSlides()}
          </Slider>
          <Slider {...settings2}>{renderSlides()}</Slider>
          <Slider {...settings3} className={styles.no_active}>
            {renderSlides()}{" "}
          </Slider>
        </div>
      </div>
      <div className={styles.offer}>
        <Image
          src={icon}
          alt=""
          width={300}
          height={300}
          className={styles.logo}
        ></Image>
        <div className={styles.title}>
          <h4>Подписка Иви</h4>
          <p> от 3,58$ за месяц </p>
        </div>
      </div>
    </div>
  );
};

export default Ad;
