import { NextRequest,NextResponse } from "next/server";
import { db } from "@/utils/firebaseAdmin";
import { verifyId } from "../verifyId";

export async function POST(req:NextRequest) {
    const email= await verifyId(req);
    if (!email) return NextResponse.json({ check:false, reason: "Email not found in request",id:null },{status:400});
    const {bg} = await req.json();
    const userRef = db.collection("user").doc();//create new doc
    const userId = userRef.id;//new id
    await userRef.set({
        email,
        name: email.split("@")[0],
        background: bg || 0,
        elements: [],
        newData: [1, 0],
    });
    await db.collection("id").doc(email).set({ ID: userId });
    return NextResponse.json({ check:true, reason: "User created", id: userId },{status:201});
}