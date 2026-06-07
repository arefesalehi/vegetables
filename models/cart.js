import mongoose, { mongo } from 'mongoose'


const Schema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
  },

  {
    timeStamps: true,
  },
)

const model = mongoose.models.Cart || mongoose.model('Cart', Schema)
export default model
