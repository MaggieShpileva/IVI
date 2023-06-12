import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import styles from "./index.module.scss";
import Head from "next/head";
import {
  useSession,
  signIn,
  signOut,
  getSession,
  getProviders,
} from "next-auth/react";
import nextAuth, { getServerSession } from "next-auth";
import authOptions from "../api/auth/[...nextauth]";
import { useEffect, useState } from "react";
import ProfileButton from "@/components/Header/Buttons/Profile";

const admin = ({}) => {
  const [nicknameUser, setNicknameUser] = useState<string | null>();
  useEffect(() => {
    setNicknameUser(localStorage.getItem("nickname"));
  }, []);
  return (
    <>
      <Head>
        <title>Страница администратора</title>
      </Head>
      <div className={styles.adminPage}>
        <h1>Страница администратора</h1>
        <p>Добро пожаловать {nicknameUser}</p>
        {/* {session && <div>Signed in as {session.user.email}</div>} */}
      </div>
    </>
  );
};
// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const session = await useSession();
//   const providers = await getProviders();

//   return {
//     props: { providers: providers ?? [], session },
//   };
// }

export default admin;
