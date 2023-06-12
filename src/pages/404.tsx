import Head from "next/head";
import ErrorPage from "@/components/ErrorPage";
import { useTranslation } from "react-i18next";

const Error404 = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("error.error_page")}</title>
      </Head>
      <ErrorPage />
    </>
  );
};
export default Error404;
