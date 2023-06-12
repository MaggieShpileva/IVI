import { FC } from "react";
import styles from "./index.module.scss";
import Search from "@/components/Search";
import { useLanguageQuery, useTranslation } from "next-export-i18n";

const ActorsDropdown: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.actorsDropdown}>
      <Search placeholder={t("filters.actor")} className={styles.search} type="actors" />
    </div>
  );
};

export default ActorsDropdown;
