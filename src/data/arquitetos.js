import perfilPic from '../assets/profilePic.jpg';

export const arquitetos = [
  {
    id: "francois-chatillon",
    nome: "François Chatillon",
    subtitulo: "Arquiteto independente",
    dataNascimento: "15/08/1961",
    nacionalidade: "Francesa",
    formacao: {
      instituicao: "École Nationale Supérieure des Beaux-Arts",
      ano: 1983,
      localizacao: "Paris, França"
    },
    localizacao: {
      cidade: "Paris",
      estado: "Île-de-France",
      pais: "França"
    },
    biografia: "François Chatillon é um arquiteto francês renomado por sua atuação em preservação do patrimônio histórico...",
    especialidades: ["Restauração Patrimonial", "Arquitetura Pública", "Tecnologia de Preservação", "História da Arquitetura"],
    foto: "https://x.share-architects.com/wp-content/uploads/2024/08/venice.share-architects.com-speakers-francois-chatillon.jpg",
    redesSociais: {
      linkedin: "https://linkedin.com/company/chatillon-architectes",
      instagram: "https://instagram.com/chatillon.architectes",
      portfolio: "https://chatillonarchitectes.com"
    },
    verificado: true,
    estatisticas: {
      totalProjetos: 6,
      projetosESG: 3,
      visualizacoes: 18500
    },
    projetosPublicados: [
      "Restauração do Grand Palais",
      "Reconstrução do Obelisco de Luxor",
      "Museu Carnavalet - Reforma Geral"
    ]
  },
  {
    id: "ana-silva",
    nome: "Ana Silva Mendes",
    subtitulo: "Estudante de Arquitetura e Urbanismo",
    dataNascimento: "22/07/1990",
    formacao: {
      instituicao: "Universidade de São Paulo",
      ano: 2012
    },
    localizacao: {
      cidade: "São Paulo",
      estado: "SP",
      pais: "Brasil"
    },
    biografia: "Arquiteta e urbanista com foco em projetos de revitalização urbana e espaços públicos...",
    especialidades: ["Urbano", "Espaços Públicos", "Sustentável"],
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Wu5sy3WwF0LRnxkNAJx4g2ZK4KASdc8Jxg&s",
    redesSociais: {
      linkedin: "https://linkedin.com/in/ana-silva-mendes",
      instagram: "https://instagram.com/ana.arq.urbanismo",
      portfolio: "https://anasilva.arq.br"
    },
    verificado: true,
    estatisticas: {
      totalProjetos: 15,
      projetosESG: 12,
      visualizacoes: 8320
    },
    projetosPublicados: [
      "Parque Linear do Tietê",
      "Revitalização do Largo do Arouche",
      "Praça Verde de Interlagos"
    ]
  },
  {
    id: "marina-ferreira",
    nome: "Marina Ferreira Santos",
    subtitulo: "Arquiteta Sênior",
    dataNascimento: "10/11/1978",
    formacao: {
      instituicao: "Universidade Federal de Minas Gerais",
      ano: 2001
    },
    localizacao: {
      cidade: "Belo Horizonte",
      estado: "MG",
      pais: "Brasil"
    },
    biografia: "Com mais de 20 anos de trajetória, Marina é referência em restauração de patrimônios históricos...",
    especialidades: ["Restauração", "Residencial Alto Padrão", "Patrimônio Histórico"],
    foto: "https://marcozero.org/wp-content/uploads/2022/06/image-5.png",
    redesSociais: {
      linkedin: "https://linkedin.com/in/marina-ferreira",
      instagram: "https://instagram.com/marina.arquitetura",
      portfolio: "https://marinaferreira.arq.br"
    },
    verificado: false,
    estatisticas: {
      totalProjetos: 32,
      projetosESG: 5,
      visualizacoes: 15600
    },
    projetosPublicados: [
      "Residência Jardim das Mangabeiras",
      "Restauração Solar dos Neves",
      "Edifício Patrimonial Vila Rica"
    ]
  },
  {
    id: "carlos-ferreira",
    nome: "Carlos Ferreira Santos",
    subtitulo: "Estagiário",
    dataNascimento: "10/11/1978",
    formacao: {
      instituicao: "Universidade Federal de Minas Gerais",
      ano: 2001
    },
    localizacao: {
      cidade: "Belo Horizonte",
      estado: "MG",
      pais: "Brasil"
    },
    biografia: "Com mais de 20 anos de experiência, Carlos é especialista em restauração de patrimônios históricos...",
    especialidades: ["Restauração", "Residencial Alto Padrão", "Patrimônio Histórico"],
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT_VqaExTJlEVi1Cj-5jdVAcsaffcOs6YIBw&s",
    redesSociais: {
      linkedin: "https://linkedin.com/in/carlos-ferreira",
      instagram: "https://instagram.com/carlos.patrimonio",
      portfolio: "https://carlosferreira.arq.br"
    },
    verificado: false,
    estatisticas: {
      totalProjetos: 32,
      projetosESG: 5,
      visualizacoes: 15600
    },
    projetosPublicados: [
      "Casa Colonial - Ouro Preto",
      "Restauro da Fazenda Santa Clara",
      "Residência de Alto Padrão - Belvedere"
    ]
  }
];


export const getArquitetoById = (id) => {
  return arquitetos.find(arquiteto => arquiteto.id === id) || null;
};
