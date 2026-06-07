import mongoose, { mongo } from 'mongoose'
import departmentModel from '@/models/department'

const Schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,                                                                                                                                                                                                                                                                                                                                                                                                                                            
      ref: 'User',
      required: true,
    },
    department: {
      type: mongoose.Types.ObjectId,
      ref: 'Department',
      required: true,
    },
    subDepartment: {
      type: mongoose.Types.ObjectId,
      ref: 'SubDepartment',
      required: true,
    },
    isAnswer: {
      type: Boolean,
      default: false,
    },
    hasAnswer: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: Number,
      default: 1,
      enum: [1, 2, 3],
    },
    mainTicket: {
      type: mongoose.Types.ObjectId,
      ref: 'Ticket',
      required: false,
    },
  },
  {
    timestamps: true,
  },
)

const model = mongoose.models.Ticket || mongoose.model('Ticket', Schema)
export default model
