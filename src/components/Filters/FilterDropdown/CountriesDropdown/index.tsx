import { FC } from "react";
import styles from "./index.module.scss";
import ListItem from "../ListItem";
import { BsCheckLg } from "react-icons/bs";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { Button } from "@/components/Button/Button";
import CountriesSlider from "../../CountriesSlider";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useRouter } from "next/router";
import cointriesData from "../../../../data/new_data/countries.json";

const CountriesDropdown: FC = () => {
  console.log("cointriesData", cointriesData);
  const router = useRouter();
  const lang = router.asPath.includes("lang=en") ? "en" : "ru";
  // const { countriesEn, countriesRu } = useAppSelector(selectMovies);
  // const countries = lang === "en" ? countriesEn : countriesRu;
  // const { countries: countriesFilter } = useAppSelector(selectFilters);

  return (
    <div className={styles.countriesDropdown}>
      <div className={styles.sliderRow}>
        <CountriesSlider countries={cointriesData} />
      </div>
      <ul className={styles.content}>
        {cointriesData.map((item, i) => (
          <ListItem
            item={item.name}
            key={item.name}
            icon={BsCheckLg}
            // onClick={() => dispatch(setCountries(item.name))}
            // activeFilter={countriesFilter.includes(item.name)}
          />
        ))}
      </ul>
    </div>
  );
};

export default CountriesDropdown;
