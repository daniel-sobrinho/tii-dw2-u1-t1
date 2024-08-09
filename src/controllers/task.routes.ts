import { Router } from 'express'

// import { prisma } from '@models/client'

const taskRouter = Router()

taskRouter.get('/', async (request, response) => {
  // const tasks = await prisma.task.findMany()

  // return response.json(tasks)

  return response.render('main')
})

export { taskRouter }
