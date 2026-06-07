import mongoose from 'mongoose'
import productModel from '@/models/product'
const Schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  body: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  
  score: {
    type: Number,
    default: 5,
  },

  date: {
    type: Date,
    default:()=>Date.now(),
    immutable:false
  },
  isAccept: {
    type: Boolean,
    default:false,
  },
  
  productID: {
    type: mongoose.Types.ObjectId,
    ref:'Product',
  },
})

const model = mongoose.models.Comment || mongoose.model('Comment', Schema)
export default model
