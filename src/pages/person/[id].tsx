import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import styles from "./index.module.scss";
import Description from "@/components/Description";
import { Button } from "@/components/Button/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Breadcrumb } from "@/components/Breadcrumbs";
import Filmography from "@/components/Filmography";
import { IPerson } from "@/types/types";
import {
  GetStaticProps,
  GetStaticPaths,
  NextPage,
  GetServerSideProps,
} from "next";
import personsData from "@/data/persons.json";
import axios from "axios";
import personData from "@/data/person.json";

const Person: NextPage = ({ person }: any) => {
  const { t } = useTranslation();
  const router = useRouter();
  const breadcrumbs: Breadcrumb[] = [
    {
      item: `${person.films?.length || 0} ${t("person.count_movies")}`,
      path: "#filmography",
    },
    { item: `${t("person.biography")}`, path: "#" },
  ];

  const truncText = (
    <p>
      Оскар Айзек (Oscar Isaak Hernandez) - американский актер, ставший
      известным благодаря главной роли в картине братьев...
    </p>
  );
  const fullText = (
    <p>
      Оскар Айзек (Oscar Isaak Hernandez) - американский актер, ставший
      известным благодаря главной роли в картине братьев Коэн «Внутри Льюина
      Дэвиса».
    </p>
  );

  return (
    <>
      <Head>
        <title>{t("person.page_title")}</title>
      </Head>
      <div className={styles.container}>
        <Button className={styles.backBtn} onClick={() => router.back()}>
          <div
            className={`nbl-icon nbl-icon_arrowLeft_8x20 nbl-simpleControlButton__nbl-icon ${styles.backBtn__icon}`}
          ></div>
          <div>{t("buttons.back_btn")}</div>
        </Button>
        <section className={styles.personContainer}>
          <div className={styles.imgContainer}>
            <Image
              src={person.personPicture}
              alt="person"
              className={styles.img}
              width={150}
              height={225}
              priority
            ></Image>
          </div>
          <h1 className={styles.title}>
            {router.asPath.includes("lang=en")
              ? person.personLang[1].personName
              : person.personLang[0].personName}
          </h1>
          <div className={styles.title_en}>
            {router.asPath.includes("lang=en")
              ? person.personLang[0].personName
              : person.personLang[1].personName}
          </div>
          <Description
            truncText={truncText}
            fullText={fullText}
            className={styles.description}
          />
          <div className={styles.breadcrumbsRow}>
            <Breadcrumbs
              breadcrumbs={breadcrumbs}
              type="films"
              del="&middot;"
            />
          </div>
          <div className={styles.filmographyRow}>
            <Filmography person={person} />
          </div>
        </section>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id || 0;
  const lang = context.params?.lang || "ru";

  let person;
  try {
    const response = await axios.get(
      `http://84.201.131.92:5002/persons/${id}?lang=${lang}`,
      { timeout: 5000 }
    );
    person = response.data;
  } catch (e) {
    person = personData;
  }
  if (!person) {
    return {
      notFound: true,
    };
  }

  return {
    props: { person },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const locales = ["ru", "en"];

  const paths = locales.flatMap((locale) => {
    return [Array(1)].map((person) => ({
      params: { id: personData.id.toString(), lang: locale },
    }));
  });

  return {
    paths,
    fallback: "blocking",
  };
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const id = context.params?.id || 0;
//   const lang = context.params?.lang || "ru";

//   const response = await axios.get(`http://84.201.131.92:5002/persons/${id}?lang=${lang}`);
//   const person = response.data as IPerson;

//   if (!person) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: { person },
//   };
// };
export default Person;
