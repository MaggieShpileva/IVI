import { FC } from "react";
import styles from "./index.module.scss";

type Props = {
  type: string;
};

export const Loader: FC<Props> = ({ type }) => {
  return (
    <div className={[styles[type], styles.container].join(" ")}>
      <div className={styles.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
