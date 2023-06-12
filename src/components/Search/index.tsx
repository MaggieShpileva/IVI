import { FC, useState, useEffect } from "react";
import styles from "./index.module.scss";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { useAppSelector } from "@/hooks/hooks";
import { IPerson, PersonForSearchType } from "@/types/types";
import { selectMovies } from "@/Redux/movies/selectors";

type Props = {
  className?: string;
  placeholder?: string;
  type: string;
};

const Search: FC<Props> = ({ className, placeholder, type }) => {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState<PersonForSearchType[]>([]);

  const { actors, directors } = useAppSelector(selectMovies);
  const persons = type == "actors" ? actors : directors;

  useEffect(() => {
    const findPersons = persons.filter(
      (item) =>
        item.personLang[0].personName &&
        item.personLang[0].personName.toLowerCase().includes(searchValue.toLowerCase()),
    );

    if (searchValue.trim() && findPersons.length) {
      setResults((state) => findPersons);
    } else {
      setResults([]);
    }
  }, [searchValue]);

  return (
    <div className={className}>
      <SearchInput
        placeholder={placeholder}
        className={styles.search}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <SearchResults
        placeholder={placeholder}
        className={styles.search}
        results={results}
        type={type}
      />
    </div>
  );
};

export default Search;
