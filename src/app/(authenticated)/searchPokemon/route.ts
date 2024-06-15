import { NextRequest, NextResponse } from "next/server";

import { getFullPokemon } from "@/pokemon";

export const dynamic = "force-dynamic";

// The route handler exposes a GET fn(), whihc calls the getFullPokemon() with teh query `q` and returns the result as a JSON response
export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const q = url.searchParams.get("q") ?? "";
    const limit = url.searchParams.get("limit") ?? 10;
    return NextResponse.json(await getFullPokemon(+limit, q));
}