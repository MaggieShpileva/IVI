import { sendComment } from "@/profileRequests/AuthService";
import { sendCommentAction } from "@/Redux/comments/actions";
import axios from "axios";
import dayjs from "dayjs";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-export-i18n";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./index.module.scss";
import { NewComments } from "./NewComments";
import { PrevComments } from "./PrevComments";

type commentsT = {
  id: string;
  name: string;
  comment: string;
  date: string;
  children: commentsT[];
};
type dataCommentsT = commentsT[];
const dataComments: dataCommentsT = [
  {
    id: "0",
    name: "Анастасия",
    comment:
      "Не имею привычки пересматривать фильмы,но этот смотрела раз 6. Самый любимый!",
    date: "1 февраля 2019",
    children: [
      {
        id: "1.1",
        name: "user",
        comment: "Good film!",
        date: "13 февраля 2019",
        children: [
          {
            id: "1.1.1",
            name: "user",
            comment: "любимый фильм!",
            date: "28 февраля 2022",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "1",
    name: "Paladin",
    comment:
      'Фильм "настоящий" и очень душевный, из цикла тех фильмов, которые интересно смотреть даже повторно',
    date: "1 февраля 2019",
    children: [],
  },
];

export const Comments: FC = () => {
  const [newComment, setNewComment] = useState<string>("");
  let now = dayjs().format("DD MMMM YYYY");
  const [data, setData] = useState<dataCommentsT>([]);
  const { t } = useTranslation();
  const [id, setId] = useState<number>();
  const router = useRouter();
  const [emailUser, setEmailUser] = useState<string | null>();

  useEffect(() => {
    setEmailUser(localStorage.getItem("email"));
  }, []);

  useEffect(() => {
    if (newComment && newComment.trim() !== "") {
      setData([
        ...data,
        {
          id: `${data.length + 1}`,
          name: "user",
          comment: newComment,
          date: now,
          children: [],
        },
      ]);
      setId(data.length + 1);
    }
  }, [newComment]);

  //оправка комментария
  useEffect(() => {
    if (id) {
      sendNewComment();
    }
  }, [id]);

  const sendNewComment = async () => {
    const dataComment = {
      id: id,
      review: newComment,
      parentReviewId: null,
      profileId: localStorage.getItem("id"),
      filmId: router.query?.id,
    };
    try {
      const sentNewComment = await sendComment(dataComment);
    } catch (e) {
      console.log("comment", e);
    }
  };

  return (
    <div className={styles.container}>
      {emailUser !== "" ? (
        <div>
          <h2>{t("sliders_title.reviews")}</h2>
          <div></div>
          <PrevComments dataComments={data} setData={setData} />

          <NewComments newComment={newComment} setNewComment={setNewComment} />
        </div>
      ) : (
        <div className={styles.not_auth}>
          <h2>{t("movie.visible_comment")}</h2>
        </div>
      )}
    </div>
  );
};
