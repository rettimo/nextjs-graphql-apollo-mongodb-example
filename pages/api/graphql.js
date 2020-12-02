import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../apollo/schema'
import { databaseConnect } from './../../database'

const apolloServer = new ApolloServer({ schema, context: databaseConnect })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
