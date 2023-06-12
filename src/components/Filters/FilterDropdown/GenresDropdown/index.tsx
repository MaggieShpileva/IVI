import { FC, useState, useEffect } from "react";
import styles from "./index.module.scss";
import ListItem from "../ListItem";
import { BsCheckLg } from "react-icons/bs";
import GenresMinSlider from "../../GenresMinSlider";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { selectMovies } from "@/Redux/movies/selectors";
import { resetFilters, setGenres } from "@/Redux/filter/actions";
import { selectFilters } from "@/Redux/filter/selectors";
import { TiPencil } from "react-icons/ti";
import { BiExit } from "react-icons/bi";
import { Button } from "@/components/Button/Button";
import { GenresType } from "@/types/types";
import { useRouter } from "next/router";

const GenresDropdown: FC = () => {
  const router = useRouter();
  const lang = router.asPath.includes("lang=en") ? "en" : "ru";

  const { genresRu, genresEn } = useAppSelector(selectMovies);
  const genres = lang === "en" ? genresEn : genresRu;
  const genresCopy = [...genres];
  const { genres: genresFilter } = useAppSelector(selectFilters);

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
        <GenresMinSlider />
      </div>
      <div className={styles.content}>
        {adminMode && (
          <div className={styles.btns}>
            {editMode && (
              <Button color="darkbluegrey" className={styles.button} title="выйти">
                <BiExit onClick={exitHandler} />
              </Button>
            )}
            {!editMode && (
              <Button color="darkbluegrey" className={styles.button} title="редактировать">
                <TiPencil onClick={toEditMode} />
              </Button>
            )}
          </div>
        )}

        {editMode ? (
          <ul className={styles.list} key={0}>
            {genresCopy.length &&
              genresCopy.map((item, index) => (
                <ListItem
                  item={item.name}
                  key={`${item.id}`}
                  icon={BsCheckLg}
                  id={item.id}
                  editMode={editMode}
                />
              ))}
          </ul>
        ) : (
          <ul className={styles.list} key={1}>
            {genres.length &&
              genres.map((item, index) => (
                <ListItem
                  item={item.name}
                  key={`${item.id}`}
                  icon={BsCheckLg}
                  onClick={() => dispatch(setGenres(item.name))}
                  activeFilter={genresFilter.includes(item.name)}
                />
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GenresDropdown;
