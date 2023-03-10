import * as React from "react";
import "./MultipleSelectCheckmarks.css";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";

export type Tmodels = {
  title: string;
  isChecked: boolean;
  _id: string;
};

interface TSelect {
  holder: string;
  models?: Tmodels[];
  fromTo: boolean;
  openModalHandler: (_id: string | undefined) => void;
  _id: string;
  isOpen: boolean;
}

type Tfrom_to = { from: number | undefined; to: number | undefined };

const MultipleSelectCheckmarks: FC<TSelect> = ({
  _id,
  holder,
  models,
  isOpen,
  fromTo,
  openModalHandler,
}) => {
  const [checkboxesModal, setCheckboxesModal] = useState<Tmodels[]>();
  const [Chosen, setChosen] = useState<string[]>([]);
  const [from_to_obj, set_from_to_obj] = useState<Tfrom_to>({
    from: undefined,
    to: undefined,
  });

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
    setCheckboxesModal((p) => {
      return (
        p &&
        p.map((v) => {
          if (v._id === _id) {
            v.isChecked = !v.isChecked;
          }
          return v;
        })
      );
    });
    setChosen((p) =>
      isChecked
        ? [...p.filter((v) => v !== target.value)]
        : [...p, target.value]
    );
  };

  return (
    <>
      <div
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
                {from_to_obj.from ? <span>from:{from_to_obj.from}</span> : <span>{holder}</span>}
                {from_to_obj.to && <span>to:{from_to_obj.to}</span>}
              </>
          ) : Chosen.length >= 3 ? (
            [Chosen[0], Chosen[1]].map((v, i) => <span key={i}>{v}</span>)
          ) : (
            Chosen.map((v, i) => <span key={i}>{v}</span>)
          )}
          {Chosen.length >= 3 && <span>...</span>}
          <span className={isOpen ? "select_arrow_clicked" : "select_arrow"}>
            <i className="fa fa-angle-down"></i>
          </span>
        </>

        {isOpen ? (
          <div
            className={"multiple_select_modal"}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {!fromTo &&
              checkboxesModal &&
              checkboxesModal.map(({ title, _id, isChecked }, index) => {
                return (
                  <div key={_id} className={"checkobox_modal_selects"}>
                    <label className="form-control">
                      <input
                        type="checkbox"
                        name="checkbox"
                        checked={isChecked}
                        value={title}
                        onChange={(e) => handleCheckbox(e, _id, isChecked)}
                      />
                      {title}
                    </label>
                  </div>
                );
              })}

            {fromTo && (
              <div className={"from_to_modal"}>
                <input
                  type="number"
                  placeholder={"from"}
                  value={from_to_obj.from}
                  onChange={(e) =>
                    set_from_to_obj((p) => {
                      return { to: from_to_obj.to, from: +e.target.value };
                    })
                  }
                />
                <input
                  type="number"
                  placeholder={"to"}
                  value={ from_to_obj.from && from_to_obj.to && from_to_obj.from > from_to_obj.to ? from_to_obj.from : from_to_obj.to}
                  onChange={(e) =>
                    set_from_to_obj((p) => {

                      return { to: +e.target.value, from: from_to_obj.from };
                    })
                  }
                />
              </div>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default MultipleSelectCheckmarks;
