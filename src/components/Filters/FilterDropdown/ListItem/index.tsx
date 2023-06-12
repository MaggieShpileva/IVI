import { FC, useState, ChangeEvent } from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import styles from "./index.module.scss";
import { GiSave } from "react-icons/gi";
import { useAppDispatch } from "@/hooks/hooks";
import { editGenre, watchEditGenre } from "@/Redux/movies/actions";

type Props = {
  item: string;
  icon?: IconType;
  id?: number;
  onClick?: () => void;
  activeFilter?: boolean;
  editMode?: boolean;
};

const ListItem: FC<Props> = ({ item, icon, id, onClick, activeFilter, editMode }) => {
  const IconItem = icon ? icon : undefined;
  const [inputGenre, setInputGenre] = useState<string>(item);
  const [active, setActive] = useState(false);
  const dispatch = useAppDispatch();

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputGenre(event.target.value);
    setActive(true);
  };

  const saveHandler = () => {
    setActive(false);
    if (id) {
      dispatch(watchEditGenre({ id: id, genre: inputGenre }));
    }
  };

  return (
    <>
      {!editMode ? (
        <li className={`${styles.list} ${activeFilter && styles.active}`}>
          <div className={styles.item} onClick={onClick}>
            {item}
          </div>
          {icon && IconItem && <IconItem />}
        </li>
      ) : (
        <li className={`${styles.list}`}>
          <input
            className={styles.input}
            type="text"
            defaultValue={inputGenre}
            onChange={onChangeInput}
          />
          <button
            title="сохранить"
            className={`${styles.save} ${active && styles.active}`}
            onClick={saveHandler}
          >
            <GiSave />
          </button>
        </li>
      )}
    </>
  );
};

export default ListItem;
