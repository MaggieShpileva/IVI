//@ts-nocheck
import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { LanguageSwitcher } from "next-export-i18n";

type Props = {
  isOpenSubMenu?: boolean;
  setIsOpenSubMenu?: Dispatch<SetStateAction<boolean>>;
  setSubMenuTitle?: Dispatch<SetStateAction<string>>;
};

const LanguageButton: FC<Props> = (props) => {
  return (
    <div
      className={styles.buttons_lang}
      onMouseEnter={() => {
        props.setIsOpenSubMenu(false);
      }}
    >
      <LanguageSwitcher lang="en">en</LanguageSwitcher> |{" "}
      <LanguageSwitcher lang="ru">ru</LanguageSwitcher>
    </div>
  );
};

export default LanguageButton;
