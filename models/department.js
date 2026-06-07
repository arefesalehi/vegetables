import mongoose, { mongo } from 'mongoose'

const Schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
})


const model = mongoose.models.Department || mongoose.model('Department', Schema)
export default model