import { MouseEventHandler, useState } from "react";
import Head from "next/head";
import styles from "./index.module.scss";
import { Button } from "@/components/Button/Button";
import { useTranslation } from "next-export-i18n";
import { ButtonsProfile } from "@/components/ButtonsProfile";
import UserName from "./UserName";
import LogOut from "./LogOut";
import ProfileModal from "@/components/Modals/ProfileModal";
import { signIn, useSession } from "next-auth/react";

const Profile = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const session = useSession();

  const handleClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();
    setOpenModal(true);
  };
  return (
    <>
      <Head>
        <title>Мой профиль</title>
      </Head>
      {!openModal ? (
        <div className={styles.profile}>
          {session.status == "authenticated" ? (
            <UserName
              name={session.data.user.name}
              email={session.data.user?.email}
            />
          ) : (
            <Button
              type="loginButton"
              color="pink"
              className={styles.loginBtn}
              onClick={handleClick}
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
