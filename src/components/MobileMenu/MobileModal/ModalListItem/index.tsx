import { FC, useState } from "react";
import { IconType } from 'react-icons';
import styles from "./index.module.scss"
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

type Props = {
  icon?: IconType;
  text: string;
  children?: any;
};

export const ModalListItem: FC<Props> = ({ icon, text, children }) => {
  const [open, setOpen] = useState(false);
  const IconItem = icon ? icon : undefined;
  return (
    <>
      <li className={styles.link} onClick={() => setOpen(state => !state)}>
        {icon && IconItem && <IconItem />}
        {text}
        <span> {open ? <BsChevronCompactUp /> : <BsChevronCompactDown />}</span>
      </li>
      {open && (<div className={styles.subMenu}>{children}</div>)}
    </>
  );
};