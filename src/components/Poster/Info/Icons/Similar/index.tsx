import { FC, useState } from "react";
import styles from "./index.module.scss";
import { BsMagic } from "react-icons/bs";
import { IconContext } from "react-icons";
import { BsBookmarkFill } from "react-icons/bs";

const Similar: FC = () => {
  return (
    <div className={styles.container}>
      <IconContext.Provider
        value={{
          className: `${styles.icon}`,
        }}
      >
        <div>
          {" "}
          <BsMagic />
        </div>
      </IconContext.Provider>
      <div className={styles.description}>
        <span>Похожее</span>
      </div>
    </div>
  );
};

export default Similar;
