import mongoose from 'mongoose'
import { TStudent } from './student.interface'
import { Student } from './student.model'

const getAllStudentsFromDB = async () => {
  const result = await Student.find()
  return result
}

const getSingleStudentFromDB = async (id: string) => {
  // const result = await Student.findById(id)

  const objectId = new mongoose.Types.ObjectId(id)
  const result = await Student.aggregate([{ $match: { _id: objectId } }])
  return result
}

const deleteStudentFromDB = async (id: string) => {
  const result = await Student.findByIdAndUpdate(id, { isDeleted: true })
  return result
}

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
}
