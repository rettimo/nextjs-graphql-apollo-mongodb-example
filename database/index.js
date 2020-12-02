import { MongoClient } from 'mongodb'

let db

export const databaseConnect = async () => {
  if (!db) {
    try {
      const dbClient = new MongoClient(
        `mongodb+srv://${process.env.NEXT_PUBLIC_DB_USER}:${process.env.NEXT_PUBLIC_DB_PASSWORD}@cluster0.u7mij.mongodb.net/${process.env.NEXT_PUBLIC_DB_NAME}?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
      )

      if (!dbClient.isConnected()) await dbClient.connect()
      db = dbClient.db(`${process.env.NEXT_PUBLIC_DB_NAME}`)
    } catch (e) {
      console.log('--->error while connecting with graphql context (db)', e)
    }
  }
  return { db }
}
