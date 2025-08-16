// app/api/arquitetos/route.js

import { arquitetos } from "@/data/arquitetos";

export async function GET() {    
    return Response.json(arquitetos);
}