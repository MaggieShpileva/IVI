import { FC, Dispatch, SetStateAction, useRef, useState } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { t } from "i18next";
import { useTranslation } from "next-export-i18n";

const CompanyPolicy: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.continue_policy}>
      <div>{t("profile.clicking")}</div>
      <div>
        с{" "}
        <Link href={"https://www.ivi.ru/info/confidential"}>
          {t("profile.to_policy")}
        </Link>
      </div>
      <div>
        и{" "}
        <Link href={"https://www.ivi.ru/info/agreement"}>
          {t("profile.user_agreement")}
        </Link>
      </div>
    </div>
  );
};

export default CompanyPolicy;
