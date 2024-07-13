import { FC, useState, useEffect, Dispatch, SetStateAction } from "react";
import styles from "./index.module.scss";
import Poster from "../Poster";
import Link from "next/link";
import { MovieKinopoiskT } from "@/types/types";
import { useTranslation } from "next-export-i18n";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectFilters } from "@/Redux/filters/selectors";

type Props = {
  data: MovieKinopoiskT[];
};

const MovieResults: FC<Props> = ({ data }) => {
  const [locale, setLocale] = useState<any>("ru");
  const router = useRouter();

  useEffect(() => {
    if (router.query?.lang) {
      setLocale(router.query?.lang);
    } else {
      setLocale("ru");
    }
  }, [router]);
  return (
    <div className={styles.results}>
      <div className={styles.results__list}>
        {Array.isArray(data) &&
          data?.map((item, i) => (
            <Link
              href={`/film/${item.id}?lang=${
                router.asPath.includes("lang=en") ? "en" : "ru"
              }`}
              key={`${item.id}`}
            >
              <Poster film={item} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MovieResults;
