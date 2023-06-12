import { FC } from "react";
import styles from "./index.module.scss";
import FilmographyItem from "./FilmographyItem";
import { IPerson } from "@/types/types";
import { useLanguageQuery, useTranslation } from "next-export-i18n";

type Props = {
  person: IPerson;
};

const Filmography: FC<Props> = ({ person }) => {
  const { t } = useTranslation();
  const filmographyArray = person.films || [];

  return (
    <div className={styles.filmography}>
      <div className={styles.titleRow}>
        <h2 id="filmography" className={styles.title}>
          {t("person.filmography")}
        </h2>
        <div className={styles.count}>
          {person.films?.length || 0} {t("person.count_movies")}
        </div>
      </div>
      <div className={styles.filmographyContent}>
        {filmographyArray.map((item, i) => (
          <FilmographyItem key={i} film={item} />
        ))}
      </div>
    </div>
  );
};

export default Filmography;
