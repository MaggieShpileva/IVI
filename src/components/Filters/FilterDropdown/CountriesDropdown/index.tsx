import { FC } from "react";
import styles from "./index.module.scss";
import ListItem from "../ListItem";
import { BsCheckLg } from "react-icons/bs";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { Button } from "@/components/Button/Button";
import CountriesSlider from "../../CountriesSlider";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { selectMovies } from "@/Redux/movies/selectors";
import { setCountries } from "@/Redux/filter/actions";
import { selectFilters } from "@/Redux/filter/selectors";
import { useRouter } from "next/router";

const CountriesDropdown: FC = () => {
  const router = useRouter();
  const lang = router.asPath.includes("lang=en") ? "en" : "ru";
  const { countriesEn, countriesRu } = useAppSelector(selectMovies);
  const countries = lang === "en" ? countriesEn : countriesRu;
  const { countries: countriesFilter } = useAppSelector(selectFilters);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.countriesDropdown}>
      <div className={styles.sliderRow}>
        <CountriesSlider />
      </div>
      <ul className={styles.content}>
        {countries.map((item, i) => (
          <ListItem
            item={item.name}
            key={item.id}
            icon={BsCheckLg}
            onClick={() => dispatch(setCountries(item.name))}
            activeFilter={countriesFilter.includes(item.name)}
          />
        ))}
      </ul>
    </div>
  );
};

export default CountriesDropdown;
