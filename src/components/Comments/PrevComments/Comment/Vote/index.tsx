import { Button } from "@/components/Button/Button";
import { FC, ReactNode, useState } from "react";
import styles from "./index.module.scss";
type commentsT = { name: string; comment: string; date: string };
type dataCommentsT = commentsT[];

type Props = {};
export const Vote: FC<Props> = ({}) => {
  const [voteUp, setVoteUp] = useState(false);
  const [voteDown, setVoteDown] = useState(false);

  const handleClickDown = () => {
    setVoteDown(!voteDown);
    setVoteUp(false);
  };

  const handleClickUp = () => {
    setVoteUp(!voteUp);
    setVoteDown(false);
  };

  return (
    <div className={styles.vote}>
      <Button
        className={
          voteUp ? styles.button_up_active : styles.button_up_not_active
        }
        onClick={handleClickUp}
      >
        <div className="nbl-icon nbl-icon_thumbUp_16 vote__nbl-icon"></div>
      </Button>
      <Button
        className={
          voteDown ? styles.button_down_active : styles.button_down_not_active
        }
        onClick={handleClickDown}
      >
        <div className="nbl-icon nbl-icon_thumbDown_16 vote__nbl-icon"></div>
      </Button>
    </div>
  );
};
