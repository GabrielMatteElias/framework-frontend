import api from '../global/api';
import { API_ENDPOINTS } from '../global/apiEndpoints';

export async function serverRequest(config) {
    try {
        const response = await api(config);
        return { data: response.data, error: null };
    } catch (err) {
        return {
            data: null,
            error: {
                message: err.response?.data?.message || err.message || 'Ocorreu um erro inesperado',
                status: err.response?.status
            }
        };
    }
}

export const apiServer = {
    async getArchitect(id) {
        return serverRequest({
            method: 'get',
            url: API_ENDPOINTS.ARCHITECT.GET.replace(':id', id),
        });
    }
};