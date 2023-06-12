import { Dispatch, FC, SetStateAction } from "react";
import styles from "./index.module.scss";

import { useTranslation } from "next-export-i18n";

type Props = {
  isOpenSubMenu?: boolean;
  setIsOpenSubMenu?: Dispatch<SetStateAction<boolean>>;
  setSubMenuTitle?: Dispatch<SetStateAction<string>>;
};

const SearchButton: FC<Props> = (props) => {
  const { t } = useTranslation();
  return (
    <div
      className={styles.button_search}
      onMouseEnter={() => {
        props.setIsOpenSubMenu?.(false);
      }}
    >
      <div className={`nbl-icon nbl-icon_search_16 ${styles.icon}`}></div>
      <p>{t("buttons.search")}</p>
    </div>
  );
};

export default SearchButton;
