// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";
// state
export const initailCounterState = {
  count: 0,
};

export const initailUserState = {
  users: [{ name: "Ashraful Islam" }],
};

// action - Object => type, payload
export const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
export const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
export const addUser = () => {
  return {
    type: ADD_USER,
    payload: { name: "Shakil" },
  };
};

// 1. state
// 2. dispatch action
// 3. reducer
// 4. store
