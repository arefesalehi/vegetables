import mongoose from 'mongoose'
import commentModel from '@/models/comment'

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
    min: 0,
    max: 5, 
  },

  weight: {
    type: Number,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  howToSave: {
    type: String,
    required: false,
  },
  img:{
    type: String,
    required: true,
  },
  comments: {
   type:[
    {
        type:mongoose.Types.ObjectId,
        ref:'Comment'
    
    }
   ]
}

})

const model = mongoose.models.Product || mongoose.model('Product', Schema)
export default model
