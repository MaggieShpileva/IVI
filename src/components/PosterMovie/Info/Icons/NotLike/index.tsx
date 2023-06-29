import { FC, useState } from "react";
import styles from "./index.module.scss";
import { TbCircleOff } from "react-icons/tb";
import { IconContext } from "react-icons";

const NotLike: FC = () => {
  return (
    <div className={styles.container}>
      <IconContext.Provider
        value={{
          className: `${styles.icon}`,
        }}
      >
        <div>
          {" "}
          <TbCircleOff />
        </div>
      </IconContext.Provider>
      <div className={styles.description}>
        <span>Не нравится такое</span>
      </div>
    </div>
  );
};

export default NotLike;
