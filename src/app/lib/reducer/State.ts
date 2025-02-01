"use client";

import { State } from "./Reducer";

export const initialState: State = {
    userNumber: 0,
    targetNumber: Math.floor(Math.random() * 10),
};
