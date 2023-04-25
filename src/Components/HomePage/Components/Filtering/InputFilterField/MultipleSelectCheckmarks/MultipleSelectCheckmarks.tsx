import * as React from "react";
import "./MultipleSelectCheckmarks.css";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";

export type Tmodels = {
  title: string;
  isChecked: boolean;
  state?:boolean,
  _id: string;
};

interface TSelect {
  holder: string;
  models?: Tmodels[];
  fromTo: boolean;
  openModalHandler: (_id: string | undefined) => void;
  _id: string;
  isOpen: boolean;
  singleCheck:boolean
}

const MultipleSelectCheckmarks: FC<TSelect> = ({
  _id,
  holder,
  models,
  isOpen,
  fromTo,
  openModalHandler,
  singleCheck,
}) => {
  const [checkboxesModal, setCheckboxesModal] = useState<Tmodels[]>();
  const [Chosen, setChosen] = useState<string[]>([]);
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");

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

  const handleCheckbox = (
    { target }: ChangeEvent<HTMLInputElement>,
    _id: string,
    isChecked: boolean
  ): void => {
    setCheckboxesModal((prevState) => {
      return (
        prevState &&
        prevState.map((v) => {
          if (v._id === _id) {
            v.isChecked = !v.isChecked;
          }
          return v;
        })
      );
    });
    setChosen((prevState) =>
      isChecked
        ? [...prevState.filter((v) => v !== target.value)]
        : [...prevState, target.value]
    );
  };

  return (
    <>
      {!singleCheck ? <div
        className={"multiple_select"}
        onClick={(e) => {
          e.stopPropagation();
          openModalHandler(_id);
        }}
        ref={modalRef}
      >
        <>
          {!Chosen.length ? (
            <>
              {from ? <span>from:{from}</span> : <span>{holder}</span>}
              {to && <span>to:{to}</span>}
            </>
          ) : Chosen.length >= 3 ? (
            [Chosen[0], Chosen[1]].map((placeName, i) => (
              <span key={i}>{placeName}</span>
            ))
          ) : (
            Chosen.map((placeName, i) => <span key={i}>{placeName}</span>)
          )}
          {Chosen.length >= 3 && <span>...</span>}
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
              checkboxesModal.map(({ title, _id, isChecked,state },index) => {
                return (
                  <div key={_id} className={state?'checkobox_modal_selects':'state_squares'}>
                    {/*{state_squares}*/}
                    <label className="form-control ">
                      <input
                        value={title}
                        type="checkbox"
                        name="checkbox"
                        checked={isChecked}
                        onChange={(e) => handleCheckbox(e, _id, isChecked)}
                      />
                      {title}
                    </label>
                  </div>
                );
              })}

            {fromTo && (
              <div className="from_to_modal">
                <input
                  value={from}
                  type="number"
                  placeholder="from"
                  onChange={(e) =>
                    +e.target.value >= 0 && setFrom(e.target.value)
                  }
                />
                <input
                  value={to}
                  type="number"
                  placeholder="to"
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


      </div> :

          <div className={'single_check'}>
            <label>
              <input type="checkbox"/> <span>Newly Built</span>
            </label>
          </div>
      }
    </>
  );
};

export default MultipleSelectCheckmarks;
