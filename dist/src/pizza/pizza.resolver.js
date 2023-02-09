"use strict";
// export queries, mutations and subscriptions to index files import
Object.defineProperty(exports, "__esModule", { value: true });
exports.pizzaResolvers = void 0;
const resolvers_1 = require("./resolvers");
const createPizza_resolver_1 = require("./resolvers/mutation/createPizza.resolver");
const pizzaResolvers = {
    Query: { pizza: resolvers_1.pizzaResolver },
    Mutation: { createPizza: createPizza_resolver_1.createPizzaResolver },
};
exports.pizzaResolvers = pizzaResolvers;
