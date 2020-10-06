export interface State {
  selectedDate?: string | null;
  selectedId?: string | null;
  selectedIndex?: number | null;
  eqsIndex?: number;
}

export interface Action {
  type: ActionType;
  payload: State;
}

export enum ActionType {
  UPDATE_TABLE_MAP = 'UPDATE_TABLE_MAP',
  UPDATE_PAGE = 'UPDATE_PAGE',
  RESET_WITH_NEW_DATE = 'RESET_WITH_NEW_DATE',
}

export interface ResponseItem {
  id: string;
  properties: { mag: number; place: string; time: string };
  geometry: { coordinates: number[] };
}

export interface EqObject {
  id: string;
  mag: number;
  place: string;
  time: string;
  lng: number;
  lat: number;
  depth: number;
}

export interface Props {
  eqs: EqObject[][];
  state: State;
  dispatch: any; // TOFIX
}
