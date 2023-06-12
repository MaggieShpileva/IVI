import { useState, FC, useEffect } from "react";
import styles from "./index.module.scss";
import { Button } from "@/components/Button/Button";
import { useTranslation } from "next-export-i18n";
import { useSession, signIn, signOut } from "next-auth/react";
import { MdOutlineLogout } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "@/Redux/auth/selectors";
import { put } from "redux-saga/effects";
import { clearDataUser } from "@/Redux/auth/actions";

const LogOut = () => {
  const { t } = useTranslation();
  const [emailUser, setEmailUser] = useState<string | null>();
  const put = useDispatch();

  useEffect(() => {
    setEmailUser(localStorage.getItem("email"));
  }, []);

  const handleClick = () => {
    signOut();
    put(clearDataUser());
    localStorage.setItem("email", "");
    localStorage.setItem("nickname", "");
    localStorage.setItem("idUser", "");
  };

  return (
    <>
      {emailUser !== "" && (
        <div className={styles.logOutRow}>
          <button>
            <FaExchangeAlt />
            <div>{t("buttons.change_password")}</div>
          </button>
          <button onClick={handleClick}>
            <MdOutlineLogout />
            <div>{t("buttons.logout")}</div>
          </button>
        </div>
      )}
    </>
  );
};

export default LogOut;
