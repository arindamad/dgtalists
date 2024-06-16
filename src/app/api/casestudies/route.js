import mongoose from "mongoose";
import { Casestudy } from "./model/casestudy";
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(process.env.NEXT_PUBLIC_DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export async function POST(request) {
  await connectDB();

  // Parse form data
  const formData = await request.formData();
  const file = formData.get("logo");

  let logoPath = "";
  // Save file to public/uploads directory
  if (file) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = `${Math.random()}-${file.name}`;
    const filePath = path.join(process.cwd(), "public", "images", filename);
    fs.access("./public/images", fs.constants.F_OK)
    .then(() => {
      console.log('Directory exists.');
    })
    .catch(() => {
      fs.mkdir('images', {recursive:true});
      console.log('Directory does not exist.');
    });
    await fs.writeFile(filePath, buffer);
    logoPath = `/${filename}`;
  }
  const casestudy = new Casestudy({
    logo: logoPath,
    casetitle:formData.get("casetitle"),
    casecontent:formData.get("casecontent"),
    tstacktitle: formData.get("tstacktitle"),
    rightbanner:formData.get("rightbanner"),
  });

  try {
    await casestudy.save();
    return NextResponse.json({
      message: "Case study saved successfully!",
      casestudy,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error saving case study", error },
      { status: 500}
    );
  }
}