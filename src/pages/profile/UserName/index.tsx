import { useState, FC, useEffect } from "react";
import styles from "./index.module.scss";
import { Button } from "@/components/Button/Button";
import { useTranslation } from "next-export-i18n";
import { TiPencil } from "react-icons/ti";
import { GiSave } from "react-icons/gi";

type Props = {
  name: string | undefined;
  email: string | undefined;
};
const UserName: FC<Props> = (props) => {
  const { t } = useTranslation();
  const [currentTitle, setCurrentTitle] = useState(props.name);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setCurrentTitle(props.name);
  }, [props.name]);

  const handleTitleChange = (e: any) => {
    setCurrentTitle(e.target.value);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };
  return (
    <>
      {editMode ? (
        <div className={styles.loginRow}>
          <div className={styles.profile_data}>
            <input
              type="text"
              value={currentTitle}
              onChange={handleTitleChange}
            />
            <div className={styles.userEmail}>
              <div className="nbl-icon nbl-icon_email_16"></div>
              <div>{props.email}</div>
            </div>
          </div>

          <Button
            type="editLoginButton"
            color="purple"
            onClick={handleSaveClick}
          >
            <GiSave />
            {t("buttons.save")}
          </Button>
        </div>
      ) : (
        <div className={styles.loginRow}>
          <div className={styles.profile_data}>
            <div className={styles.userName}>{currentTitle}</div>
            <div className={styles.userEmail}>
              <div className="nbl-icon nbl-icon_email_16"></div>
              <div>{props.email}</div>
            </div>
          </div>
          <Button
            type="editLoginButton"
            color="purple"
            onClick={handleEditClick}
          >
            <TiPencil />
            {t("buttons.edit_profile")}
          </Button>
        </div>
      )}
    </>
  );
};
export default UserName;
