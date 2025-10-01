import api from './apiClient';

export const loginService = (email, password) =>
    api.post('/login', { email, senha: password });

export const checkTokenValidityService = (token) =>
    api.post('/tempo-restante-token', {token: token});
