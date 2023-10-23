import { signIn } from "next-auth/react";
import styles from "./index.module.scss";

const GoogleButton = () => {
  return (
    <div onClick={() => signIn("google")} className={styles.google_button}>
      <img
        loading="lazy"
        height="24"
        width="24"
        id="provider-logo-dark"
        src="https://authjs.dev/img/providers/google.svg"
      />
      <span>Sign in with Google</span>
    </div>
  );
};

export default GoogleButton;
