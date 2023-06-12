import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useSession } from "next-auth/react";

type Props = {
  name: string;
};
export const AuthProfile: FC<Props> = ({ name }) => {
  const { data: session } = useSession();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("idUser")
      ? localStorage.getItem("idUser")
      : null;

    if (user !== null && user == "1") {
      setIsAdmin(true);
    }
  }, []);
  return (
    <div className={styles.container}>
      {isAdmin ? (
        <p className={styles.name}> Admin</p>
      ) : (
        <p className={styles.name}> {name}</p>
      )}
      {/* {session?.user.userRole === "admin" && (
        <span className={styles.role}>admin</span>
      )} */}
    </div>
  );
};
