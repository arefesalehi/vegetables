// import connectToDB from '@/configs/db'
import otpModel from '@/models/otp'
import userModel from '@/models/user'
const request = require('request')
import connectToDB from '@/configs/db'

export async function POST(req) {
  
  try {
    await connectToDB()
    const body = await req.json()
    const { phone } = body

    const now = new Date()
    const expTime = now.getTime() + 300_000
    const code = Math.floor(10000 + Math.random() * 90000)

    const isUserExist = await userModel.findOne({ phone })
    if (!isUserExist) {
      return Response.json({ message: "کاربری با این شماره پیدا نشد" }, { status: 404 })
    }

    const user = process.env.SMS_IPPANEL_USER
    const pass = process.env.SMS_IPPANEL_PASS
    const fromNum = process.env.SMS_IPPANEL_FROM_NUM || '3000505'
    const patternCode = process.env.SMS_IPPANEL_PATTERN_CODE
    if (!user || !pass || !patternCode) {
      console.error('SMS_IPPANEL_* env vars are not set')
      return Response.json(
        { message: 'ارسال پیامک پیکربندی نشده است' },
        { status: 503 },
      )
    }

    request.post(
      {
        url: 'https://ippanel.com/api/select',
        body: {
          op: 'pattern',
          user,
          pass,
          fromNum,
          toNum: phone,
          patternCode,
          inputData: [{ 'verification-code': code }],
        },
        json: true,
      },
      async function (error, response, body) {
        if (!error && response.statusCode === 200) {
          await otpModel.create({ phone, code, expTime })
          console.log('OTP saved and SMS sent')
        } else {
          console.log('SMS Error:', error || body)
        }
      }
    )

    return Response.json({ message: "کد ارسال شد" }, { status: 201 })

  } catch (err) {
    console.error("🔴 OTP Login API Error:", err)
    return Response.json({ message: "خطای داخلی سرور", error: err.message }, { status: 500 })
  }
}
