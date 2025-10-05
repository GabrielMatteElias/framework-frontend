import api from './apiClient';
import { API_ENDPOINTS } from './apiRoutes';

const request = async ({ url, method = 'GET', data = null, headers = {} }) => {
    try {
        const defaultHeaders = {
            'Content-Type': 'application/json',
        };

        const isFormData = data instanceof FormData;
        const finalHeaders = isFormData
            ? { ...headers } // axios seta sozinho
            : { ...defaultHeaders, ...headers };

        const response = await api({
            method,
            url,
            data,
            headers: finalHeaders,
        });

        return { data: response.data, error: null };
    } catch (err) {
        return {
            data: null,
            error: {
                message: err.response?.data?.message || err.message || 'Ocorreu um erro inesperado',
                status: err.response?.status,
            },
        };
    }
};

export const apiService = {
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

    news: {
        getAll: () => request({ url: API_ENDPOINTS.NEWS.GET_ALL() })
    },

    teste: {
        getAll: () => request({ url: API_ENDPOINTS.TESTE.GET_ALL()})
    }
};