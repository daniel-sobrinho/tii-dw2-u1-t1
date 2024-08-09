import { Router } from 'express'

import { taskRouter } from '@controllers/task.routes'

const routes = Router()

routes.use('/', taskRouter)

export { routes }
