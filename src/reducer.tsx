import { State, Action, ActionType } from './types';

export const UPDATE_TABLE_MAP = 'UPDATE_TABLE_MAP';
export const UPDATE_PAGE = 'UPDATE_PAGE';
export const RESET_WITH_NEW_DATE = 'RESET_WITH_NEW_DATE';

export const initialState = {
  selectedDate: null,
  selectedId: null,
  selectedIndex: null,
  eqsIndex: 0,
};

export const reducer: React.Reducer<State, Action> = (
  state: State,
  action: Action
) => {
  switch (action.type) {
    case ActionType.UPDATE_TABLE_MAP:
      return {
        ...state,
        selectedId: action.payload.selectedId,
        selectedIndex: action.payload.selectedIndex,
      };
    case ActionType.UPDATE_PAGE:
      return {
        ...state,
        eqsIndex: action.payload.eqsIndex,
      };
    case ActionType.RESET_WITH_NEW_DATE:
      return {
        ...state,
        selectedDate: action.payload.selectedDate,
        selectedId: null,
        selectedIndex: null,
        eqsIndex: 0,
      };
    default:
      throw new TypeError(`Illegal type of action: ${action.type}`);
  }
};
