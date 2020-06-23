import { Action } from 'redux';

const SET_ACTIVITY_LIST = 'SET_ACTIVITY_LIST';

type SetActivityList = Action<typeof SET_ACTIVITY_LIST> & {
  activities: FilterListArr;
};

export const setActivityList = (activities: FilterListArr) => ({ type: SET_ACTIVITY_LIST, activities });

type PossibleActions = SetActivityList;

const reducer = (activities = [] as FilterListArr, action: PossibleActions): FilterListArr => {
  switch (action.type) {
    case SET_ACTIVITY_LIST:
      return [...action.activities];

    default:
      return activities;
  }
};

export default reducer;
