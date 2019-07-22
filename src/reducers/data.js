export const DATA_ACTIONS = {
  GET_DATA: "GET_DATA",
  SET_LOADED_DATA: "SET_LOADED_DATA"
};

export const getData = () => ({
  type: DATA_ACTIONS.GET_DATA
});
export const setLoadedData = data => ({
  type: DATA_ACTIONS.SET_LOADED_DATA,
  data
});

const INITIAL_STATE = {
  data: {
    male: [],
    female: [],
    average: 0
  }
};

const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_ACTIONS.SET_LOADED_DATA:
      return { data: action.data };
    default:
      return state;
  }
};

export default data;
