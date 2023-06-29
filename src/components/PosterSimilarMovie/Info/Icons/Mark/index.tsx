import { FC, useState } from "react";
import styles from "./index.module.scss";
import { FaRegBookmark } from "react-icons/fa";
import { IconContext } from "react-icons";
import { BsBookmarkFill } from "react-icons/bs";

const Mark: FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div onClick={() => setIsActive(!isActive)} className={styles.container}>
      <IconContext.Provider
        value={{
          className: `${styles.icon}`,
        }}
      >
        <div>
          {isActive ? <BsBookmarkFill color="#d9d7e0" /> : <FaRegBookmark />}
        </div>
      </IconContext.Provider>
      <div className={styles.description}>
        <span>Смотреть позже</span>
      </div>
    </div>
  );
};

export default Mark;
