import connectToDB from '@/configs/db'
import otpModel from '@/models/otp'
const request = require('request')
import userModel from '@/models/user'

export async function POST(req) {

 await connectToDB()
  const body = await req.json()
  const { phone } = body

  const now = new Date();
  const expTime = now.getTime() + 300_000; // 5 Mins
  const code = Math.floor(Math.random() * 99999);

  console.log('code', code);
  console.log('phone', phone);

  const isUserExist = await userModel.findOne({
    $or: [{ phone }],
  });

  if (isUserExist) {
    return Response.json(
      {
        message: "The username or email or phone exist already !!",
      },
      {
        status: 422,
      }
    );
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
        console.log('response->', response.body);

        //YOU‌ CAN‌ CHECK‌ THE‌ RESPONSE‌ AND SEE‌ ERROR‌ OR‌ SUCCESS‌ MESSAGE
        await otpModel.create({
          phone,
          code,
          expTime,
        });
        console.log(response.body)
      } else {
        console.log('SMS error:', error);
        console.log('Status Code:', response && response.statusCode);
        console.log('Response Body:', body);


      }
    },
  )

  return Response.json(
    { message: "Code sent successfully :))" },
    { status: 201 }
  );

}

