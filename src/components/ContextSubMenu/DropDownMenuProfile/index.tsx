import { FC } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { useTranslation } from "next-export-i18n";
import { BlocksMenu } from "./BlocksMenu";
import { RightButtons } from "./RightButtons";

export const DropDownMenuProfile: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <BlocksMenu />
        <RightButtons />
      </div>
    </div>
  );
};
