import { Action } from 'redux';

const SET_CITY_LIST = 'SET_CITY_LIST';

type SetSityList = Action<typeof SET_CITY_LIST> & {
  cities: FilterListArr;
};

export const setCityList = (cities: FilterListArr) => ({ type: SET_CITY_LIST, cities });

type PossibleActions = SetSityList;

const reducer = (cities = [] as FilterListArr, action: PossibleActions): FilterListArr => {
  switch (action.type) {
    case SET_CITY_LIST:
      return action.cities;

    default:
      return cities;
  }
};

export default reducer;
