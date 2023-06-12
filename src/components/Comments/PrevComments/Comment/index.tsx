import { Button } from "@/components/Button/Button";
import { Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import { Vote } from "./Vote";
import styles from "./index.module.scss";
import { useTranslation } from "next-export-i18n";

type commentsT = {
  id: string | undefined;
  name: string;
  comment: string;
  date: string;
  children?: any;
};
type dataCommentsT = commentsT[];

type Props = {
  comment: commentsT;
  idComment?: string;
  setIdComment: Dispatch<SetStateAction<string | undefined>>;
};
export const Comment: FC<Props> = ({ comment, idComment, setIdComment }) => {
  const { t } = useTranslation();
  const handleClick = () => {
    setIdComment(idComment);
  };

  return (
    <div>
      <div className={styles.comment}>
        <h5 className={styles.name}>{comment.name}</h5>
        <p className={styles.comment_text}>{comment.comment}</p>
        <p className={styles.date}>{comment.date}</p>
        <div className={styles.buttons}>
          <Button
            width={"150px"}
            className={styles.comment_button}
            onClick={() => {
              handleClick();
            }}
          >
            <p>{t("buttons.comment")}</p>
          </Button>
          <Vote />
        </div>
      </div>
    </div>
  );
};
