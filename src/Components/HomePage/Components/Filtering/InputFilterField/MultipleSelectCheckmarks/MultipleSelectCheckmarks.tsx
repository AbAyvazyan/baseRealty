import * as React from "react";
import "./MultipleSelectCheckmarks.css";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useFilterContext } from "../../../../../../Contexts/FilterContext";

export type Tmodels = {
  title: string;
  isChecked: boolean;
  state?: boolean;
  _id: string;
};

interface TSelect {
  holder: string;
  models?: Tmodels[];
  fromTo: boolean;
  openModalHandler: (_id: string | undefined) => void;
  _id: string;
  isOpen: boolean;
  singleCheck: boolean;
  searched: boolean;
}

const MultipleSelectCheckmarks: FC<TSelect> = ({
  _id,
  holder,
  models,
  isOpen,
  fromTo,
  openModalHandler,
  singleCheck,
  searched,
}) => {
  const [checkboxesModal, setCheckboxesModal] = useState<Tmodels[]>();
  const [Chosen, setChosen] = useState<string[]>([]);
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [checkSingle, setCheckSingle] = useState(false);

  const { filterState, updateFilterState } = useFilterContext();
  const { t } = useTranslation();

  const fromPLaceHolder = t("from");
  const toPLaceHolder = t("to");

  useEffect(() => {
    setCheckboxesModal(models);
  }, []);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (e.target !== modalRef.current) {
        openModalHandler(undefined);
      }
    };
    isOpen && window.addEventListener("click", listener);

    return () => {
      window.removeEventListener("click", listener);
    };
  }, [isOpen]);

  useEffect(() => {
    setCheckboxesModal((prevState) => {
      return (
        prevState &&
        prevState?.map((value) => {
          value.isChecked = false;
          return value;
        })
      );
    });
  }, [searched]);


  const handleCheckbox = (
    { target }: ChangeEvent<HTMLInputElement>,
    _id: string,
    isChecked: boolean,
    state: boolean | undefined
  ): void => {
    state
      ? setCheckboxesModal((prevState) => {
          return (
            prevState &&
            prevState?.map((value) => {
              value.isChecked = true;
              return value;
            })
          );
        })
      : setCheckboxesModal((prevState) => {
          return (
            prevState &&
            prevState.map((values) => {
              if (values._id === _id) {
                values.isChecked = !values.isChecked;
              }

              if (values.state) {
                values.isChecked = false;
              }
              return values;
            })
          );
        });
    setChosen((prevState) =>
      isChecked
        ? [...prevState.filter((v) => v !== target.value)]
        : [...prevState, target.value]
    );
  };

  const changingHolder = holder.toLowerCase().trim();

  useEffect(() => {
    fromTo &&
      updateFilterState({ ...filterState, [changingHolder]: [+from, +to] });
    singleCheck &&
      updateFilterState({ ...filterState, [changingHolder]: checkSingle });

    !singleCheck &&
      !fromTo &&
      updateFilterState({ ...filterState, [changingHolder]: Chosen });
  }, [Chosen, changingHolder, from, to, checkSingle]);


  return (
    <>
      {!singleCheck ? (
        <div
          className={"multiple_select"}
          onClick={(e) => {
            e.stopPropagation();
            openModalHandler(_id);
          }}
          ref={modalRef}
        >
          <>
            {t(holder)}
            <span className={isOpen ? "select_arrow_clicked" : "select_arrow"}>
              <i className="fa fa-angle-down"></i>
            </span>
          </>

          {isOpen ? (
            <div
              className="multiple_select_modal"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {!fromTo &&
                checkboxesModal &&
                checkboxesModal.map(
                  ({ title, _id, isChecked, state }, index) => {
                    return (
                      <div
                        key={_id}
                        className={
                          state ? "checkobox_modal_selects" : "state_squares"
                        }
                      >
                        {/*{state_squares}*/}
                        <label className="form-control ">
                          <input
                            value={title}
                            type="checkbox"
                            name="checkbox"
                            checked={isChecked}
                            onChange={(e) =>
                              handleCheckbox(e, _id, isChecked, state)
                            }
                          />
                          {t(title)}{title==='7' && '+'}
                        </label>
                      </div>
                    );
                  }
                )}

              {fromTo && (
                <div className="from_to_modal">
                  <input
                    value={from}
                    type="number"
                    placeholder={fromPLaceHolder}
                    onChange={(e) =>
                      +e.target.value >= 0 && setFrom(e.target.value)
                    }
                  />
                  <input
                    value={to > from ? to : from}
                    type="number"
                    placeholder={toPLaceHolder}
                    onChange={(e) =>
                      +e.target.value <= +from
                        ? setTo(from)
                        : setTo(e.target.value)
                    }
                  />
                </div>
              )}
            </div>
          ) : null}
        </div>
      ) : (
        <div className={"single_check"}>
          <label>
            <input
              type="checkbox"
              checked={checkSingle}
              onChange={() => setCheckSingle(!checkSingle)}
            />
            <span>{t("Newly_Built")}</span>
          </label>
        </div>
      )}
    </>
  );
};

export default MultipleSelectCheckmarks;
