import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import styles from "../index.module.scss";
import Slider from "react-slick";
import Poster from "@/components/Poster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { settings } from "../settings";
import { ISimpleMovie, SimilarMovie } from "@/types/types";
import { Loader } from "@/components/Loader";
import { useRouter } from "next/router";

type Props = {
  title: string;
  films: ISimpleMovie[];
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};
const SimpleSlider: FC<Props> = ({ title, films, isLoading, setIsLoading }) => {
  const newSettings = {
    ...settings,
    slidesToShow: 7,
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
        <Link
          href={{
            pathname: "/movies",
            query: {
              filter: `${title}`,
              lang: `${router.query?.lang ? router.query?.lang : "ru"}`,
            },
          }}
        >
          <h4>{title}</h4>
        </Link>
        <div className="nbl-icon nbl-icon_arrowRight_6x16 nbl-blockHeader__nbl-icon"></div>
      </div>
      {!films ? (
        <Loader type={"loading_simple"} />
      ) : (
        <Slider {...newSettings} className={styles.container}>
          {films?.map((item, index) => (
            <Link
              href={`/film/${item.id}?lang=${locale}`}
              key={item.id}
              onClick={() => {
                setIsLoading(true);
              }}
            >
              <Poster film={item} />
            </Link>
          ))}
        </Slider>
      )}
      <></>
    </div>
  );
};

export default SimpleSlider;
