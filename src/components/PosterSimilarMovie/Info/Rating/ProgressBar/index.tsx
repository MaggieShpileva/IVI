import { FC, useState } from "react";
import styles from "./index.module.scss";

type Props = {
  progress: number;
  style: string;
};
const ProgressBar: FC<Props> = ({ progress, style }) => {
  return (
    <div
      className={
        style === "small" ? styles.container_small : styles.container_big
      }
    >
      <div style={{ width: `${progress}%` }} className={styles.bar}></div>
    </div>
  );
};

export default ProgressBar;
