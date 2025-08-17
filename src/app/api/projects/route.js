import { projetos } from "@/data/projetos";

import fs from 'fs';
import path from 'path';

// Caminho para o arquivo JSON
const projetosPath = path.join(process.cwd(), 'src', 'data', 'projetos.json');

// Função para ler o JSON
function lerProjetos() {
    const data = fs.readFileSync(projetosPath, 'utf8');
    return JSON.parse(data);
}

// Função para salvar no JSON
function salvarProjetos(projetos) {
    fs.writeFileSync(projetosPath, JSON.stringify(projetos, null, 2), 'utf8');
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);


    const seloESG = searchParams.get('seloESG');
    const destaque = searchParams.get('destaque');

    let resultados = projetos;

    if (seloESG) {
        resultados = resultados.filter(projeto => projeto.seloESG === (seloESG === 'true'));
    }

    if (destaque) {
        resultados = resultados.filter(projeto => projeto.destaque === (destaque === 'true'));
    }

    return Response.json(resultados);
}

export async function POST(request) {
    const body = await request.json();
    if (!body.nome || !body.descricao) {
        return Response.json({ error: "Nome e descrição são obrigatórios" }, { status: 400 });
    }

    const projetos = lerProjetos();

    // Criar ID slug
    const id = body.nome.toLowerCase().replace(/\s+/g, '-');

    const novoProjeto = {
        id,
        titulo: body.nome,
        descricao: body.descricao,
        area: body.area,
        localizacao: {
            cidade: body.cidade,
            estado: body.estado,
            pais: body.pais,
            endereco: body.address,
            coordenadas: body.coordinates
        },
        ano: Number(body.dataConclusao.split('-')[0]),
        arquitetoId: "francois-chatillon",
        estatisticas: { likes: 0, views: 0 },
        imagens: [body.gallery],
        descricaoCompleta: body.descricao,
        seloESG: body.esg || false,
        destaque: false,
        contribuintes: [
            {
                id: "francois-chatillon",
                destaque: true,
                nome: "François Chatillon",
                subtitulo: "Arquiteto Independente",
                papel: "Arquiteto Principal",
                foto: "https://x.share-architects.com/wp-content/uploads/2024/08/venice.share-architects.com-speakers-francois-chatillon.jpg"
            },
            {
                id: "ministerio-cultura-fr",
                nome: "Ministério da Cultura Francês",
                subtitulo: "Órgão Governamental",
                papel: "Financiador e Fiscalizador",
                foto: "/icons/government-building.svg"
            }
        ]
    };

    projetos.push(novoProjeto);
    salvarProjetos(projetos);

    return Response.json(novoProjeto, { status: 201 });
}