import React, {createContext, FC, useContext, useState} from "react";

export type FilterState = {
    property_type: string[],
    place: string[],
    rooms: number[],
    area: number[],
    price: number[],
    newly_built:boolean,
    floor: number[],
    building_floors: number[],
    height: string[],
    house_type: string[],
    renovation: string[],
    code: string,
};

type FilterContextType = {
    filterState: FilterState;
    updateFilterState: (newState: Partial<FilterState>) => void;
};

type TFilterProvider = {
    children: any;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: FC<TFilterProvider> = ({children}) => {
    const initialState: any = {
        property_type: [],
        place: [],
        rooms: [],
        area: [],
        price: [],
        newly_built:false,
        floor: [],
        building_floors: [],
        height: [],
        house_type: [],
        renovation: [],
        code: "",
    };

    const [filterState, setFilterState] = useState<FilterState>(initialState);

    const updateFilterState = (newState: Partial<FilterState>) => {
        setFilterState((prevState) => ({...prevState, ...newState}));
    };

    const contextValue: FilterContextType = {
        filterState,
        updateFilterState,
    };

    return (
        <FilterContext.Provider value={contextValue}>
            {children}
        </FilterContext.Provider>
    );
};


export const useFilterContext = (): FilterContextType => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error("useFilterContext must be used within a FilterProvider");
    }
    return context;
};
