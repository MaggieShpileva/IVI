import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { AuthProfile } from "./AuthProfile";
import { NotAuthProfile } from "./NotAuthProfile";
import Link from "next/link";
import { getDataUser } from "@/profileRequests/AuthService";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@/Redux/auth/selectors";
import { selectRegistrUser } from "@/Redux/registration/selectors";

type Props = {
  isOpenSubMenu?: boolean;
  setIsOpenSubMenu?: Dispatch<SetStateAction<boolean>>;
  setSubMenuTitle?: Dispatch<SetStateAction<string>>;
};

const ProfileButton: FC<Props> = (props) => {
  const router = useRouter();

  const [locale, setLocale] = useState<any>("ru");
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

  useEffect(() => {
    if (router.query?.lang) {
      setLocale(router.query?.lang);
    } else {
      setLocale("ru");
    }
  }, [router]);

  const handleClick = () => {
    router.push({ pathname: "/profile", query: { lang: locale } });
  };

  return (
    <div
      onClick={() => {
        handleClick();
      }}
      onMouseEnter={() => {
        props.setIsOpenSubMenu?.(true);
        props.setSubMenuTitle?.("profile");
      }}
    >
      {emailUser ? (
        <AuthProfile name={nicknameUser ? nicknameUser : emailUser} />
      ) : (
        <NotAuthProfile />
      )}
    </div>
  );
};

export default ProfileButton;
