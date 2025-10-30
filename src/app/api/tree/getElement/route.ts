import { NextRequest,NextResponse } from "next/server";
import { db } from "../../../../utils/firebaseAdmin";
import { UserDocData } from "@/type/docs";

export async function GET(req:NextRequest){
    // GET /api/user?id=123
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (!id) return NextResponse.json({ getElement:false, reason: "ID not provided" },{status:400});

    const userDoc = await db.collection("user").doc(id).get();
    if (!userDoc.exists) return NextResponse.json({ getElement:false, reason: "Document not found" },{status:404});

    const data = userDoc.data() as UserDocData;
    const elements = data.elements||[];

    const formattedElements = elements.map(e => {
        if (typeof e === "string") {
        const [page, position, type, sender,  ...messageParts] = e.split(",");
        return {
            page: Number(page),
            position: Number(position),
            type: Number(type),
            sender,
            message: messageParts.join(","),
        };
        }
        return e;
    });
    return NextResponse.json({
        getElement:true,
        data:{
            id: userDoc.id,
            name: data.name || "",
            background: data?.background || 0,
            elements: formattedElements,
        }
    },{status:200});
}