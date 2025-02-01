"use client";

export type State = {
  userNumber: number;
  targetNumber: number;
};

export type Action = 
  | { type: "increase" } 
  | { type: "decrease" } 
  | { type: "reset"; targetNumber: number };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increase":
      return { ...state, userNumber: state.userNumber + 1 };
    case "decrease":
      return { ...state, userNumber: state.userNumber - 1 };
    case "reset":
      return { ...state, userNumber: 0, targetNumber: action.targetNumber };
    default:
      return state;
  }
}
