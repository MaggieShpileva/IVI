import { FC, ReactNode } from "react";
import styles from "./index.module.scss";
import GenresDropdown from "./GenresDropdown";
import CountriesDropdown from "./CountriesDropdown";
import YearsDropdown from "./YearsDropdown";
import ProducersDropdown from "./ProducersDropdown";
import ActorsDropdown from "./ActorsDropdown";

type Props = {
  children?: ReactNode | ReactNode[];
  filter: string;
};

const FilterDropdown: FC<Props> = ({ children, filter }) => {
  return (
    <>
      {filter === "genres" && <GenresDropdown />}
      {filter === "countries" && <CountriesDropdown />}
      {filter === "years" && <YearsDropdown />}
      {filter === "producers" && <ProducersDropdown />}
      {filter === "actors" && <ActorsDropdown />}
    </>
  );
};

export default FilterDropdown;
