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
  const logoFile = formData.get("logo");
  const bannerFile = formData.get("rightbanner");

  let logoPath = "";
  let bannerPath = "";

  // Save logo file to public/images/logo directory
  if (logoFile) {
    const logoBuffer = Buffer.from(await logoFile.arrayBuffer());
    const logoFilename = `${Math.random()}-${logoFile.name}`;
    const logoDir = path.join(process.cwd(), "public", "images", "logo");
    const logoFilePath = path.join(logoDir, logoFilename);

    // Ensure directory exists
    await fs.mkdir(logoDir, { recursive: true });
    await fs.writeFile(logoFilePath, logoBuffer);
    logoPath = `/images/logo/${logoFilename}`;
  }

  // Save banner file to public/images/banner directory
  if (bannerFile) {
    const bannerBuffer = Buffer.from(await bannerFile.arrayBuffer());
    const bannerFilename = `${Math.random()}-${bannerFile.name}`;
    const bannerDir = path.join(process.cwd(), "public", "images", "banner");
    const bannerFilePath = path.join(bannerDir, bannerFilename);

    // Ensure directory exists
    await fs.mkdir(bannerDir, { recursive: true });
    await fs.writeFile(bannerFilePath, bannerBuffer);
    bannerPath = `/images/banner/${bannerFilename}`;
  }

  // Create new casestudy document
  const casestudy = new Casestudy({
    logo: logoPath,
    casetitle: formData.get("casetitle"),
    casecontent: formData.get("casecontent"),
    tstacktitle: formData.get("tstacktitle"),
    rightbanner: bannerPath,
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
      { status: 500 }
    );
  }
}
