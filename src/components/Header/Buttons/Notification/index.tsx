import { Dispatch, FC, SetStateAction } from "react";
import styles from "./index.module.scss";

type Props = {
  isOpenSubMenu?: boolean;
  setIsOpenSubMenu?: Dispatch<SetStateAction<boolean>>;
};

const NotificationButton: FC<Props> = (props) => {
  return (
    <div
      className={styles.button_notification}
      onMouseEnter={() => {
        props.setIsOpenSubMenu?.(false);
      }}
    >
      <div className="nbl-icon nbl-icon_pull_16 nbl-simpleControlButton__nbl-icon"></div>
    </div>
  );
};

export default NotificationButton;
