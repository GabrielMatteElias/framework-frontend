const API_BASE_PATH = {
    USER: '/user',
    ARCHITECT: '/architect',
    PROJECT: '/project',
};

export const API_ENDPOINTS = {
    USER: {
        CREATE: () => `${API_BASE_PATH.USER}/create`,
        GET: () => `${API_BASE_PATH.USER}/search`,
    },
    ARCHITECT: {
        GET_ALL: () => `${API_BASE_PATH.ARCHITECT}`,
        CREATE: () => `${API_BASE_PATH.ARCHITECT}`,
        GET_BY_ID: (id) => `${API_BASE_PATH.ARCHITECT}/${id}`,
        UPDATE: (id) => `${API_BASE_PATH.ARCHITECT}/${id}`,
        DELETE: (id) => `${API_BASE_PATH.ARCHITECT}/${id}`,
        GET_PROJECTS: (id) => `${API_BASE_PATH.ARCHITECT}/${id}/projects`,
    },
    PROJECT: {
        GET_ALL: () => `${API_BASE_PATH.PROJECT}`,
        CREATE: () => `${API_BASE_PATH.PROJECT}`,
        GET_BY_ID: (projectId) => `${API_BASE_PATH.PROJECT}/${projectId}`,
    },
};