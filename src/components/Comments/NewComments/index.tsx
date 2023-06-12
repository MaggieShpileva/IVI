import dayjs from "dayjs";
import { useTranslation } from "next-export-i18n";
import { Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import styles from "./index.module.scss";

type Props = {
  newComment: string;
  setNewComment: Dispatch<SetStateAction<string>>;
};
export const NewComments: FC<Props> = ({ newComment, setNewComment }) => {
  const [comment, setComment] = useState("");
  const [isWarning, setIsWarning] = useState(false);
  const { t } = useTranslation();
  const addComment = () => {
    if (comment?.length === 0) {
      setIsWarning(true);
    } else {
      setNewComment(comment);
      setIsWarning(false);
      setComment("");
    }
  };

  return (
    <div className={styles.container}>
      <textarea
        placeholder={`${t("movie.enter_comment")}`}
        value={comment}
        onChange={(event) => {
          setComment(event.target.value);
        }}
      ></textarea>
      {isWarning && (
        <span className={styles.warning}>{t("movie.write_comment")}</span>
      )}
      <button onClick={addComment}>{t("buttons.add")}</button>
    </div>
  );
};
