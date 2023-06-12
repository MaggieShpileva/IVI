import { Button } from "@/components/Button/Button";
import { FC, useEffect, useState } from "react";
import { TiPencil } from "react-icons/ti";
import { GiSave } from "react-icons/gi";
import styles from "./index.module.scss";

type Props = {
  title: string | undefined;
};
export const EditTitle: FC<Props> = ({ title }) => {
  const [currentTitle, setCurrentTitle] = useState(title);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setCurrentTitle(title);
  }, [title]);

  const handleTitleChange = (e: any) => {
    setCurrentTitle(e.target.value);
  };

  const handleEditClick = () => {
    setEditMode(true);
    // console.log(currentTitle);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };

  return (
    <div className={styles.container}>
      {editMode ? (
        <div className={styles.edit}>
          <input
            type="text"
            value={currentTitle}
            onChange={handleTitleChange}
          />
          <Button
            color="purple"
            onClick={handleSaveClick}
            className={styles.button}
          >
            <GiSave />
          </Button>
        </div>
      ) : (
        <div className={styles.result}>
          <h1>{currentTitle}</h1>
          <Button
            color="purple"
            onClick={handleEditClick}
            className={styles.button}
          >
            <TiPencil />
          </Button>
        </div>
      )}
    </div>
  );
};
