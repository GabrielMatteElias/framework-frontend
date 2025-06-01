export const projetos = [
  {
    id: "le-grand-palais",
    titulo: "Reforma do Le Grand Palais",
    descricao: "Reforma e modernização do icônico Grand Palais em Paris, preservando sua arquitetura histórica enquanto atualiza sua infraestrutura.",
    area: "72000m²",
    localizacao: "Paris, França",
    ano: 2015,
    arquitetoId: "chatillon-architectes",
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
// ------------------------------------------
  {
    id: "casa-sustentavel",
    titulo: "Casa Sustentável Ipanema",
    descricao: "Residência de alto padrão com certificação LEED Platinum, utilizando materiais ecológicos e sistemas de energia renovável.",
    area: "450m²",
    localizacao: "Rio de Janeiro, RJ, Brasil",
    ano: 2022,
    arquitetoId: "chatillon-architectes",
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

  // {
  //   id: "parque-linear",
  //   titulo: "Parque Linear Tietê",
  //   descricao: "Revitalização urbana transformando áreas degradadas às margens do rio em espaços públicos de lazer e convivência.",
  //   area: "12km²",
  //   localizacao: "São Paulo, SP, Brasil",
  //   ano: 2020,
  //   arquitetoId: "ana-silva",
  //   imagens: [
  //     "/projetos/parque-linear/principal.jpg",
  //     "/projetos/parque-linear/img1.jpg",
  //     "/projetos/parque-linear/img2.jpg"
  //   ],
  //   descricaoCompleta: "O projeto de revitalização urbana transforma áreas anteriormente degradadas às margens do Rio Tietê em um extenso parque linear que serve como espaço de lazer, prática esportiva e reconexão com a natureza. O parque inclui ciclovias, áreas de descanso, playgrounds e anfiteatros ao ar livre, além de extensas áreas de vegetação nativa que ajudam na recuperação do ecossistema local.",
  //   seloESG: true,
  //   destaque: true
  // },
  // {
  //   id: "museu-historico",
  //   titulo: "Restauração Museu Histórico Nacional",
  //   descricao: "Restauração meticulosa do edifício histórico do século XVIII, preservando elementos originais enquanto moderniza instalações.",
  //   area: "8500m²",
  //   localizacao: "Belo Horizonte, MG, Brasil",
  //   ano: 2018,
  //   arquitetoId: "carlos-ferreira",
  //   imagens: [
  //     "/projetos/museu-historico/principal.jpg",
  //     "/projetos/museu-historico/img1.jpg",
  //     "/projetos/museu-historico/img2.jpg"
  //   ],
  //   descricaoCompleta: "Trabalho minucioso de restauração que recuperou a grandiosidade original deste importante patrimônio histórico. O projeto envolveu pesquisa histórica detalhada, recuperação de elementos arquitetônicos originais e integração discreta de tecnologias modernas para climatização, iluminação e segurança, sem comprometer a autenticidade do edifício.",
  //   seloESG: false,
  //   destaque: false
  // },
  // {
  //   id: "edificio-comercial",
  //   titulo: "Edifício Comercial Sustentável",
  //   descricao: "Prédio comercial com certificação LEED Gold, utilizando tecnologias de eficiência energética e reaproveitamento de água.",
  //   area: "15000m²",
  //   localizacao: "Porto Alegre, RS, Brasil",
  //   ano: 2021,
  //   arquitetoId: "gabriel-matte",
  //   imagens: [
  //     "/projetos/edificio-comercial/principal.jpg",
  //     "/projetos/edificio-comercial/img1.jpg",
  //     "/projetos/edificio-comercial/img2.jpg"
  //   ],
  //   descricaoCompleta: "Projeto inovador de edifício comercial que integra tecnologias sustentáveis como painéis solares, sistema de captação de água da chuva, jardins verticais e materiais de baixo impacto ambiental. O design prioriza a iluminação natural e ventilação cruzada, reduzindo significativamente o consumo energético.",
  //   seloESG: true,
  //   destaque: false
  // }
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
