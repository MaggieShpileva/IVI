import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Ad from "./Ad";
import { ContextSubMenu } from "@/components/ContextSubMenu";
import { DropDownMenuFilm } from "@/components/ContextSubMenu/DropDownMenuFilm";
import { DropDownMenuSerial } from "@/components/ContextSubMenu/DropDownMenuSerial";
import { DropDownMenuAnim } from "@/components/ContextSubMenu/DropDownMenuAnim";
import { DropDownMenuButton } from "@/components/ContextSubMenu/DropDownMenuButton";
import { DropDownMenuProfile } from "@/components/ContextSubMenu/DropDownMenuProfile";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@/Redux/auth/selectors";
import { selectRegistrUser } from "@/Redux/registration/selectors";

type Props = {
  isOpenSubMenu?: boolean;
  setIsOpenSubMenu?: Dispatch<SetStateAction<boolean>>;
  subMenuTitle: string;
};

const SubMenu: FC<Props> = (props) => {
  const RenderContent = () => {
    switch (props.subMenuTitle) {
      case "film":
        return (
          <div>
            <ContextSubMenu className={styles.content}>
              <DropDownMenuFilm />
            </ContextSubMenu>
            <Ad type={"ad_small"} />
          </div>
        );
      case "series":
        return (
          <div>
            <ContextSubMenu className={styles.content}>
              <DropDownMenuSerial />
            </ContextSubMenu>
            <Ad type={"ad_small"} />
          </div>
        );
      case "anim":
        return (
          <div>
            <ContextSubMenu className={styles.content}>
              <DropDownMenuAnim />
            </ContextSubMenu>
            <Ad type={"ad_small"} />
          </div>
        );
      case "profile":
        return <DropDownMenuProfile />;
      case "button":
        return <DropDownMenuButton />;
      default:
        return 0;
    }
  };
  return (
    <div
      className={styles.container}
      onMouseLeave={() => props.setIsOpenSubMenu?.(false)}
    >
      {props.isOpenSubMenu && (
        <div className={styles.wrapper}>
          <div className={styles.bg_div}></div>
          {RenderContent()}
        </div>
      )}
    </div>
  );
};

export default SubMenu;
