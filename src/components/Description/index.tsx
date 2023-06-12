import { FC, useState, ReactNode } from "react";
import styles from "./index.module.scss";
import { Button } from "../Button/Button";
import { useLanguageQuery, useTranslation } from "next-export-i18n";

type Props = {
  truncText: ReactNode | ReactNode[];
  fullText?: ReactNode | ReactNode[] | null;
  className?: string;
};

const Description: FC<Props> = ({ truncText, fullText, className }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={[styles.description, className].join(" ")}>
      {isOpen ? fullText : truncText}
      <Button className={styles.button} onClick={() => setIsOpen((state) => !state)}>
        {isOpen ? t("buttons.collapse") : t("buttons.expand")}
      </Button>
    </div>
  );
};

export default Description;
