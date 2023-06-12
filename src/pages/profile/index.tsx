import { useState, FC, useEffect } from "react";
import Head from "next/head";
import styles from "./index.module.scss";
import { Button } from "@/components/Button/Button";
import { useTranslation } from "next-export-i18n";
import { ButtonsProfile } from "@/components/ButtonsProfile";
import UserName from "./UserName";
import LogOut from "./LogOut";
import ProfileModal from "@/components/Modals/ProfileModal";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@/Redux/auth/selectors";
import { selectRegistrUser } from "@/Redux/registration/selectors";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const [emailUser, setEmailUser] = useState<string | null>();
  const [nicknameUser, setNicknameUser] = useState<string | null>();
  const resAuth = useSelector(selectAuthUser);
  const resRegistr = useSelector(selectRegistrUser);

  useEffect(() => {
    setEmailUser(localStorage.getItem("email"));
    setNicknameUser(localStorage.getItem("nickname"));
  }, []);

  useEffect(() => {
    setEmailUser(localStorage.getItem("email"));
    setNicknameUser(localStorage.getItem("nickname"));
  }, [resAuth, resRegistr]);

  const session = useSession();
  useEffect(() => {
    console.log(session.status);
    if (session.data?.user.name) {
      localStorage.setItem("session", session.data?.user.name);
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>Мой профиль</title>
      </Head>
      {!openModal ? (
        <div className={styles.profile}>
          {emailUser ? (
            <UserName
              name={nicknameUser ? nicknameUser : emailUser}
              email={emailUser}
            />
          ) : (
            <Button
              type="loginButton"
              color="pink"
              className={styles.loginBtn}
              onClick={() => setOpenModal(true)}
            >
              <div className="nbl-icon nbl-icon_avatar_16 nbl-button__nbl-icon"></div>
              {t("buttons.enter_register")}
            </Button>
          )}

          <ButtonsProfile />
          <LogOut />
        </div>
      ) : (
        <ProfileModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </>
  );
};

export default Profile;
