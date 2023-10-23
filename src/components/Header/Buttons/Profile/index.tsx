import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NotAuthProfile } from "./NotAuthProfile";

type Props = {
  isOpenSubMenu?: boolean;
  setIsOpenSubMenu?: Dispatch<SetStateAction<boolean>>;
  setSubMenuTitle?: Dispatch<SetStateAction<string>>;
};

const ProfileButton: FC<Props> = (props) => {
  const router = useRouter();
  const [locale, setLocale] = useState<any>("ru");

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
      <NotAuthProfile />
    </div>
  );
};

export default ProfileButton;
