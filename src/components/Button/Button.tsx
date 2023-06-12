import { FC, MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.scss";

export type Props = {
  children?: ReactNode | ReactNode[];
  className?: string;
  color?: "pink" | "darkbluegrey" | "purple";
  type?:
    | "chatButton"
    | "footerIconButton"
    | "footerStoresButton"
    | "socialButton"
    | "subscribeButton"
    | "deviceButton"
    | "loginButton"
    | "editLoginButton"
    | "profileSertButton"
    | "profilePresentButton"
    | "profileInviteButton"
    | "profileMenuButton";
  width?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  title?: string;
};

export const Button: FC<Props> = ({ children, className, color, type, width, onClick, title }) => {
  const cssClass = [styles.button, className];
  if (color === "pink") {
    cssClass.push(styles.pink);
  }
  if (color === "darkbluegrey") {
    cssClass.push(styles.darkbluegrey);
  }
  if (color === "purple") {
    cssClass.push(styles.purple);
  }
  if (type === "chatButton") {
    cssClass.push(styles.chatButton);
  }
  if (type === "footerIconButton") {
    cssClass.push(styles.footerIconButton);
  }
  if (type === "footerStoresButton") {
    cssClass.push(styles.footerStoresButton);
  }
  if (type === "socialButton") {
    cssClass.push(styles.socialButton);
  }
  if (type === "subscribeButton") {
    cssClass.push(styles.subscribeButton);
  }
  if (type === "deviceButton") {
    cssClass.push(styles.deviceButton);
  }
  if (type === "loginButton") {
    cssClass.push(styles.loginButton);
  }
  if (type === "editLoginButton") {
    cssClass.push(styles.editLoginButton);
  }
  if (type === "profileSertButton") {
    cssClass.push(styles.profileSertButton);
  }
  if (type === "profilePresentButton") {
    cssClass.push(styles.profilePresentButton);
  }
  if (type === "profileInviteButton") {
    cssClass.push(styles.profileInviteButton);
  }
  if (type === "profileMenuButton") {
    cssClass.push(styles.profileMenuButton);
  }

  return (
    <button
      className={cssClass.join(" ")}
      style={{ width: `${width}` }}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
};
