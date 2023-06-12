import React, { FC } from "react";
import styles from "./index.module.scss";

import { Button } from "@/components/Button/Button";
import { IoIosArrowForward } from "react-icons/io";
import { useStore } from "react-redux";

const NextButton: FC = (props: any) => {
  return (
    <>
      {props?.onClick !== null && (
        <Button className={styles.button} onClick={() => props.onClick()}>
          <IoIosArrowForward />
        </Button>
      )}
    </>
  );
};

export default NextButton;
