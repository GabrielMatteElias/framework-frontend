import perfilPic from '../assets/profilePic.jpg';

export const arquitetos = [
  {
    id: "francois-chatillon",
    nome: "François Chatillon",
    dataNascimento: "15/08/1961", // estimado com base na carreira e graduação
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
    biografia: "François Chatillon é um arquiteto francês renomado por sua atuação em preservação do patrimônio histórico. Fundador do escritório Chatillon Architectes em 1986, tornou-se Architecte en Chef des Monuments Historiques da França em 2003. Ao longo de sua carreira, liderou a restauração de ícones arquitetônicos como o Grand Palais, o Obelisco de Luxor e o Musée Carnavalet, sempre combinando técnicas tradicionais com inovação tecnológica.",
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
