import React, { FC, MouseEventHandler, ReactNode, useState } from "react";
import styles from "./index.module.scss";
import { Button } from "@/components/Button/Button";
import { IoIosArrowBack } from "react-icons/io";

const PrevButton: FC = (props: any) => {
  const handleClick = () => {
    if (props.currentSlide > 0) {
      props.onClick();
    }
  };

  return (
    <>
      {props.currentSlide !== 0 && (
        <Button className={styles.button} onClick={handleClick}>
          <IoIosArrowBack />
        </Button>
      )}
    </>
  );
};

export default PrevButton;
