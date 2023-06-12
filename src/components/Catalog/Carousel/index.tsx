import React, { FC } from "react";
import styles from "./index.module.scss";
import Slider from "react-slick";
import Poster from "@/components/Poster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { settings } from "./settings";
type Props = {
  elem: any;
  count: number;
};
const Carousel: FC<Props> = ({ elem, count }) => {
  let c;
  switch (count) {
    case 1:
      c = 1;
      break;
    case 5:
      c = 5;
      break;
    case 10:
      c = 7;
      break;
  }
  const newSettings = {
    ...settings, // текущие настройки слайдера
    centerMode: count === 1 ? true : false, // дополнительные свойства
    slidesToShow: c,
  };

  return (
    <div>
      <Slider {...newSettings} className={styles.container}>
        {[...new Array(10)].map((_, i) => (
          <div key={i}>{elem}</div>
        ))}
      </Slider>
      <></>
    </div>
  );
};

export default Carousel;
