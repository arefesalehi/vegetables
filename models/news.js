import mongoose from 'mongoose'

const Schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  img:{
    type:String,
    required:true
  },
  author:{
    type:String,
    required:true
  },
  date:{
    type:String,
    required:true
  },
  details:{
    type:String,
    required:true
  }
},{
    timeStamps:true
})

const model = mongoose.models.News || mongoose.model('News', Schema)
export default model
