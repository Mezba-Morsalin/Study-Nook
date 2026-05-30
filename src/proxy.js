import dns from "node:dns/promises";
dns.setServers(['8.8.8.8' , '8.8.4.4']);

import {  NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

export const config = {
  matcher: ["/my-bookings", "/profile", "/add-room", "/rooms/:path"],
};