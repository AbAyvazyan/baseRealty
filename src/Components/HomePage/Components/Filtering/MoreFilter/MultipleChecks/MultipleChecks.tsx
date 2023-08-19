import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {useFilterContext} from "../../../../../../Contexts/FilterContext";

type TBuildingTypes = {
    id: number;
    content: string;
    active: boolean;
};

type TMultyChecks = {
    houseTypes: TBuildingTypes[];
    title: string;
};

const MultipleChecks: FC<TMultyChecks> = ({ houseTypes, title }) => {
    const [typeNames, setTypeNames] = useState<TBuildingTypes[]>([]);
    const {filterState,updateFilterState} = useFilterContext()

    const { t } = useTranslation();

    useEffect(() => {
        setTypeNames(houseTypes);
    }, [houseTypes]);

    const handleCheckboxChange = (index: number) => {
        setTypeNames((prevTypeNames) => {
            const updatedTypeNames = [...prevTypeNames];
            updatedTypeNames[index].active = !updatedTypeNames[index].active;
            return updatedTypeNames;
        });
    };


    useEffect(()=>{
        const activeContents = typeNames.filter((item) => item.active).map((item) => item.content);
        updateFilterState({...filterState,[title.toLowerCase()]:activeContents})
    },[typeNames])

    return (
        <div className={"multiple_checks mf_all"}>
            <div>{t(title)}</div>
            <div className={"multiple_house_types_checks"}>
                {typeNames.map((item, index) => {
                    return (
                        <label key={index}>
                            <input
                                type="checkbox"
                                checked={item.active}
                                onChange={() => handleCheckboxChange(index)}
                            />
                            {t(item.content)}
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default MultipleChecks;
