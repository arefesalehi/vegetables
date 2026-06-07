import connectToDB from "@/configs/db";
import otpModel from "@/models/otp";
import userModel from "@/models/user";
import { generateAccessToken } from "@/utils/auth";
import { roles } from "@/utils/constant";

export async function POST(req) {
 await connectToDB();
  const body = await req.json();
  const { phone, code } = body;
  const email = `${phone}@gmail.com`;

  // Validation (You) ✅

  const otp = await otpModel.findOne({ phone, code });

  if (otp) {
    const date = new Date();
    const now = date.getTime();

    if (otp.expTime > now) {
      const accessToken = generateAccessToken({ email });

      const users = await userModel.find({});

      await userModel.create({
        email,
        phone,
        role: users.length > 0 ? roles.USER : roles.ADMIN,
      });

      return Response.json(
        { message: "Code is correct :))" },
        {
          status: 200,
          headers: {
            "Set-Cookie": `token=${accessToken};path=/;httpOnly=true`,
          },
        }
      );
    } else {
      return Response.json({ message: "Code is expired :))" }, { status: 410 });
    }
  } else {
    return Response.json(
      { message: "Code is not correct !!" },
      { status: 409 }
    );
  }
}
