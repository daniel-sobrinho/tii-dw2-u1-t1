import "reflect-metadata"
import 'dotenv/config'
import express from 'express'

import { appConfig } from "@config/app"
import { routes } from "@controllers/index"

const app = express()

app.use(express.json())
app.use(routes)

app.listen(appConfig.port, () => {
  console.log(`🚀 Server is running at http://localhost:${appConfig.port}`)
})




