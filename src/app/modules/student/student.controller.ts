import { NextFunction, Request, Response } from 'express'
import { StudentServices } from './student.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB()
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student are retrieved Successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const result = await StudentServices.getSingleStudentFromDB(id)
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student is retrieved Successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const result = await StudentServices.deleteStudentFromDB(id)
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student is deleted  Successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
