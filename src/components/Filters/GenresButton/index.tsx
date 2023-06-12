import { FC, MouseEventHandler } from "react";
import styles from "./index.module.scss";
import { Button } from "./../../Button/Button";

type Props = {
  size: "big" | "small";
  genres: string;
  id: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  iconClass: string;
};

const GenresButton: FC<Props> = ({ size, genres, id, onClick, iconClass }) => {
  const iconCssClass = `nbl-icon ${styles.icon} ${iconClass}`;

  return (
    <div className={styles.container}>
      <Button className={size === "big" ? styles.bigButton : styles.smallButton} onClick={onClick}>
        <div className={iconCssClass}></div>
        <div className={styles.text}>{genres}</div>
      </Button>
    </div>
  );
};

export default GenresButton;
