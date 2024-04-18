import { blogSchema } from "@/app/lib/blogModel";
import { connectionStr } from "@/app/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(request,res) {
    await mongoose.connect(connectionStr);
    const id = res.params?.id;
    try {
        if (!id) {
            return NextResponse.json({ error: 'Id is not present' }, { status: 404 });
        }
        const data = await blogSchema.find({ _id: id }).populate();
        if (!data || data.length === 0) {
            return NextResponse.json({ error: "No data present" })
        }
        return NextResponse.json( data );
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching blog data', message: error.message }, { status: 500 });
    }
}

export async function DELETE(req,res) {
    const id = res.params.id;
    await mongoose.connect(connectionStr, { useNewUrlParser: true });
    const result = await blogSchema.deleteOne({ _id: id });
    return NextResponse.json(result);
}
