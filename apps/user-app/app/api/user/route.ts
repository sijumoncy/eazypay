import { NextResponse } from "next/server"
import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export const GET = async () => {
    await client.user.create({
        data: {
            email: "dummy1@eazy.com",
            name: "dummy eazy 1"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}