import { blogSchema } from "@/app/lib/blogModel";
import { connectionStr } from "@/app/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr);
    const data = await blogSchema.find().sort({createdAt:-1});
    console.log(data);
    return NextResponse.json(data)
}

export async function POST(request) {
    try {
        const payload = await request.json();
        
        // Connect to MongoDB using Mongoose
        await mongoose.connect(connectionStr);

        // Create a new blog instance and save it
        const blog = new blogSchema(payload);
        const result = await blog.save();
        
        console.log(result);
        // Return a JSON response with the saved data
        return NextResponse.json(result);
    } catch (error) {
        console.error("Error saving blog:", error);
        return NextResponse.json({ error: "Failed to save blog" }, { status: 500 });
    }
}

