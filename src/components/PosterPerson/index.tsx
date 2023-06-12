import { FC } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { IPerson, PersonForSliderType } from "@/types/types";
import { useRouter } from "next/router";
import { strHandler } from "@/utils/strNumberHandler";

export type PosterPersonProps = {
  person: PersonForSliderType;
  lang: string;
};

const PosterPerson: FC<PosterPersonProps> = ({ person, lang }) => {
  let personNameLang: string;

  if (lang === "ru") {
    personNameLang =
      person.person.personLang[0].personName || person.person.personLang[1].personName || "";
  } else {
    personNameLang =
      person.person.personLang[1].personName || person.person.personLang[0].personName || "";
  }

  const name = personNameLang.match(/.*\s/i) || personNameLang;
  const surname = personNameLang.slice(name[0]?.length) || "";

  return (
    <Link href={`/person/${person.person.id}?lang=${lang}`} className={styles.container}>
      <div className={styles.poster}>
        <Image
          src={person.person.personPicture}
          alt=""
          className={styles.img}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        ></Image>
        <div className={styles.label}>{person.filmsNumber}</div>
      </div>
      <div className={styles.description}>
        <div className={styles.name}>{name}</div>
        <div className={styles.surname}>{surname}</div>
        <div className={styles.countFilms}>{strHandler(person.filmsNumber)}</div>
      </div>
    </Link>
  );
};

export default PosterPerson;
