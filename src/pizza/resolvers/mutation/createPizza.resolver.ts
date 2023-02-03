import { Request, Response } from "express";

import { Pizza } from "../../types/pizza";

const createPizzaResolver = (
  parent: any,
  args: any,
  contextValue: any,
  info: any
): Pizza => {
  const {
    pizzaInput: { topping, price },
  } = args;

  console.log("🚀 ~ file: createPizza.resolver.ts:13 ~ price", price)
  return {
    topping,
    price,
  };
};

export { createPizzaResolver };
