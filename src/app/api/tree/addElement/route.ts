import { db } from "../../../../utils/firebaseAdmin";
import { NextRequest,NextResponse } from "next/server";
import { UserDocData } from "@/type/docs";

export async function POST(req:NextRequest) {
  // GET /api/user?id=123
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  const { type, name, message } = await req.json();
  
  if (!id) return NextResponse.json({ addData:false, reason:"no id" }, { status: 400 });

  const userDocRef = db.collection("user").doc(id);
  const userDoc = await userDocRef.get();
  if (!userDoc.exists) return NextResponse.json({ addData:false, reason:"user document not exist" }, {status:404});

  const data = userDoc.data() as UserDocData;
  let [page, pos] = data.newData;
  data.elements = data.elements;
  const elementString = `${page},${pos},${type},${name},${message}`;
  data.elements.push(elementString);

  pos += 1;
  if (pos > 8) {
    page += 1;
    pos = 0;
  }

  data.newData=[page,pos];
  await userDocRef.set(data);

  return NextResponse.json({ addData:true, reason:"already add data to firebase" },{status:200});
}
