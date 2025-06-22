export const projetos = [
  {
    arquitetoId: "francois-chatillon",
    id: "le-grand-palais",
    titulo: "Reforma do Le Grand Palais",
    descricao: "Reforma e modernização do icônico Grand Palais em Paris, preservando sua arquitetura histórica enquanto atualiza sua infraestrutura.",
    area: "72000m²",
    localizacao: "Paris, França",
    ano: 2015,
    imagens: [
      "/projetos/grand-palais/principal.jpg",
      "/projetos/grand-palais/img1.jpg",
      "/projetos/grand-palais/img2.jpg",
      "/projetos/grand-palais/img3.jpg",
      "/projetos/grand-palais/img4.jpg"
    ],
    descricaoCompleta: "A reforma do Grand Palais em Paris visa preservar e modernizar este ícone da arquitetura Beaux-Arts, inaugurado em 1900. O projeto, liderado por especialistas, restaurará a cúpula de vidro e ferro, melhorará a eficiência energética e atualizará a infraestrutura para atender às normas de segurança e acessibilidade. Os espaços internos serão reorganizados para maior flexibilidade, com novos acessos criados. A intervenção equilibra a preservação do legado histórico com as necessidades contemporâneas.",
    seloESG: false,
    destaque: true
  },
  {
    id: "edificio-comercial",
    titulo: "Edifício Comercial Sustentável",
    descricao: "Prédio comercial com certificação LEED Gold, utilizando tecnologias de eficiência energética e reaproveitamento de água.",
    area: "15000m²",
    localizacao: "Porto Alegre, RS, Brasil",
    ano: 2021,
    arquitetoId: "francois-chatillon",
    imagens: [
      "/projetos/edificio-comercial/principal.jpg",
      "/projetos/edificio-comercial/img1.jpg",
      "/projetos/edificio-comercial/img2.jpg"
    ],
    descricaoCompleta: "Projeto inovador de edifício comercial que integra tecnologias sustentáveis como painéis solares, sistema de captação de água da chuva, jardins verticais e materiais de baixo impacto ambiental. O design prioriza a iluminação natural e ventilação cruzada, reduzindo significativamente o consumo energético.",
    seloESG: true,
    destaque: false
  },
  // ------------------------------------------

  {
    id: "museu-nacional-rj",
    titulo: "Reconstrução do Museu Nacional",
    descricao: "Projeto de reconstrução e modernização do Museu Nacional após o incêndio, combinando restauração histórica e inovação tecnológica.",
    area: "13600m²",
    localizacao: "Rio de Janeiro, RJ, Brasil",
    ano: 2023,
    arquitetoId: "francois-chatillon",
    imagens: [
      "/projetos/museu-nacional-rj/principal.jpg",
      "/projetos/museu-nacional-rj/img1.jpg",
      "/projetos/museu-nacional-rj/img2.jpg"
    ],
    descricaoCompleta: "Após o incêndio devastador de 2018, o projeto de reconstrução do Museu Nacional buscou preservar a memória arquitetônica do edifício, ao mesmo tempo em que incorporou tecnologias de última geração para segurança, climatização e museografia interativa. A proposta também ampliou a acessibilidade, criou novos espaços expositivos e fortaleceu o vínculo entre ciência, cultura e sociedade.",
    seloESG: false,
    destaque: true
  },
  {
    id: "casa-sustentavel",
    titulo: "Casa Sustentável",
    descricao: "Residência de alto padrão com certificação LEED Platinum, utilizando materiais ecológicos e sistemas de energia renovável.",
    area: "450m²",
    localizacao: "Manaus, AM, Brasil",
    ano: 2022,
    arquitetoId: "francois-chatillon",
    imagens: [
      "/projetos/casa-sustentavel/img1.jpg",
      "/projetos/casa-sustentavel/img1.jpg",
      "/projetos/casa-sustentavel/img2.jpg",
      "/projetos/casa-sustentavel/img3.jpg"
    ],
    descricaoCompleta: "Projeto residencial que incorpora os mais avançados conceitos de sustentabilidade, incluindo captação e reuso de água da chuva, painéis solares, telhado verde e materiais de baixo impacto ambiental. A casa foi projetada para maximizar a ventilação natural e a iluminação, reduzindo significativamente o consumo energético.",
    seloESG: true,
    destaque: true
  },
  {
    id: "revitalizacao-orla-guaiba",
    titulo: "Revitalização da Orla do Guaíba",
    descricao: "Projeto de requalificação urbana que transforma a orla em um espaço público vibrante, acessível e integrado à cidade.",
    area: "150000m²",
    localizacao: "Porto Alegre, RS, Brasil",
    ano: 2020,
    arquitetoId: "francois-chatillon",
    imagens: [
      "/projetos/revitalizacao-orla-guaiba/principal.jpg",
      "/projetos/revitalizacao-orla-guaiba/img1.jpg",
      "/projetos/revitalizacao-orla-guaiba/img2.jpg"
    ],
    descricaoCompleta: "A revitalização da Orla do Guaíba é um marco de urbanismo contemporâneo, promovendo a integração entre cidade e natureza. O projeto envolveu a criação de ciclovias, áreas de lazer, passarelas acessíveis, paisagismo nativo e iluminação eficiente. Tudo foi pensado para estimular o convívio social, práticas esportivas e a valorização ambiental, respeitando as características naturais do lago.",
    seloESG: false,
    destaque: true
  },
  {
  id: "hafencity-hamburgo",
  titulo: "Desenvolvimento Sustentável HafenCity",
  descricao: "Transformação da antiga zona portuária de Hamburgo em um distrito urbano moderno, sustentável e vibrante.",
  area: "157 hectares",
  localizacao: "Hamburgo, Alemanha",
  ano: 2022,
  arquitetoId: "francois-chatillon",
  imagens: [
    "/projetos/hafencity-hamburgo/principal.jpg",
    "/projetos/hafencity-hamburgo/img1.jpg",
    "/projetos/hafencity-hamburgo/img2.jpg"
  ],
  descricaoCompleta: "O projeto HafenCity representa uma das maiores iniciativas de reurbanização da Europa. A proposta reconverte uma área portuária industrial em um bairro dinâmico, com uso misto, infraestrutura resiliente e soluções arquitetônicas contemporâneas. Com foco em sustentabilidade ambiental, mobilidade urbana e inovação social, HafenCity integra edifícios residenciais, culturais, comerciais e educacionais, além de amplos espaços públicos e sistemas avançados de controle de cheias.",
  seloESG: true,
  destaque: true
}


];

export const getProjetosByArquiteto = (arquitetoId) => {
  return projetos.filter(projeto => projeto.arquitetoId === arquitetoId);
};

export const getProjetosDestaque = () => {
  return projetos.filter(projeto => projeto.destaque === true);
};

export const getProjetosESG = () => {
  return projetos.filter(projeto => projeto.seloESG === true);
};
