import React, { FC } from "react";
import styles from "./index.module.scss";
import Carousel from "./Carousel";

type Props = {
  title: string;
  elem: any;
  count: number;
};
const Catalog: FC<Props> = ({ title, elem, count }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      <Carousel elem={elem} count={count} />
    </div>
  );
};
export default Catalog;
