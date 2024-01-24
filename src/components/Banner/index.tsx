import React, { FC } from "react";
import styles from "./index.module.scss";
import Slider from "react-slick";
import Image from "next/image";
import { settings } from "./settings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Movie = {
  id: number;
  poster: string;

  name: string;
};
type Props = {
  posters: Movie[];
};
const Banner: FC<Props> = ({ posters }) => {
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {posters?.map((item, index) => {
          return (
            <div key={`${item}-${index}`} className={styles.slide}>
              <Image
                src={item.poster}
                className={styles.slide_img}
                alt={item.name}
                fill
                priority
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Banner;
