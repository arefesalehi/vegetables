import mongoose from 'mongoose'

const Schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  subject: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
})
const model = mongoose.models.Contact || mongoose.model('Contact', Schema)
export default model
