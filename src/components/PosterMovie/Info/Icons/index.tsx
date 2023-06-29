import { FC, useState } from "react";
import styles from "./index.module.scss";
import Mark from "./Mark";
import NotLike from "./NotLike";
import Similar from "./Similar";
import Star from "./Star";

const Icons: FC = () => {
  return (
    <div className={styles.icons}>
      <Mark />
      <Similar />
      <Star />
      <NotLike />
    </div>
  );
};

export default Icons;
