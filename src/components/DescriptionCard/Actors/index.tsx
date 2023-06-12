import { FC } from "react";
import styles from "./index.module.scss";

type Props = {
  img: string;
  name: string;
};
export const Actor: FC<Props> = (props) => {
  return (
    <div className={styles.actor_cart}>
      <div className={styles.image}>
        <img src={props.img} alt="" />
      </div>
      <div className={styles.name}>
        <p>{props.name}</p>
      </div>
    </div>
  );
};
