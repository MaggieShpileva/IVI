import { FC } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { useTranslation } from "next-export-i18n";

export const DropDownTitle: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.title}>
      <h3> {t("header.subscription")}</h3>
      <p> {t("header.subtitle_cost")}</p>
    </div>
  );
};
