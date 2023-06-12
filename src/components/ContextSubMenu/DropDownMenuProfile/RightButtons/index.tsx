import { FC, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { useTranslation } from "next-export-i18n";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@/Redux/auth/selectors";
import { selectRegistrUser } from "@/Redux/registration/selectors";

export const RightButtons: FC = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [locale, setLocale] = useState<any>("ru");
  useEffect(() => {
    if (router.query?.lang) {
      setLocale(router.query?.lang);
    } else {
      setLocale("ru");
    }
  }, [router]);
  const [emailUser, setEmailUser] = useState<string | null>();
  const [nicknameUser, setNicknameUser] = useState<string | null>();
  const resAuth = useSelector(selectAuthUser);
  const resRegistr = useSelector(selectRegistrUser);

  useEffect(() => {
    if (localStorage.getItem("email") === null) {
      localStorage.setItem("email", "");
      localStorage.setItem("nickname", "");
    } else {
      setEmailUser(localStorage.getItem("email"));
      setNicknameUser(localStorage.getItem("nickname"));
    }
  }, []);

  useEffect(() => {
    setEmailUser(localStorage.getItem("email"));
    setNicknameUser(localStorage.getItem("nickname"));
  }, [resAuth, resRegistr]);

  return (
    <div className={styles.right_buttons}>
      {emailUser !== "" ? (
        <div className={styles.user_data}>
          <h1>{nicknameUser !== "" ? nicknameUser : t("profile.user")}</h1>
          <h2> {emailUser}</h2>
        </div>
      ) : (
        <Link href={`/profile?lang=${locale}`}>
          <button className={styles.button_watch}>
            {t("buttons.enter_or_regist")}
          </button>
        </Link>
      )}
      <div className={styles.bottom_buttons}>
        <button className={styles.sub_button}>{t("profile.settings")}</button>
        <button className={styles.sub_button}>{t("profile.help")}</button>
      </div>
    </div>
  );
};
