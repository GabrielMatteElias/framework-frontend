// app/api/architects/[id]/route.js
import { arquitetos } from "@/data/arquitetos";

export async function GET(request, { params }) {
    const id = params.id;

    const arquiteto = arquitetos.find(arc => arc.id === id);

    if (!arquiteto) {
        return Response.json({ error: 'Arquiteto não encontrado' }, { status: 404 });
    }

    return Response.json(arquiteto);
}