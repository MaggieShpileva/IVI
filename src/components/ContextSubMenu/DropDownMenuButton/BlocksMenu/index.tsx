import { FC } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { useTranslation } from "next-export-i18n";

export const BlocksMenu: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.blocks}>
      <div className={styles.news}>
        <div className="nbl-icon nbl-icon_films_16 nbl-paymentTile__nbl-icon"></div>
        <p className={styles.description}>{t("header.new")}</p>
      </div>
      <div className={styles.catalogs}>
        <div className="nbl-icon nbl-icon_catalogAdd_16 nbl-paymentTile__nbl-icon"></div>
        <p className={styles.description}>{t("header.catalog_description")}</p>
      </div>
      <div className={styles.movies}>
        <div className="nbl-icon nbl-icon_noAds_16 "></div>
        <p className={styles.description}>{t("header.without_ad")}</p>
      </div>
      <div className={styles.family_account}>
        <div className="nbl-icon nbl-icon_anyDev_16 nbl-paymentTile__nbl-icon"></div>
        <p className={styles.description}>{t("header.family_acconut")}</p>
      </div>
      <div className={styles.download}>
        <div className="nbl-icon nbl-icon_download_16 nbl-paymentTile__nbl-icon"></div>
        <p className={styles.description}>{t("header.download_to_mobile")}</p>
      </div>
    </div>
  );
};
