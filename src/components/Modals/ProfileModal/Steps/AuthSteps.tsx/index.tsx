import {
  FC,
  Dispatch,
  SetStateAction,
  useRef,
  useState,
  ChangeEvent,
  useEffect,
} from "react";
import Link from "next/link";
import styles from "../index.module.scss";
import { Button } from "@/components/Button/Button";
import CompanyPolicy from "../../PolicyBlock";
import { useLanguageSwitcherIsActive, useTranslation } from "next-export-i18n";
import { SlSocialVkontakte } from "react-icons/sl";
import { signIn, useSession } from "next-auth/react";
type Props = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  content: Record<number, string[]>;
  inputData: string;
  setInputData: Dispatch<SetStateAction<string>>;
};

const AuthSteps: FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState(props.inputData);
  const { t } = useTranslation();
  const onFocusHandler = () => {
    inputRef.current?.focus();
    labelRef.current?.classList.add(`${styles.active}`);
  };

  const onBlurHandler = () => {
    labelRef.current?.classList.remove(`${styles.active}`);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue.length !== 0) {
      props.setStep(props.step + 1);

      props.setInputData(inputValue);
      setInputValue("");
    }
  };
  const session = useSession();
  console.log(session);
  return (
    <div className={styles.content}>
      <div className={styles.message}>
        <div className={styles.subtitle}>{t(props.content[props.step][0])}</div>
        <span>{t("profile.least_characters")}</span>
      </div>
      {props.step === 0 && (
        <div
          className={[styles.message, styles.vk].join(" ")}
          onClick={() => signIn("vk")}
        >
          <SlSocialVkontakte />
          {t("profile.Vkontakte")}
        </div>
      )}

      <div className={styles.enter_data}>
        <div
          className={styles.input_div}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        >
          {/* <div className={styles.label} ref={labelRef} onClick={onFocusHandler}>
            {props.content[props.step][1]}
          </div> */}
          <input
            className={styles.enter_login}
            type="text"
            ref={inputRef}
            value={inputValue}
            onChange={(e) => handleChange(e)}
            placeholder={t(props.content[props.step][1])}
          />
        </div>
        <div className={styles.continue}>
          <Button
            className={`${styles.continue_btn} ${styles.activeContinue} `}
            color="pink"
            onClick={handleClick}
          >
            {t("buttons.continue")}
          </Button>
        </div>
        <CompanyPolicy />
      </div>
    </div>
  );
};

export default AuthSteps;
