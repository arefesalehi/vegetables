import mongoose from 'mongoose'

const Schema = mongoose.Schema(
  {
    email: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
  },
  {
    timaStamps: true,
  },
)

const model = mongoose.models.Ban || mongoose.model('Ban', Schema)
export default model
