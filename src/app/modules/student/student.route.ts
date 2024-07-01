import { Router } from 'express'
import { StudentControllers } from './student.controller'

const router = Router()

router
  .get('/', StudentControllers.getAllStudents)
  .get('/:id', StudentControllers.getSingleStudent)
  .delete('/:id', StudentControllers.deleteStudent)

export const StudentRoutes = router
