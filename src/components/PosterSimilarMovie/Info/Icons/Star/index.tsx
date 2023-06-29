import { FC, useState } from "react";
import styles from "./index.module.scss";
import { AiOutlineStar } from "react-icons/ai";
import { IconContext } from "react-icons";

const Star: FC = () => {
  return (
    <div className={styles.container}>
      <IconContext.Provider
        value={{
          className: `${styles.icon}`,
        }}
      >
        <div>
          {" "}
          <AiOutlineStar />
        </div>
      </IconContext.Provider>
      <div className={styles.description}>
        <span>Уже смотрел, оценить</span>
      </div>
    </div>
  );
};

export default Star;
