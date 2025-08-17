import projetosJson from './projetos.json'; // ES Modules

export const projetos = projetosJson

export const getProjetosById = (projectId) => {
  return projetos.find(p => p.id === projectId);
};

export const getProjetosByArquiteto = (architectId) => {
  return projetos.filter(p => p.arquitetoId === architectId);
};

export const getProjetosDestaque = () => {
  return projetos.filter(p => p.destaque === true);
};

export const getProjetosESG = () => {
  return projetos.filter(p => p.seloESG === true);
};