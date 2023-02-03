import { ApolloServerOptions, BaseContext } from "@apollo/server";

interface ResolverObjectInterface {
  [key: string]: ApolloServerOptions<BaseContext>;
}

export interface ResolverInterface {
  Query?: ResolverObjectInterface;
  Mutation?: ResolverObjectInterface;
}
