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
    const male = state.data && state.data.male;
    const male2d = male.map((value, index) => ({ x: index * 10, y: value }));
    return male2d;
  }
);
export const femaleDataSelector = createSelector(
  dataSelector,
  state => {
    const female = state.data && state.data.female;
    const female2d = female.map((value, index) => ({
      x: index * 10,
      y: value
    }));
    return female2d;
  }
);

const MAX_ADDITION_MULTIPLIER = 1.1;

export const maxDataSelector = createSelector(
  dataSelector,
  state => {
    if (state.data && state.data.female && state.data.male) {
      const maxLevel = Math.max(...[...state.data.male, ...state.data.female]);
      return Math.ceil(maxLevel * MAX_ADDITION_MULTIPLIER);
    }
    return 0;
  }
);

export const formattedDataSelector = createSelector(
  dataSelector,
  data => {
    return data;
  }
);
