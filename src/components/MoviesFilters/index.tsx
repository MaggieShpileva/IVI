import { initialMovies } from "@/Redux/movies/worker";
import { MovieT } from "@/types/types";
import Filters from "../Filters";
import Sort from "../Sort";
import Suggestion from "../Suggestion";
import styles from "./index.module.scss";

export const MoviesFilters = () => {
  return (
    <div className={styles.container}>
      <Suggestion />
      <Filters />
    </div>
  );
};
