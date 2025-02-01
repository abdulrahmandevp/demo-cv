"use client";

import { Action } from "./Reducer";

// export const increase = (): Action => ({ type: "increase" });

// export const decrease = (): Action => ({ type: "decrease" });

// export const reset = (): Action => ({ type: "reset" });
export const increase = () => ({ type: "increase" } as const);
export const decrease = () => ({ type: "decrease" } as const);
export const reset = (newTarget: number) =>
    ({ type: "reset", payload: newTarget } as const);
