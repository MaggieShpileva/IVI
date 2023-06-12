import { FC, useState, useRef, ChangeEvent, Dispatch, SetStateAction } from "react";
import styles from "./index.module.scss";
import { MdSearch } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";

type Props = {
  className?: string;
  placeholder?: string;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

const SearchInput: FC<Props> = ({ className, placeholder, searchValue, setSearchValue }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLInputElement>(null);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onClickClear = () => {
    setSearchValue("");
    inputRef.current?.focus();
  };

  const onFocusHandler = () => {
    inputRef.current?.focus();
    labelRef.current?.classList.add(`${styles.active}`);
  };

  return (
    <div className={[styles.search, className].join(" ")} onFocus={onFocusHandler}>
      <div className={`${styles.search__placeholder}`} ref={labelRef} onClick={onFocusHandler}>
        {placeholder}
      </div>
      <input
        className={styles.search__input}
        onChange={onChangeInput}
        value={searchValue}
        type="text"
        ref={inputRef}
      />
      {searchValue ? (
        <TfiClose className={styles.search__close} onClick={onClickClear} />
      ) : (
        <MdSearch className={styles.search__icon} />
      )}
    </div>
  );
};

export default SearchInput;
