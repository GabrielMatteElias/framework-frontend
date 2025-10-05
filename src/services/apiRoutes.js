const API_BASE_PATH = {
    USER: '/user',
    ARCHITECT: '/architect',
    PROJECT: '/project',
    NEWS: '/news',
    TESTE: '/test'
};

export const API_ENDPOINTS = {
    USER: {
        CREATE: () => `${API_BASE_PATH.USER}/create`,
        GET: () => `${API_BASE_PATH.USER}/search`,
    },
    ARCHITECT: {
        GET_ALL: () => `${API_BASE_PATH.ARCHITECT}`,
        GET_BY_ID: (id) => `${API_BASE_PATH.ARCHITECT}/${id}`,
        CREATE: () => `${API_BASE_PATH.ARCHITECT}`,
        UPDATE: (id) => `${API_BASE_PATH.ARCHITECT}/${id}`,
        DELETE: (id) => `${API_BASE_PATH.ARCHITECT}/${id}`,
        GET_PROJECTS: (id) => `${API_BASE_PATH.ARCHITECT}/${id}/projects`,
    },
    PROJECT: {
        GET_ALL: () => `${API_BASE_PATH.PROJECT}`,
        GET_BY_ID: (projectId) => `${API_BASE_PATH.PROJECT}/${projectId}`,
        CREATE: () => `${API_BASE_PATH.PROJECT}`,
        UPDATE: (id) => `${API_BASE_PATH.PROJECT}/${id}`,
        DELETE: (id) => `${API_BASE_PATH.PROJECT}/${id}`,
    },
    NEWS: {
        GET_ALL: () => `${API_BASE_PATH.NEWS}`,
        GET_BY_ID: () => `${API_BASE_PATH.NEWS}`
    },
    TESTE: {
        GET_ALL: () => `${API_BASE_PATH.TESTE}`,
    }
};