import { makeExecutableSchema } from 'graphql-tools'
import { typeDefs } from './typeDefs'
import { resolvers } from './resolwers'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
