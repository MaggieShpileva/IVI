import { Dispatch, FC, SetStateAction } from "react";
import styles from "./index.module.scss";
import { useTranslation } from "next-export-i18n";

type Props = {
  isOpenSubMenu?: boolean;
  setIsOpenSubMenu?: Dispatch<SetStateAction<boolean>>;
  setSubMenuTitle?: Dispatch<SetStateAction<string>>;
};

const WatchingButton: FC<Props> = (props) => {
  const { t } = useTranslation();

  return (
    <div
      onMouseEnter={() => {
        props.setIsOpenSubMenu?.(true);
        props.setSubMenuTitle?.("button");
      }}
    >
      <button className={styles.button_watch_for_free}>
        {t("buttons.watch_30_days")}
      </button>
    </div>
  );
};

export default WatchingButton;
