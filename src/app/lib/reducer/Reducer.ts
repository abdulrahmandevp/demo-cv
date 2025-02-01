"use client";

export type State = {
  userNumber: number;
  targetNumber: number;
};

export type Action = 
  | { type: "increase" } 
  | { type: "decrease" } 
  | { type: "reset" };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increase":
      return { ...state, userNumber: state.userNumber + 1 };
    case "decrease":
      return { ...state, userNumber: state.userNumber - 1 };
    case "reset":
      return { userNumber: 0, targetNumber: Math.floor(Math.random() * 10) };
    default:
      return state;
  }
}
