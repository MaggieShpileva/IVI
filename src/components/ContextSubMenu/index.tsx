import { FC, ReactNode } from "react";
import Link from "next/link";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import styles from "./index.module.scss";
import { RiH2 } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { selectMovies } from "@/Redux/movies/selectors";
import { setGenres, setYears, setCountries } from "@/Redux/filter/actions";
import { useRouter } from "next/router";
import { Loader } from "../Loader";

type ContextSubProps = {
  children?: ReactNode | ReactNode[];
  className?: string;
  title?: string;
};

export const ContextSubMenu: FC<ContextSubProps> = ({
  children,
  className,
  title,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { genresRu, genresEn, countriesRu, countriesEn } =
    useAppSelector(selectMovies);
  const lang = router.asPath.includes("lang=en") ? "en" : "ru";
  const genres = lang === "en" ? genresEn : genresRu;
  const countries = lang === "en" ? countriesEn : countriesRu;
  const dispatch = useAppDispatch();

  return (
    <div className={[styles.submenu, className].join(" ")}>
      {title && <h2>{title}</h2>}
      <div className={styles.content}>
        <div>
          <h3>{t("contextSubMenu.genres")}</h3>
          {genres === undefined ? (
            <Loader type="loading_genres" />
          ) : (
            <ul>
              {genres?.map((item, index) => (
                <li
                  key={item.id}
                  onClick={() => dispatch(setGenres(item.name))}
                >
                  <Link href={`/movies?lang=${lang}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h3>{t("contextSubMenu.countries")}</h3>
          <ul>
            <li key={0} onClick={() => dispatch(setCountries("Россия"))}>
              <Link href={`/movies?lang=${lang}`}>
                {t("contextSubMenu.countries_russian")}
              </Link>
            </li>
            <li key={1} onClick={() => dispatch(setCountries("США"))}>
              <Link href={`/movies?lang=${lang}`}>
                {t("contextSubMenu.countries_usa")}
              </Link>
            </li>
            <li key={2} onClick={() => dispatch(setCountries("СССР"))}>
              <Link href={`/movies?lang=${lang}`}>
                {t("contextSubMenu.countries_ussr")}
              </Link>
            </li>
          </ul>
          <h3>{t("contextSubMenu.years")}</h3>
          <ul>
            <li key={0} onClick={() => dispatch(setYears([2010, 2023]))}>
              <Link href={`/movies?lang=${lang}`}>
                {t("header.movies")} 2010 - 2023
              </Link>
            </li>
            <li key={1} onClick={() => dispatch(setYears([2000, 2010]))}>
              <Link href={`/movies?lang=${lang}`}>
                {t("header.movies")} 2000 - 2010
              </Link>
            </li>
            <li key={2} onClick={() => dispatch(setYears([1990, 2000]))}>
              <Link href={`/movies?lang=${lang}`}>
                {t("header.movies")} 1990 - 2000
              </Link>
            </li>
            <li key={3} onClick={() => dispatch(setYears([1940, 1990]))}>
              <Link href={`/movies?lang=${lang}`}>
                {t("filters.before_year")} 1990
              </Link>
            </li>
          </ul>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
