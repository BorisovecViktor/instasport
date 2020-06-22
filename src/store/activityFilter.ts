import { Action } from 'redux';

const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY';

type FilterByAction = Action<typeof FILTER_BY_ACTIVITY> & {
  field: string;
};

export const setFilterByActivity = (field: string) => ({ type: FILTER_BY_ACTIVITY, field });

type PossibleActions = FilterByAction;

const reducer = (filter = '', action: PossibleActions) => {
  switch (action.type) {
    case FILTER_BY_ACTIVITY:
      return action.field;

    default:
      return filter;
  }
};

export default reducer;
