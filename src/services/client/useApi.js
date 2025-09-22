'use client'

import { useState, useCallback } from 'react';
import api from '../global/api';
import { API_ENDPOINTS } from '../global/apiEndpoints';
// import { useAuth } from '../context/AuthContext';

export function useApi() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { user, logout } = useAuth();

    const makeRequest = useCallback(
        async (config) => {
            setLoading(true);
            setError(null);

            try {
                const response = await api({
                    method: config.method,
                    url: config.url,
                    data: config.data,
                    params: config.params,
                    headers: config.headers, // opcional: permite sobrescrever headers
                });

                return response.data;
            } catch (err) {
                if (err.response?.status === 401) {
                    logout();
                    setError('Sessão expirada. Por favor, faça login novamente.');
                } else {
                    setError(
                        err.response?.data?.message ||
                        err.message ||
                        'Ocorreu um erro inesperado'
                    );
                }

                throw err;
            } finally {
                setLoading(false);
            }
        },
        [logout]
    );

    const registerUser = useCallback(
        (cpf, name, email, password) =>
            makeRequest({
                method: 'put',
                url: API_ENDPOINTS.USER.CREATE,
                data: { cpf, nome: name, email, senha: password },
            }),
        [makeRequest]
    );

    // User Endpoints
    const getUserData = useCallback(
        () =>
            makeRequest({
                method: 'get',
                url: '/usuario/buscar',
                data: { id: user?.id },
            }),
        [makeRequest]
    );

    const getReportsDetails = useCallback(
        (queueId) =>
            makeRequest({
                method: 'post',
                url: '/fila/carregar-dados',
                data: { id: queueId },
            }),
        [makeRequest]
    );

    //Enviando arquivo
    const createQueue = useCallback(
        (file) => {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('p_dados_request', JSON.stringify({ id: user?.codigo_usuario }));
            
            return makeRequest({
                method: 'put',
                url: '/fila/criar',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        },
        [makeRequest]
    );

    const getArchitect = useCallback(
        (id) =>
            makeRequest({
                method: 'get',
                url: API_ENDPOINTS.ARCHITECT.GET.replace(':id', id),
            }),
        [makeRequest]
    );

    return {
        loading,
        error,
        clearError: () => setError(null),

        // User methods
        getUserData,
        registerUser,

        // Architect methods
        getArchitect,
        createQueue,
    };
}