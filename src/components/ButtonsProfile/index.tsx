import Link from "next/link";
import { Button } from "@/components/Button/Button";
import styles from "./styles.module.scss";
import { FC } from "react";
import { TiPencil } from "react-icons/ti";
import { useTranslation } from "next-export-i18n";
import { IUser } from "@/types/types";
import { TbBellRinging, TbVectorTriangle } from "react-icons/tb";
import Image from "next/image";
import presentImage from "@/images/profileImages/present.png";
import settingsImage from "../../images/profileImages/settings.svg";
import paymentImage from "../../images/profileImages/payment.svg";
import favoriteImage from "../../images/profileImages/favorite.svg";
import historyImage from "../../images/profileImages/history.svg";
import codeImage from "../../images/profileImages/code.svg";
import supportImage from "../../images/profileImages/support.svg";
import cardImage from "../../images/profileImages/card.svg";

type Props = {};
export const ButtonsProfile: FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className={styles.topBtnRow}>
        <Link
          href={"https://www.ivi.ru/profile/subscriptions"}
          className={styles.subscribeBtn}
        >
          <Button color="purple" type="profileSertButton">
            <div>{t("profile.subscribes")}</div>
            <div>{t("profile.go_connection")}</div>
          </Button>
        </Link>
        <Link href={"https://www.ivi.ru/profile"} className={styles.sertBtn}>
          <Button color="purple" type="profileSertButton">
            <div>{t("profile.certificates")}</div>
            <div>{t("profile.activate")}</div>
          </Button>
        </Link>
        <Button
          color="purple"
          type="profileSertButton"
          className={styles.accountBtn}
        >
          <div>{t("profile.account")}</div>
          <div>0 ₽</div>
        </Button>
      </div>
      <div className={styles.subscribePresentBtn}>
        <Link href={"https://widget.mgc-loyalty.ru/iviru/landing"}>
          <Button type="profilePresentButton">
            <Image src={presentImage} alt="presentButton" priority></Image>
            <div>{t("profile.give_subscription")}</div>
          </Button>
        </Link>
      </div>
      <div className={styles.inviteBtnRow}>
        <Link href={"https://www.ivi.ru/profile/referral"}>
          <Button type="profileInviteButton" color="purple">
            <div>
              <TbVectorTriangle />
            </div>
            <div>{t("profile.invite")}</div>
          </Button>
        </Link>
        <Link href={"https://www.ivi.ru/profile/pull_notifications"}>
          <Button type="profileInviteButton" color="purple">
            <div>
              <TbBellRinging />
            </div>
            <div>{t("profile.notifications")}</div>
          </Button>
        </Link>
      </div>

      <div className={styles.bottomBtnRow}>
        <Link href={"https://www.ivi.ru/profile/purchases"}>
          <Button color="purple" type="profileMenuButton">
            <Image src={paymentImage} alt="payment"></Image>
            <div>{t("profile.purchases")}</div>
          </Button>
        </Link>
        <Link href={"https://www.ivi.ru/profile/favorites"}>
          <Button color="purple" type="profileMenuButton">
            <Image src={favoriteImage} alt="favorite"></Image>
            <div>{t("profile.watch_later")}</div>
          </Button>
        </Link>
        <Link href={"https://www.ivi.ru/profile/watched"}>
          <Button color="purple" type="profileMenuButton">
            <Image src={historyImage} alt="history"></Image>
            <div>{t("profile.views")}</div>
          </Button>
        </Link>
        <Link href={"https://www.ivi.ru/profile/cards"}>
          <Button color="purple" type="profileMenuButton">
            <Image src={cardImage} alt="card"></Image>
            <div>{t("profile.payment")}</div>
          </Button>
        </Link>
        <Link href={"https://www.ivi.ru/profile"}>
          <Button color="purple" type="profileMenuButton">
            <Image src={codeImage} alt="code"></Image>
            <div>{t("profile.login_by_code")}</div>
          </Button>
        </Link>
        <Link href={"https://www.ivi.ru/profile/settings"}>
          <Button color="purple" type="profileMenuButton">
            <Image src={settingsImage} alt="settings"></Image>
            <div>{t("profile.settings")}</div>
          </Button>
        </Link>
        <Link
          href={
            "https://ask.ivi.ru/?_gl=1*1gchsbl*_ga*MjcwMjg3NzUzLjE2ODM1MjkwODI.*_ga_GETQ4387MJ*MTY4MzY4OTYyMC4zLjEuMTY4MzcxMzk5OS4xMC4wLjA."
          }
        >
          <Button color="purple" type="profileMenuButton">
            <Image src={supportImage} alt="support"></Image>
            <div>{t("profile.help")}</div>
          </Button>
        </Link>
      </div>
    </div>
  );
};
