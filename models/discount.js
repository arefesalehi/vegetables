import mongoose from 'mongoose'

const Schema =  mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    percent: {
      type: Number,
      required: true,
    },
    maxUse: {
      type: Number,
      required: true,
    },
    uses: {
      type: Number,
      default: 0,
    },
  },
  {
    timeStamps: true,
  },
)

const model = mongoose.models.Discount || mongoose.model('Discount', Schema)
export default model
