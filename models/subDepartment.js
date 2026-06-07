import mongoose, { mongo } from 'mongoose'

const Schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
      },

      department:{
        type:mongoose.Types.ObjectId,
        ref:'Department',
        required:true
      }
})

const model = mongoose.models.SubDepartment || mongoose.model('SubDepartment', Schema)
export default model
