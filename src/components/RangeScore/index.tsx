import { FC, useState, useRef, useEffect } from "react";
import styles from "./index.module.scss";
import { Range, getTrackBackground, useThumbOverlap } from "react-range";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import { useAppDispatch } from "../../hooks/hooks";
import { setScore } from "../../Redux/filter/actions";

const STEP = 1000;
const MIN = 0;
const MAX = 1000000;

const ThumbLabel = ({
  rangeRef,
  values,
  index,
}: {
  rangeRef: Range | null;
  values: number[];
  index: number;
}) => {
  const [labelValue, labelStyle] = useThumbOverlap(
    rangeRef,
    values,
    index,
    0,
    " - ",
    (value) => `${value}`,
  );

  return (
    <div
      data-label={index}
      style={{
        display: "block",
        position: "absolute",
        top: "-30px",
        color: "#fff",
        fontSize: "12px",
        fontFamily: "IviSans-light,Arial,Helvetica Neue,Helvetica,sans-serif",
        padding: "6px",
        borderRadius: "5px",
        backgroundColor: "#2e2844",
        whiteSpace: "nowrap",
        ...(labelStyle as React.CSSProperties),
      }}
    >
      {index === 1 ? `${labelValue}` : `от ${labelValue}`}
    </div>
  );
};

type Props = {
  rtl: boolean;
  scoreMin: number;
  scoreMax: number;
};

const RangeScore: FC<Props> = ({ rtl, scoreMin, scoreMax }) => {
  const { t } = useTranslation();
  const [values, setValues] = useState([scoreMin, scoreMax]);
  const [finalValues, setFinalValues] = useState([scoreMin, scoreMax]);
  const rangeRef: any = useRef<Range>();
  const isMounted = useRef(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isMounted.current) {
      dispatch(setScore([finalValues[0], finalValues[1]]));
    }
    isMounted.current = true;
  }, [finalValues]);

  useEffect(() => {
    setValues([scoreMin, scoreMax]);
  }, [scoreMin, scoreMax]);

  return (
    <div className={styles.rangeContainer}>
      <h3 className={styles.title}>{t("filters.score")}</h3>
      <Range
        ref={rangeRef}
        step={STEP}
        min={MIN}
        max={MAX}
        values={values}
        rtl={rtl}
        onChange={(values) => setValues(values)}
        onFinalChange={(values) => setFinalValues(values)}
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
                  rtl,
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
            <ThumbLabel rangeRef={rangeRef.current} values={values} index={index} />
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

export default RangeScore;
