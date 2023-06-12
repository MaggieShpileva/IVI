import { FC, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { useTranslation } from "next-export-i18n";

export const BlocksMenu: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.blocks}>
      <div className={styles.block}>
        <div className="nbl-icon nbl-icon_multiseries_20 nbl-paymentTile__nbl-icon"></div>
        <p className={styles.description}>{t("profile.purchases")}</p>
      </div>
      <div className={styles.block}>
        <div className="nbl-icon nbl-icon_favoriteAdd_20 nbl-paymentTile__nbl-icon"></div>
        <p className={styles.description}>{t("profile.watch_later")}</p>
      </div>
      <div className={styles.block}>
        <div className="nbl-icon nbl-icon_history_20 nbl-paymentTile__nbl-icon"></div>
        <p className={styles.description}>{t("profile.browsing_history")}</p>
      </div>
      <div className={styles.block}>
        <div className="nbl-icon nbl-icon_quality_20 nbl-paymentTile__nbl-icon"></div>
        <p className={styles.description}>{t("profile.subscribes")}</p>
      </div>
      <div className={styles.block}>
        <div className="nbl-icon nbl-icon_download_16 nbl-paymentTile__nbl-icon"></div>
        <p className={styles.description}>
          {t("profile.certificate_activation")}
        </p>
      </div>
      <div className={styles.block}>
        <div className="nbl-icon nbl-icon_tvchannels_20 nbl-paymentTile__nbl-icon"></div>
        <p className={styles.description}>{t("profile.entrance_by_code")}</p>
      </div>
      <div className={styles.block}>
        <div className="nbl-icon nbl-icon_card_20 nbl-paymentTile__nbl-icon"></div>
        <p className={styles.description}>{t("profile.payment")}</p>
      </div>
    </div>
  );
};
