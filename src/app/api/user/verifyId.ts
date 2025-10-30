import { auth } from "@/utils/firebaseAdmin";
import { NextRequest } from "next/server";

export const verifyId = async (req:NextRequest): Promise<string|null> => {
    const idToken = req.headers.get('authorization');
    if(!idToken)return null;
    const decodedToken = await auth.verifyIdToken(idToken);
    const email = decodedToken.email;
    return email || null;
}