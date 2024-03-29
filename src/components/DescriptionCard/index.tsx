import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Button } from "../Button/Button";
import {
  CountriesType,
  FilmLangType,
  GenresType,
  MovieKinopoiskT,
} from "@/types/types";
import { useRouter } from "next/router";
import { useTranslation } from "next-export-i18n";
import { EditTitle } from "./EditTitle";
import { useSession } from "next-auth/react";

type Props = {
  movie: MovieKinopoiskT;
  className: string;
};

export const DescriptionCard: FC<Props> = ({ movie, className }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const { t } = useTranslation();
  const [title, setTitle] = useState<string>();

  useEffect(() => {
    if (router.asPath.includes("?lang=en")) {
      setTitle(movie.alternativeName);
    } else {
      setTitle(movie.name);
    }
  }, [router]);

  useEffect(() => {
    const user = localStorage.getItem("idUser")
      ? localStorage.getItem("idUser")
      : null;

    if (user !== null && user == "1") {
      setIsAdmin(true);
    }
  }, []);
  return (
    <div className={[styles.container, className].join(" ")}>
      {isAdmin ? <EditTitle title={title} /> : <h1>{title}</h1>}

      <h1>{t("movie.watch_online")}</h1>
      <div className={styles.data}>
        <div className={styles.row_time}>
          <span>{movie.year} г.</span>
          <span>{movie.movieLength} мин.</span>
          <span>{movie.ageRating}+</span>
        </div>

        <div className={styles.row_theme}>
          {movie.countries?.map((item, index) => {
            return <span key={`${item.name}-${index}`}> {item.name}</span>;
          })}
          {movie.genres?.slice(0, 2).map((item, index) => {
            return (
              <div className={styles.genres} key={`${item.name}-${index}`}>
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>

        <div className={styles.row_buttons}>
          <div>
            <Button color={"darkbluegrey"} className={styles.button_full_hd}>
              FullHD
            </Button>
          </div>
          {movie.spokenLanguages?.map((item, index) => {
            return (
              <div className={styles.watch_params} key={`${index}`}>
                <div className="nbl-icon nbl-icon_player_volumeMidRegular_16 watchParams__nbl-icon"></div>
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
