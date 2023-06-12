import { Dispatch, FC } from "react";
import styles from "./index.module.scss";

type Props = {
  trailer: string;
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<React.SetStateAction<boolean>>;
};
export const TrailerModal: FC<Props> = (props) => {
  const handleClick = () => {
    props.setIsOpenModal(false);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.modal}>
        <iframe src={props.trailer} frameBorder="0"></iframe>
      </div>
    </div>
  );
};
