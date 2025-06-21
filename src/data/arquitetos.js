import perfilPic from '../assets/profilePic.jpg';

export const arquitetos = [
  {
    id: "chatillon-architectes",
    nome: "Chatillon Architectes",
    dataNascimento: "01/01/1993", // ano de fundação
    formacao: {
      instituicao: "École Nationale Supérieure d'Architecture de Paris",
      ano: 1993,
      localizacao: "Paris, França"
    },
    localizacao: {
      cidade: "Paris",
      estado: "Île-de-France",
      pais: "França"
    },
    biografia: "Fundado em Paris, o escritório Chatillon Architectes é reconhecido internacionalmente por sua atuação em projetos de restauração patrimonial, reabilitação urbana e arquitetura contemporânea. Com uma abordagem que valoriza a história e a sustentabilidade, a equipe combina tradição e inovação para criar espaços atemporais.",
    especialidades: ["Restauração", "Urbano", "Cultural", "Sustentável"],
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Grand_Palais_-_Nef_-_2016.jpg/640px-Grand_Palais_-_Nef_-_2016.jpg", // imagem mais institucional
    redesSociais: {
      linkedin: "https://linkedin.com/company/chatillon-architectes",
      instagram: "https://instagram.com/chatillon.architectes",
      portfolio: "https://chatillonarchitectes.com"
    },
    verificado: true,
    estatisticas: {
      totalProjetos: 42,
      projetosESG: 24,
      visualizacoes: 48500
    }
  },
  {
    id: "ana-silva",
    nome: "Ana Silva Mendes",
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
    biografia: "Arquiteta e urbanista com foco em projetos de revitalização urbana e espaços públicos. Ana busca criar ambientes que promovam bem-estar e conexão social, sempre considerando o impacto ambiental de suas criações.",
    especialidades: ["Urbano", "Espaços Públicos", "Sustentável"],
    foto: perfilPic,
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
    }
  },
  {
    id: "carlos-ferreira",
    nome: "Carlos Ferreira Santos",
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
    biografia: "Com mais de 20 anos de experiência, Carlos é especialista em restauração de patrimônios históricos e projetos residenciais de alto padrão. Seu trabalho é reconhecido pela atenção aos detalhes e respeito à história local.",
    especialidades: ["Restauração", "Residencial Alto Padrão", "Patrimônio Histórico"],
    foto: "/arquitetos/carlos.png",
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
    }
  }
];

export const getArquitetoById = (id) => {
  return arquitetos.find(arquiteto => arquiteto.id === id) || null;
};
