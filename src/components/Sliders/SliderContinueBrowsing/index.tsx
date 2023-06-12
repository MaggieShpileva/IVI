import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import styles from "../index.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import CardMovie from "@/components/CardMovie";
import { settings } from "./settings";
import { useSelector } from "react-redux";
import { selectBrowsingMovie } from "@/Redux/continue_browsing/selectors";
import { store } from "@/Redux/store";
import { BrowsingMovie } from "@/Redux/continue_browsing/reducer";
import { useRouter } from "next/router";

type Props = {
  title: string;
  type: string;
  movies: BrowsingMovie[];
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const SliderContinueBrowsing: FC<Props> = ({
  title,
  type,
  movies,
  isLoading,
  setIsLoading,
}) => {
  const newSettings = {
    ...settings,
    centerMode: false,
    slidesToShow: 3,
  };
  const router = useRouter();
  const [locale, setLocale] = useState<any>("ru");

  useEffect(() => {
    if (router.query?.lang) {
      setLocale(router.query?.lang);
    } else {
      setLocale("ru");
    }
  }, [router]);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4>{title}</h4>
      </div>
      <Slider {...newSettings} className={styles.container_slider}>
        {movies.map((item, index) => (
          <Link
            href={`/film/${item.id}?lang=${locale}`}
            key={`${item}-${index}`}
            onClick={() => {
              setIsLoading(true);
            }}
          >
            <CardMovie
              title={item.name}
              type={type}
              text={item.description}
              img={item.poster}
            />
          </Link>
        ))}
      </Slider>
      <></>
    </div>
  );
};

export default SliderContinueBrowsing;
