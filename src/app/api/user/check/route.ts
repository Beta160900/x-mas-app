import { NextRequest,NextResponse } from "next/server";
import { db } from "@/utils/firebaseAdmin";
import { verifyId } from "../verifyId";

export async function GET(req:NextRequest) {
    const email= await verifyId(req);
    if(!email)return NextResponse.json({ check:false, reason:"invalid id", id:null },{status:401})

    const idDoc = await db.collection("id").doc(email).get();
    if (!idDoc.exists) return NextResponse.json({ check:true, reason:"doc not exist", id:null },{ status: 404 });
    return NextResponse.json({ check:true, reason:"already have account", id: idDoc.data()?.ID });
}
