
import { projetos } from "@/data/projetos";


export async function GET(request, { params }) {
    const id = params.id;

    const projeto = projetos.find(arc => arc.id === id);

    if (!projeto) {
        return Response.json({ error: 'Arquiteto não encontrado' }, { status: 404 });
    }

    return Response.json(projeto)
}