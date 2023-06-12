import React, { FC } from "react";
import styles from "./index.module.scss";

import { Button } from "@/components/Button/Button";
import { IoIosArrowBack } from "react-icons/io";

const PrevButton: FC = (props: any) => {
  return (
    <>
      <Button className={styles.button} onClick={() => props.onClick()}>
        <IoIosArrowBack />
      </Button>
    </>
  );
};

export default PrevButton;
