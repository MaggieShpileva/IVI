import { useState, FC, useEffect } from "react";
import styles from "./index.module.scss";
import { Button } from "@/components/Button/Button";
import { useTranslation } from "next-export-i18n";
import { useSession, signIn, signOut } from "next-auth/react";
import { MdOutlineLogout } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";

const LogOut = () => {
  const { t } = useTranslation();
  const session = useSession();

  const handleClick = () => {
    signOut({ callbackUrl: "/profile", redirect: false });
  };
  return (
    <>
      {session.status == "authenticated" && (
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
