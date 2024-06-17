import mongoose from 'mongoose';
import { Casestudy } from '../casestudies/model/casestudy';
import { NextResponse } from 'next/server';



export async function POST(request,response ){
  const data = { message: 'Hello, mini!' };
  return NextResponse.json(data);
}
export async function GET(request,response ){
  const data = { message: 'Hello, mini!' };
  return NextResponse.json(data);
}

// Handler for POST request
// export async function POST(request) {
//   await connectDB();
//   const body = await request.json();
  
//   console.log(body);

//   const casestudy = new Casestudy({
//     logo: body.logo,
//     casetitle: body.casetitle,
//     casecontent: body.casecontent,
//     tstacktitle: body.tstacktitle,
//     rightbanner: body.rightbanner
//   });

//   // Save the case study to the database
//   try {
//     await casestudy.save();
//     return NextResponse.json({ message: 'Case study saved successfully!', casestudy });
//   } catch (error) {
//     return NextResponse.json({ message: 'Error saving case study', error }, { status: 500 });
//   }
// }
