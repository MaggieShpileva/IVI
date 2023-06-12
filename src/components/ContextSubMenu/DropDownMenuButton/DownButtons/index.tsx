import { FC } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { useTranslation } from "next-export-i18n";

export const DownButtons: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.down_buttons}>
      <button className={styles.button_watch}>
        {t("buttons.watch_30_days")}
      </button>
      <button className={styles.button_turn_off}>
        {t("buttons.turn_off")}
      </button>
    </div>
  );
};
