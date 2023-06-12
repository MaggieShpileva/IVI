import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import PropTypes from "prop-types";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";

export type CartProps = {
  title: { ruName: string; enName: string };
  text: { ruName: string; enName: string };
  type: string;
  img: string;
};

const progress = 80;
const CardMovie: FC<CartProps> = (props) => {
  const MainClassNames = `container_${props.type}`;
  const router = useRouter();
  const [locale, setLocale] = useState<any>("ru");
  const [movieName, setMovieName] = useState(props.title.ruName);
  const [description, setDescription] = useState(props.text.ruName);

  useEffect(() => {
    if (router.query?.lang) {
      setLocale(router.query?.lang);
    } else {
      setLocale("ru");
    }
  }, [router]);

  useEffect(() => {
    if (locale === "ru") {
      setDescription(props.text.ruName);
      setMovieName(props.title.ruName);
    } else {
      setDescription(props.text.enName);
      setMovieName(props.title.enName);
    }
  }, [locale]);

  return (
    <div className={styles[MainClassNames]}>
      <div className={styles.banner}>
        <Image src={props.img} width={900} height={500} alt=""></Image>
        {props.type === "summary" && (
          <div className={styles.profile_time}>
            <div className={styles.time}>
              {" "}
              <p>еще 6 мин</p>
            </div>
            <div className={styles.progress}>
              <div
                style={{ width: `${progress}%` }}
                className={styles.active}
              ></div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.decription}>
        <h5 className={styles.title}>{movieName}</h5>
        {props.type === "detailed" && props.text ? (
          <div>
            <p className={styles.text}>
              {description.length > 200
                ? description.slice(0, 170) + "..."
                : description}
            </p>
            <p className={styles.text}>6 мин</p>
          </div>
        ) : (
          <div>
            <p className={styles.text}>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardMovie;
