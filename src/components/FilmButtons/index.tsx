import { DetailedHTMLProps, Dispatch, FC, useState } from "react";
import styles from "./index.module.scss";
import { Button } from "../Button/Button";
import { useTranslation } from "next-export-i18n";

type Props = {
  filmLink: string;
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<React.SetStateAction<boolean>>;
};

export const FilmButtons: FC<Props> = (props) => {
  const { t } = useTranslation();

  const handleClick = () => {
    props.setIsOpenModal(true);
  };

  return (
    <div className={styles.bottom_buttons}>
      <div className={styles.left_side}>
        <Button
          color={"darkbluegrey"}
          className={styles.trailer}
          onClick={() => {
            handleClick();
          }}
        >
          <div className="nbl-icon nbl-icon_playOutline_20 nbl-button__nbl-icon"></div>
          {t("buttons.trailer")}
        </Button>

        <Button color={"darkbluegrey"} className={styles.favorite}>
          <div className="nbl-icon nbl-icon_favoriteAdd_20 nbl-button__nbl-icon"></div>
        </Button>

        <Button color={"darkbluegrey"} className={styles.share}>
          <div className="nbl-icon nbl-icon_share_20 nbl-button__nbl-icon"></div>
        </Button>
      </div>

      <Button color={"darkbluegrey"} className={styles.free_movies}>
        <div className="nbl-icon nbl-icon_catalog_16 nbl-button__nbl-icon"></div>
        <p>{t("buttons.free_movies")}</p>
      </Button>
    </div>
  );
};

export default FilmButtons;
