import { createSelector } from "reselect";

export const dataSelector = state => state.data;

export const averageDataSelector = createSelector(
  dataSelector,
  state => {
    return state.data && state.data.average;
  }
);
export const maleDataSelector = createSelector(
  dataSelector,
  state => {
    return state.data && state.data.male;
  }
);
export const femaleDataSelector = createSelector(
  dataSelector,
  state => {
    return state.data && state.data.female;
  }
);

export const formattedDataSelector = createSelector(
  dataSelector,
  data => {
    return data;
  }
);
