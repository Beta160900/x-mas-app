import { NextRequest,NextResponse } from "next/server.js";
import { db } from "@/utils/firebaseAdmin.js";

export async function POST(req:NextRequest) {
    const [email, bg] = await req.json();
    if (!email) return NextResponse.json({ check:false, reason: "Email not found in request" },{status:400});
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