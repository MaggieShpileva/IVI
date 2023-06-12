import { FC } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@/components/Button/Button";
import { PersonFilmsType } from "@/types/types";
import { useLanguageQuery, useTranslation } from "next-export-i18n";

type Props = {
  film: PersonFilmsType;
};

const PhilmographyItem: FC<Props> = ({ film }) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Link href={`/film/${film.id}?lang=${router.asPath.includes("lang=en") ? "en" : "ru"}`}>
      <div className={styles.philmographyItem}>
        <div color="purple" className={styles.philmographyItem__imgContainer}>
          <Image
            src={film.poster || "/"}
            alt="film poster"
            className={styles.img}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          ></Image>
        </div>
        <div className={styles.philmographyItem__body}>
          <div className={styles.philmographyItem__content}>
            <div>{film.year}</div>
            <div>{film.name}</div>
            <div className={styles.philmographyItem__rating}>Рейтинг Иви: {film.rating}</div>
          </div>
          <Button color="purple" className={styles.philmographyItem__btn}>
            {t("buttons.read_more")}
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default PhilmographyItem;
