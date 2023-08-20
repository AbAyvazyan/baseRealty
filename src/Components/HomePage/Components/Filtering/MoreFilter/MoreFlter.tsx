import "./MoreFilter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FC, useRef, useEffect } from "react";
import MoreFilterRangePart from "./MoreFilterRangePart/MoreFilterRangePart";
import MoreFilterButtonGroup from "./MoreFilterButtonGroup/MoreFilterButtonGroup";
import MultipleChecks from "./MultipleChecks/MultipleChecks";
import { useTranslation } from "react-i18next";

type TMoreFilter = {
  closeModalHandler: () => void;
};

const renovation = [
  { id: 1, content: "հին վերանորոգում", active: false },
  { id: 2, content: "զրոական", active: false },
  { id: 3, content: "վերանորոգում 10 ավել", active: false },
  { id: 4, content: "վերանորոգում 5-10", active: false },
  { id: 5, content: "վերանորոգում 2-5", active: false },
  { id: 6, content: "վերանորոգված 2 տարի", active: false },
  { id: 7, content: "վերանորոգված չբնակեցված", active: false },
  { id: 8, content: "վերանորոգված դիզաիներական ոճով", active: false },
];

const buildingTypes = [
  { id: 1, content: "Ստալինկա", active: false },
  { id: 2, content: "Քարե", active: false },
  { id: 3, content: "Պոստ Խրյուշովկա", active: false },
  { id: 4, content: "Խրյուշովկա", active: false },
  { id: 5, content: "Բարձրահարկ", active: false },
  { id: 6, content: "Խոշոր Պանելային", active: false },
  { id: 7, content: "Կասետաին", active: false },
  { id: 8, content: "վերանորոգված դիզաիներական ոճով", active: false },
];

const MoreFilter: FC<TMoreFilter> = ({ closeModalHandler }) => {
  const { t } = useTranslation();

  const modalRef = useRef<any>(null); // Create a ref for the modal

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModalHandler();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className={"more_filter"} ref={modalRef}>
      <div className={"more_filter_upper_part"}>
        <span>{t("More_Filters")}</span>
        <span style={{ cursor: "pointer" }} onClick={closeModalHandler}>
          <FontAwesomeIcon icon={faXmark} />
        </span>
      </div>
      <div className={"more_filter_content"}>
        <MoreFilterRangePart name={"Floor"} />
        <MoreFilterRangePart name={"Building_Floors"} />
        <MoreFilterButtonGroup />
        <MultipleChecks title={"House_Type"} houseTypes={buildingTypes} />
        <MultipleChecks title={"Renovation"} houseTypes={renovation} />
      </div>
    </div>
  );
};

export default MoreFilter;
// [
//     "Zero_Condition",
//     "Newly_repaired",
//     "Good",
//     "Old_Renovation",
// ]
