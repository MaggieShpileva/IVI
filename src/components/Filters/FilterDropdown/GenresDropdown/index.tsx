import { FC, useState, useEffect, Dispatch, SetStateAction } from "react";
import styles from "./index.module.scss";
import ListItem from "../ListItem";
import { BsCheckLg } from "react-icons/bs";
import GenresMinSlider from "../../GenresMinSlider";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { TiPencil } from "react-icons/ti";
import { BiExit } from "react-icons/bi";
import { Button } from "@/components/Button/Button";
import { useRouter } from "next/router";
import genresData from "../../../../data/new_data/genres.json";

type Props = {
  setIsFilter: Dispatch<SetStateAction<boolean>>;
};

const GenresDropdown: FC<Props> = ({ setIsFilter }) => {
  const router = useRouter();
  const lang = router.asPath.includes("lang=en") ? "en" : "ru";

  const genres = lang === "en" ? genresData.genresEn : genresData.genresRu;

  // связать с правами пользователя
  const [adminMode, setAdminMode] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useAppDispatch();

  const toEditMode = (): void => {
    setEditMode(true);
  };

  const exitHandler = (): void => {
    setEditMode(false);
  };

  return (
    <div className={styles.genresDropdown}>
      <div className={styles.sliderRow}>
        <GenresMinSlider genres={genres} setIsFilter={setIsFilter} />
      </div>
      <div className={styles.content}>
        {adminMode && (
          <div className={styles.btns}>
            {editMode && (
              <Button
                color="darkbluegrey"
                className={styles.button}
                title="выйти"
              >
                <BiExit onClick={exitHandler} />
              </Button>
            )}
            {!editMode && (
              <Button
                color="darkbluegrey"
                className={styles.button}
                title="редактировать"
              >
                <TiPencil onClick={toEditMode} />
              </Button>
            )}
          </div>
        )}

        {editMode ? (
          <ul className={styles.list} key={0}>
            {genres &&
              genres.map((item, index) => (
                <ListItem
                  item={item.name}
                  key={`${item.name}`}
                  icon={BsCheckLg}
                  editMode={editMode}
                />
              ))}
          </ul>
        ) : (
          <ul className={styles.list} key={1}>
            {genres &&
              genres.map((item, index) => (
                <ListItem
                  item={item.name}
                  key={`${item.name}`}
                  icon={BsCheckLg}
                  // onClick={() => dispatch(setGenres(item.name))}
                  // activeFilter={genresFilter.includes(item.name)}
                />
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GenresDropdown;
