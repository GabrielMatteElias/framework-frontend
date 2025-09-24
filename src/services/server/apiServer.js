import api from '../global/api';
import { API_ENDPOINTS } from '../global/apiEndpoints';

const request = async ({ url, method = 'GET', data = null, headers = {} }) => {
    try {
        const defaultHeaders = {
            'Content-Type': 'application/json',
        };

        const response = await api({
            method,
            url,
            data,
            headers: { ...defaultHeaders, ...headers }, // merge com headers opcionais
        });

        return { data: response.data, error: null };
    } catch (err) {
        return {
            data: [],
            error: {
                message: err.response?.data?.message || err.message || 'Ocorreu um erro inesperado',
                status: err.response?.status,
            },
        };
    }
};

export const apiServer = {
    architect: {
        getAll: () => {
            return request({ url: API_ENDPOINTS.ARCHITECT.GET_ALL() })
        },

        getById: (id) => {
            if (!id) throw new Error('ID do arquiteto não fornecido');
            return request({ url: API_ENDPOINTS.ARCHITECT.GET_BY_ID(id) });
        },

        getProjects: (id) => {
            if (!id) throw new Error('ID do arquiteto não fornecido');
            return request({ url: API_ENDPOINTS.ARCHITECT.GET_PROJECTS(id) });
        },

        create: (payload, headers) =>
            request({ url: API_ENDPOINTS.ARCHITECT.CREATE, method: 'POST', data: payload, headers }),

        update: (id, payload, headers) =>
            request({ url: API_ENDPOINTS.ARCHITECT.UPDATE(id), method: 'PUT', data: payload, headers }),

        delete: (id, headers) =>
            request({ url: API_ENDPOINTS.ARCHITECT.DELETE(id), method: 'DELETE', headers }),
    },

    project: {
        getById: (id) => {
            if (!id) throw new Error('ID do projeto não fornecido');
            return request({ url: API_ENDPOINTS.PROJECT.GET_BY_ID(id) });
        },

        getAll: () => request({ url: API_ENDPOINTS.PROJECT.GET_ALL() }),

        create: (payload, headers) =>
            request({ url: API_ENDPOINTS.PROJECT.CREATE, method: 'POST', data: payload, headers }),

        update: (id, payload, headers) =>
            request({ url: API_ENDPOINTS.PROJECT.UPDATE(id), method: 'PUT', data: payload, headers }),

        delete: (id, headers) =>
            request({ url: API_ENDPOINTS.PROJECT.DELETE(id), method: 'DELETE', headers }),
    },
};