import { FC } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { useTranslation } from "next-export-i18n";
import { BlocksMenu } from "./BlocksMenu";
import { DownButtons } from "./DownButtons";
import { DropDownTitle } from "./DropDownTitle";
import Ad from "@/components/Header/DesktopMenu/SubMenu/Ad";

export const DropDownMenuButton: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <DropDownTitle />
        <BlocksMenu />
        <DownButtons />
      </div>
      <Ad type={"ad_big"} />
    </div>
  );
};
