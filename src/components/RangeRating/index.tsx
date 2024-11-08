import {
  FC,
  useState,
  useRef,
  ReactNode,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import styles from "./index.module.scss";
import { Range, getTrackBackground, useThumbOverlap } from "react-range";
import { useTranslation } from "next-export-i18n";

const MIN = 0;
const MAX = 10.0;

const ThumbLabel = ({
  rangeRef,
  values,
  index,
}: {
  rangeRef: Range | null;
  values: number[];
  index: number;
}) => {
  const [labelValue, style] = useThumbOverlap(rangeRef, values, index);
  return (
    <div
      data-label={index}
      style={{
        display: "block",
        position: "absolute",
        top: "-30px",
        color: "#fff",
        fontSize: "14px",
        fontFamily: "IviSans-light,Arial,Helvetica Neue,Helvetica,sans-serif",
        padding: "6px",
        borderRadius: "5px",
        backgroundColor: "#2e2844",
        whiteSpace: "nowrap",
        ...(style as React.CSSProperties),
      }}
    >
      {labelValue as ReactNode}
    </div>
  );
};

export type RangeRatingProps = {
  raiting: number[];
  setRaiting: Dispatch<SetStateAction<number[]>>;
};

const RangeRating: FC<RangeRatingProps> = ({ raiting, setRaiting }) => {
  const { t } = useTranslation();
  const [values, setValues] = useState(raiting);

  useEffect(() => {
    setRaiting(values);
  }, [values]);

  const rangeRef: any = useRef<Range>();

  return (
    <div className={styles.rangeContainer}>
      <h3 className={styles.title}>{t("filters.rating")}</h3>
      <Range
        ref={rangeRef}
        step={0.1}
        min={0}
        max={10.0}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "40px",
              display: "flex",
              width: "90%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "6px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#a5a1b2", "#ea003d", "#a5a1b2"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, index, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "25px",
              width: "10px",
              borderRadius: "4px",
              backgroundColor: "#a5a1b2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ThumbLabel
              rangeRef={rangeRef.current}
              values={values}
              index={index}
            />
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#ea003d" : "#a5a1b2",
              }}
            />
          </div>
        )}
      />
    </div>
  );
};

export default RangeRating;
