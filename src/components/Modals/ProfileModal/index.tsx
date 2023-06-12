import { FC, Dispatch, SetStateAction, useState, useEffect } from "react";
import styles from "./index.module.scss";
import { signIn, SignInResponse, useSession } from "next-auth/react";
import AuthSteps from "./Steps/AuthSteps.tsx";
import AuthResult from "./Steps/AuthResult";
import { Login, Registration } from "@/profileRequests/AuthService";
import { useDispatch } from "react-redux";
import { getDataUserFail, getDataUserSuccess } from "@/Redux/auth/actions";
import { getDataUserRegistrationFail } from "@/Redux/registration/actions";
import { useTranslation } from "next-export-i18n";

type ProfileModalProps = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

export type DataUser = {
  nickName: string;
  login: string;
  password: string;
};

const ProfileModal: FC<ProfileModalProps> = ({ openModal, setOpenModal }) => {
  const { t } = useTranslation();

  const contentAuth: Record<number, string[]> = {
    0: ["profile.enter_or_regist", "profile.by_email"],
    1: ["profile.enter_password", "profile.password"],
  };

  const contentRegistraion: Record<number, string[]> = {
    0: ["profile.enter_email", "profile.email"],
    1: ["profile.enter_nickname", "profile.nickname"],
    2: ["profile.enter_password_short", "profile.password"],
  };

  const [step, setStep] = useState<number>(0);
  const [inputData, setInputData] = useState("");
  const { data: session } = useSession();
  const [isRequest, setIsRequest] = useState(false);
  const [isRegistration, setIsRegistration] = useState<boolean>(false);
  const [isAuthorization, setIsAuthorization] = useState<boolean>(false);
  const [dataUser, setDataUser] = useState<DataUser>({
    nickName: "",
    login: "",
    password: "",
  });
  const [endStep, setEndStep] = useState(2);
  const [enterData, setEnterData] = useState(contentAuth);
  const [isNewAccout, setIsNewAccout] = useState(false);
  const put = useDispatch();

  //авторизация пользователя
  const authorization = async () => {
    try {
      const res = await Login(dataUser.login, dataUser.password);
      localStorage.setItem("token", res.data.tokens.accessToken);
      localStorage.setItem("idUser", res.data.user.id.toString());
      localStorage.setItem("email", res.data.user.email);
      put(getDataUserSuccess(res.data));
    } catch (e) {
      put(getDataUserFail());
      console.log(`authorization ${e}`);
    }
  };

  const registration = async () => {
    setIsNewAccout(true);
    try {
      const res = await Registration(
        dataUser.nickName,
        dataUser.login,
        dataUser.password
      );
      localStorage.setItem("token", res.data.tokens.accessToken);
      localStorage.setItem("idUser", res.data.user.id.toString());
      localStorage.setItem("email", res.data.user.email);
      localStorage.setItem("nickname", res.data.profile.nickname);
    } catch (e) {
      put(getDataUserRegistrationFail());
      console.log("registration", e);
    }
  };

  useEffect(() => {
    if (isAuthorization) {
      setIsRegistration(false);
      setStep(0);
    }
  }, [isAuthorization]);

  //запись введенных данных
  useEffect(() => {
    if (!isRegistration) {
      if (step === 1) {
        setDataUser({ nickName: "", login: inputData, password: "" });
        setInputData("");
      } else if (step === 2) {
        setDataUser({
          nickName: "",
          login: dataUser?.login,
          password: inputData,
        });
        setInputData("");
        setIsAuthorization(false);
      }
    } else {
      if (step === 1) {
        setDataUser({ nickName: "", login: inputData, password: "" });
      } else if (step === 2) {
        setDataUser({
          nickName: inputData,
          login: dataUser?.login,
          password: "",
        });
      } else if (step === 3) {
        setDataUser({
          nickName: dataUser.nickName,
          login: dataUser?.login,
          password: inputData,
        });
      }
    }
  }, [step]);

  useEffect(() => {
    if (dataUser.nickName === "" && dataUser.password !== "") {
      authorization();
    } else if (
      dataUser.nickName !== "" &&
      dataUser.login !== "" &&
      dataUser.password !== ""
    ) {
      registration();
    }
  }, [dataUser]);

  //при регистрации введенные ранее данные обнуляются и последующие поля отображаются с другими данными для ввода
  useEffect(() => {
    if (isRegistration) {
      setDataUser({
        nickName: "",
        login: "",
        password: "",
      });
      setStep(0);
      setEndStep(3);
      setEnterData(contentRegistraion);
    }
  }, [isRegistration]);

  return (
    <div
      className={`${styles.profileModal} ${
        openModal && styles.profileModal_open
      }`}
    >
      <div className={styles.headerRow}>
        <h1 className={styles.title}>{t("buttons.enter_or_regist")}</h1>
        <button className={styles.closeBtn} onClick={() => setOpenModal(false)}>
          <div className="nbl-icon nbl-icon_close_20 nbl-simpleControlButton__nbl-icon"></div>
        </button>
        <div className={styles.bar}>
          <div
            className={styles.bar_line}
            style={{ width: `calc(33.33% * ${step})` }}
          ></div>
        </div>
      </div>

      {step < endStep && (
        <AuthSteps
          step={step}
          setStep={setStep}
          inputData={inputData}
          setInputData={setInputData}
          content={enterData}
        />
      )}
      {step === endStep && (
        <AuthResult
          openModal={openModal}
          setOpenModal={setOpenModal}
          isRegistration={isRegistration}
          setIsRegistration={setIsRegistration}
          isAuthorization={isAuthorization}
          setIsAuthorization={setIsAuthorization}
          isNewAccout={isNewAccout}
        />
      )}
    </div>
  );
};

export default ProfileModal;
