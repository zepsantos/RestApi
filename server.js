'use strict';
import express from 'express'
import {} from 'dotenv/config'
import bodyParser from 'body-parser'
import routes from './api/routes/routes'
import db from './api/models/dbModule'
import https from 'https'
import fs from 'fs'
import cors from 'cors'
import morgan from 'morgan'

const port = 80
const app = express()
db.mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  useCreateIndex:true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Successfully connect to MongoDB.");
  initial();
})
.catch(err => {
  console.error("Connection error", err);
  process.exit();
})

function initial() {
  //app.use(cors)
  
  app.use(bodyParser.json())
  app.use(morgan(':method :url :status :res[content-length] - :response-time ms :remote-addr'))
  app.use(bodyParser.urlencoded({extended:true}))
  app.use("/",routes)
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://${process.env.host}:${port}`)
  })

  https.createServer(
    {
      // ...
      cert: fs.readFileSync('/etc/letsencrypt/live/sambos.ddns.net/fullchain.pem'),
      key: fs.readFileSync('/etc/letsencrypt/live/sambos.ddns.net/privkey.pem'),
      // ...
    },
    app
  )
  .listen(443);
}
