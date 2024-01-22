import { FC, useState, Dispatch, SetStateAction, useEffect } from "react";
import styles from "./index.module.scss";
import { TfiClose } from "react-icons/tfi";
import FilterItem from "./FilterItem";
import RangeRating from "../RangeRating";
import RangeScore from "../RangeScore";
import { useTranslation } from "next-export-i18n";
import { getAllFilters } from "@/Redux/filters/actions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { selectMoviesWithFilters } from "@/Redux/moviesWithFilters/selectors";
import { selectFilters } from "@/Redux/filters/selectors";

type Props = {
  isFilter: boolean;
  setIsFilter: Dispatch<SetStateAction<boolean>>;
};

const Filters: FC<Props> = ({ isFilter, setIsFilter }) => {
  const { t } = useTranslation();
  const filtersTitle = [
    { title: "genres", value: t("contextSubMenu.genres") },
    { title: "countries", value: t("contextSubMenu.countries") },
    { title: "years", value: t("contextSubMenu.years") },
    { title: "producers", value: t("contextSubMenu.directors") },
    { title: "actors", value: t("contextSubMenu.actors") },
  ];

  const [isOpen, setIsOpen] = useState("");
  const put = useDispatch();
  const filters = useSelector(selectFilters);
  const moviesAfterFilters = useSelector(selectMoviesWithFilters);

  useEffect(() => {
    // console.log("filters-component", filters);
  }, [filters]);
  // const { ratingMin, ratingMax, scoreMin, scoreMax, isFilter } = useAppSelector(selectFilters);

  const [raiting, setRaiting] = useState(filters.score);
  const [score, setScore] = useState(filters.raiting);

  const handleClickSelect = () => {
    put(getAllFilters({ raiting, score }));

    setIsFilter(true);
  };

  const handleClickReset = () => {
    setIsFilter(false);
    // dispatch(resetFilters());
  };
  return (
    <div className={styles.filters}>
      <div className={styles.filtersRow}>
        {filtersTitle.map((item) => (
          <div key={item.title}>
            <FilterItem item={item} isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        ))}
      </div>
      <div className={styles.rangeRow}>
        <RangeRating raiting={raiting} setRaiting={setRaiting} />
        <RangeScore score={score} setScore={setScore} />
        {/* //выбрать фильтры */}
      </div>
      <Button
        onClick={handleClickSelect}
        color={"pink"}
        className={styles.selectBtn}
      >
        Выбрать
      </Button>
      <button
        className={`${styles.filtersBtn} ${
          isFilter && styles.filtersBtn_active
        }`}
        disabled={!isFilter}
        onClick={handleClickReset}
      >
        <TfiClose />
        {t("filters.reset_filters")}
      </button>
    </div>
  );
};

export default Filters;
