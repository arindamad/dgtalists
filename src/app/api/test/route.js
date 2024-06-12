import mongoose from 'mongoose';
import { Product } from './model/test'; 
import { NextResponse } from 'next/server';

// Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(process.env.NEXT_PUBLIC_DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// Handler for GET request (optional, just for demonstration)
export async function GET(request) {
  const data = { message: 'Hello, world!' };
  return NextResponse.json(data);
}

// Handler for POST request
export async function POST(request) {
  await connectDB();

  // Create dummy data
  const product = new Product({
    name: 'Dummy Product',
    password: 'dummyPassword',
    email: 'dummy@example2.com',
    phone: '9123827906',
  });

  // Save the product to the database
  await product.save();

  return NextResponse.json({ message: 'Product created !', product });
}