import { Router } from 'express'

import { prisma } from '@models/client'

const taskRouter = Router()

taskRouter.get('/', async (request, response) => {
  const undoneTasks = await prisma.task.findMany({
    orderBy: {
      id: 'asc'
    },
    where: {
      done: false
    }
  })

  const doneTasks = await prisma.task.findMany({
    orderBy: {
      id: 'asc'
    },
    where: {
      done: true
    }
  })

  return response.render('tarefas', {
    tasks: [...undoneTasks, ...doneTasks]
  })
})

taskRouter.post('/', async (request, response) => {
  const { task } = request.body

  if (!task) {
    return response.status(400).json({ error: 'Task is required' })
  }

  await prisma.task.create({
    data: {
      title: task
    }
  })

  return response.redirect('/')
})

taskRouter.get('/delete/:id', async (request, response) => {
  const { id } = request.params

  await prisma.task.delete({
    where: {
      id: Number(id)
    }
  })

  return response.redirect('/')
})

taskRouter.get('/toggle/:id', async (request, response) => {
  const { id } = request.params

  const task = await prisma.task.findUnique({
    where: {
      id: Number(id)
    }
  })

  if (!task) {
    return response.redirect('/')
  }

  await prisma.task.update({
    where: {
      id: Number(id)
    },
    data: {
      done: !task.done
    }
  })

  return response.redirect('/')
})

export { taskRouter }
