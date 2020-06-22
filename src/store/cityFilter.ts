import { Action } from 'redux';

const FILTER_BY_CITY = 'FILTER_BY_CITY';

type FilterByAction = Action<typeof FILTER_BY_CITY> & {
  field: string;
};

export const setFilterByCity = (field: string) => ({ type: FILTER_BY_CITY, field });

type PossibleActions = FilterByAction;

const reducer = (filter = '', action: PossibleActions) => {
  switch (action.type) {
    case FILTER_BY_CITY:
      return action.field;

    default:
      return filter;
  }
};

export default reducer;
