import React, { FC, MouseEventHandler } from "react";
import Link from "next/link";
import styles from "./index.module.scss";

export type Breadcrumb = {
  item: string;
  path: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type Props = {
  breadcrumbs: Breadcrumb[];
  type: "pages" | "films";
  del: string;
};

const Breadcrumbs: FC<Props> = ({ breadcrumbs, type, del }) => {
  return (
    <div className={type === "films" ? styles.breadcrumbs_films : styles.breadcrumbs_pages}>
      <ul>
        {breadcrumbs.map((breadcrumb, i) => (
          <li key={breadcrumb.item}>
            {i !== breadcrumbs.length - 1 ? (
              <>
                <Link href={breadcrumb.path}>{breadcrumb.item}</Link>
                <span className={styles.del}> {del}</span>
              </>
            ) : type === "pages" ? (
              <span>{breadcrumb.item}</span>
            ) : (
              <Link href={breadcrumb.path} className={styles.last}>
                {breadcrumb.item}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
