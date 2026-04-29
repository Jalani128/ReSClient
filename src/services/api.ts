import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

client.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const appointmentsAPI = {
  schedule: (data: any) => client.post('/appointments', data),
  getAll: () => client.get('/appointments'),
  getById: (id: string) => client.get(`/appointments/${id}`),
  update: (id: string, data: any) => client.put(`/appointments/${id}`, data),
  delete: (id: string) => client.delete(`/appointments/${id}`),
};

export const propertiesAPI = {
  getAll: (params?: any) => client.get('/properties', { params }),
  getById: (id: string) => client.get(`/properties/${id}`),
  create: (data: any) => client.post('/properties', data),
  update: (id: string, data: any) => client.put(`/properties/${id}`, data),
  delete: (id: string) => client.delete(`/properties/${id}`),
};

export const inquiriesAPI = {
  create: (data: any) => client.post('/inquiries', data),
  getAll: () => client.get('/inquiries'),
};

export default client;