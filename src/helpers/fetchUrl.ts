import {FilterState} from "../Contexts/FilterContext";

export const urlFetchHandler = (type:string,filterState:FilterState,page:number) =>{
    const apiUrl = process.env.REACT_APP_RUN_ENVIRONMENT;
    const fetchUrl = new URL(`post/?property_description=${type}&page=${page}&status=Ակտիվ`, apiUrl);

    fetchUrl.searchParams.append('cod', filterState.code);

    fetchUrl.searchParams.append('property_type', filterState.property_type.join(','));
    fetchUrl.searchParams.append('community', filterState.place.join(','));
    if (filterState.area[0] !== undefined) {
        fetchUrl.searchParams.append('from_total_area', filterState.area[0].toString());
    }
    if (filterState.area[1] !== undefined) {
        fetchUrl.searchParams.append('to_total_area', filterState.area[1].toString());
    }

    if (filterState.price[0] !== undefined) {
        fetchUrl.searchParams.append('from_price', filterState.price[0].toString());
    }

    if (filterState.rooms.length) {
        fetchUrl.searchParams.append('room', filterState.rooms.toString());
    }

    if (filterState.price[1] !== undefined) {
        fetchUrl.searchParams.append('to_price', filterState.price[1].toString());
    }

    if (filterState.newly_built) {
        fetchUrl.searchParams.append('building_type', 'Նորակառույց');
    }

    if (filterState.floor.length) {
        fetchUrl.searchParams.append('from_floors_number', filterState.floor[0].toString());
    }
    if (filterState.floor.length) {
        fetchUrl.searchParams.append('to_floors_number', filterState.floor[1].toString());
    }

    if (filterState.building_floors[0] !== undefined) {
        fetchUrl.searchParams.append('from_building_floors_number', filterState.building_floors[0].toString());
    }
    if (filterState.building_floors[1] !== undefined) {
        fetchUrl.searchParams.append('to_building_floors_number', filterState.building_floors[1].toString());
    }

    fetchUrl.searchParams.append('building_type', filterState.house_type.toString());
    fetchUrl.searchParams.append('state', filterState.renovation.toString());

    return fetchUrl
}