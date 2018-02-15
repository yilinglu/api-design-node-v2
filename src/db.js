import mongoose from 'mongoose'
import appConfig from './config'
mongoose.Promise = global.Promise

export const connect = (config = appConfig) => {
  return mongoose.connect(config.db.url, {
    useMongoClient: true
  }).then (
      () => {
          console.log(`Successfully connected to db.`)
      }, 
      (err) => {
          console.log(`Error connecting to db: ${JSON.stringify(err, null,1)}`)
      }
  )
}
