import { FC } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { Button } from "../Button/Button";
import { FaLinkedinIn, FaOdnoklassniki, FaTelegramPlane, FaTwitter, FaVk } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";

type Props = {
  className?: string;
};

const Socials: FC<Props> = ({ className }) => {
  return (
    <div className={[styles.socials, className].join(" ")}>
      <Link href={"https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e"}>
        <Button type="socialButton" color="purple">
          <FaVk />
        </Button>
      </Link>
      <Link href={"https://ok.ru/ivi.ru"}>
        <Button type="socialButton" color="purple">
          <FaOdnoklassniki />
        </Button>
      </Link>
      <Link href={"https://twitter.com/ivi_ru"}>
        <Button type="socialButton" color="purple">
          <FaTwitter />
        </Button>
      </Link>
      <Link
        href={
          "https://invite.viber.com/?g2=AQAN5HwJ109AW0tMEtqcQ1MwRvpATF2umOpstVEvZ4phfQicwxYucW5izsa0J5qi&lang=ru"
        }
      >
        <Button type="socialButton" color="purple">
          <MdWifiCalling3 />
        </Button>
      </Link>
      <Link href={"https://www.linkedin.com/company/2543415/"}>
        <Button type="socialButton" color="purple">
          <FaLinkedinIn />
        </Button>
      </Link>
      <Link href={"https://t.me/official_iviru"}>
        <Button type="socialButton" color="purple">
          <FaTelegramPlane />
        </Button>
      </Link>
    </div>
  );
};

export default Socials;
