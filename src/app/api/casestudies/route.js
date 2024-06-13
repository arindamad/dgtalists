import mongoose from 'mongoose';
import { Casestudy } from './model/casestudy';
import { NextResponse } from 'next/server';

// Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(process.env.NEXT_PUBLIC_DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// Handler for POST request
export async function POST(request) {
  await connectDB();
  const body = await request.json();
  
  console.log(body);

  const casestudy = new Casestudy({
    logo: body.logo,
    casetitle: body.casetitle,
    casecontent: body.casecontent,
    tstacktitle: body.tstacktitle,
    rightbanner: body.rightbanner
  });

  // Save the case study to the database
  try {
    await casestudy.save();
    return NextResponse.json({ message: 'Case study saved successfully!', casestudy });
  } catch (error) {
    return NextResponse.json({ message: 'Error saving case study', error }, { status: 500 });
  }
}
