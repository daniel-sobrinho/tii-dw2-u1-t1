import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'
import { engine } from 'express-handlebars'
import { join } from 'path'

import { appConfig } from '@config/app'
import { routes } from '@controllers/index'

const app = express()

app.engine(
  'hbs',
  engine({
    extname: 'hbs',
    defaultLayout: 'main'
  })
)
app.set('view engine', 'hbs')
app.set('views', join(__dirname, 'views'))

app.use(express.urlencoded({ extended: false }))

app.use(express.json())
app.use(routes)

app.listen(appConfig.port, () => {
  console.log(`🚀 Server is running at http://localhost:${appConfig.port}`)
})
