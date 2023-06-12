import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { IconContext } from "react-icons";
import { RiUser3Line } from "react-icons/ri";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Link from "next/link";

export const NotAuthProfile: FC = () => {
  const router = useRouter();
  const [locale, setLocale] = useState<any>("ru");

  useEffect(() => {
    if (router.query?.lang) {
      setLocale(router.query?.lang);
    } else {
      setLocale("ru");
    }
  }, [router]);

  return (
    <Link href={`/profile?lang=${locale}`}>
      <div className={styles.button_profile}>
        <IconContext.Provider
          value={{
            className: `${styles.profile_icon}`,
          }}
        >
          <div>
            <RiUser3Line />
          </div>
        </IconContext.Provider>
      </div>
    </Link>
  );
};
