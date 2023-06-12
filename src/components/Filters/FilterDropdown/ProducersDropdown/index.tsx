import { FC } from "react";
import styles from "./index.module.scss";
import Search from "@/components/Search";
import { useLanguageQuery, useTranslation } from "next-export-i18n";

const ProducersDropdown: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.producersDropdown}>
      <Search placeholder={t("filters.director")} className={styles.search} type="directors" />
    </div>
  );
};

export default ProducersDropdown;
