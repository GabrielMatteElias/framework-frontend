import { projetos } from "@/data/projetos";

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    
    const seloESG = searchParams.get('seloESG');
    const destaque = searchParams.get('destaque');
    console.log(seloESG);
    console.log(destaque);

    let resultados = projetos;

    if(seloESG){
        resultados = resultados.filter(projeto => projeto.seloESG === (seloESG === 'true'));
        console.log('AAAAAAAAAAAAAAAAAAAA' ,resultados);
        
    }

    if(destaque){
        resultados = resultados.filter(projeto => projeto.destaque === (destaque === 'true'));
    }

    return Response.json(resultados);
}