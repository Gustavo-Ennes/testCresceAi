import { Request, Response } from "express";

import { Pizza } from "../../types/pizza";

const pizzaResolver = (req: Request, res: Response): Pizza => {
  return {
    topping: "mussarella",
    price: 55.5,
  };
};

export { pizzaResolver };
