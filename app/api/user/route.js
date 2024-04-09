import { userSchema } from "@/app/lib/userModel";
import { connectionStr } from "@/app/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect(connectionStr);
    const data = await userSchema.find().sort({ createdAt: -1 });
    console.log(data);
    return NextResponse.json(data)
}

export async function DELETE(params) {
    const id = params.id
    await mongoose.connect(connectionStr);
    const data = await userSchema.findOneAndDelete({ _id: id });
    return NextResponse.json(data.slice(0, 1));
}

export async function POST(request) {
    const payload = await request.json();

    // Connect to MongoDB using Mongoose
    await mongoose.connect(connectionStr);
    let result;


    if (payload.login) {
        result = await userSchema.find({ email: payload.email, password: payload.password });
    }
    else {
        const user = new userSchema(payload);
        result = await user.save();
        console.log(result);
    }
    return NextResponse.json(result);
}

