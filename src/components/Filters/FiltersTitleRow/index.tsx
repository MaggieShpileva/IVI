import { FC } from "react";
import styles from "./index.module.scss";
import { useAppSelector } from "@/hooks/hooks";
import { selectFilters } from "@/Redux/filter/selectors";
import { useTranslation } from "next-export-i18n";

const FiltersTitleRow: FC = () => {
  const filters = useAppSelector(selectFilters);
  const { t } = useTranslation();

  const createRow = (): string => {
    let row = "";
    if (filters.genres.length) {
      row += filters.genres.join(", ");
    } else {
      row += t("filters.all_year");
    }
    if (filters.countries.length) {
      row += " / " + filters.countries.join(", ");
    } else {
      row += `/ ${t("filters.all_countries")} `;
    }
    row += ` / ${filters.yearsMin} ${t("filters.year")}`;

    if (filters.yearsMin !== filters.yearsMax) {
      row += ` - ${filters.yearsMax} ${t("filters.year")}`;
    }

    row += ` / ${t("filters.rating_from")} ${filters.ratingMin} ${t("filters.to_rating")} ${
      filters.ratingMax
    }`;
    row += ` / ${t("filters.from_score")} ${filters.scoreMin}`;
    if (filters.scoreMax < 1000000) {
      row += ` ${t("filters.to_rating")} ${filters.scoreMax}`;
    }

    if (filters.directors.length) {
      row += " / " + filters.directors.join(", ");
    }

    if (filters.actors.length) {
      row += " / ";
      row += filters.actors.join(", ");
    }

    return row;
  };

  const row = createRow();

  return <div className={styles.filtersTitleRow}>{row}</div>;
};

export default FiltersTitleRow;
