import { FC } from "react";
import styles from "./index.module.scss";
import { useTranslation } from "next-export-i18n";

const ErrorPage: FC = () => {
  const { t } = useTranslation();

  return <h1 className={styles.errorPage}>{t("error.error")}</h1>;
};

export default ErrorPage;
