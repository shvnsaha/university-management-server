import { z } from 'zod'

// Define Zod schema for userNameSchema
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First name is required' })
    .max(20, { message: 'First name cannot be more than 20 characters' })
    .regex(/^[A-Z][a-z]*$/, { message: 'First name should be capitalized' }),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1, { message: 'Last name is required' })
    .regex(/^[a-zA-Z]+$/, {
      message: 'Last name should only contain alphabetic characters',
    }),
})

// Define Zod schema for guardianSchema
const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father name is required' }),
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father occupation is required' }),
  fatherContactNo: z
    .string()
    .min(1, { message: 'Father contact number is required' }),
  motherName: z.string().min(1, { message: 'Mother name is required' }),
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother occupation is required' }),
  motherContactNo: z
    .string()
    .min(1, { message: 'Mother contact number is required' }),
})

// Define Zod schema for localGuardianSchema
const localGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: 'Local guardian name is required' }),
  occupation: z
    .string()
    .min(1, { message: 'Local guardian occupation is required' }),
  contactNo: z
    .string()
    .min(1, { message: 'Local guardian contact number is required' }),
  address: z.string().min(1, { message: 'Local guardian address is required' }),
})

// Define Zod schema for studentSchema
const studentValidationSchema = z.object({
  id: z.string().min(1, { message: 'Student ID is required' }),
  password: z.string(),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female'], {
    message: 'Gender should be either "male" or "female"',
  }),
  dateOfBirth: z.string().optional(),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Email should be a valid email address' }),
  contactNo: z.string().min(1, { message: 'Contact number is required' }),
  emergencyContactNo: z
    .string()
    .min(1, { message: 'Emergency contact number is required' }),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presentAddress: z.string().min(1, { message: 'Present address is required' }),
  permanentAddress: z
    .string()
    .min(1, { message: 'Permanent address is required' }),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  isDeleted: z.boolean().default(false),
})

export default studentValidationSchema
