"use client";

export const increase = () => ({ type: "increase" } as const);
export const decrease = () => ({ type: "decrease" } as const);
export const reset = (newTarget: number) => 
  ({ type: "reset", targetNumber: newTarget } as const); // Ensure targetNumber is passed correctly here
