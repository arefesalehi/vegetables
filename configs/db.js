
import mongoose from 'mongoose'

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true
    }

    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sabzijat'

    await mongoose
      .connect(mongoUri)

      .then(() => console.log('Connected successfully...'))
  } catch (error) {
    console.log('connectToDB error=>', error)
  }
}





export default connectToDB