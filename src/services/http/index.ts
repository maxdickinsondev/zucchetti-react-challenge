import { api } from "../api";

export const http = {
  get: async <T>(url: string): Promise<T> => {
    const response = await api.get(url);
    return response.data;
  },
  post: async <T, K>(url: string, data: T): Promise<K> => {
    const response = await api.post(url, data);
    return response.data;
  },
  put: async <T, K>(url: string, data: T): Promise<K> => {
    const response = await api.put(url, data);
    return response.data;
  },
  delete: async (url: string): Promise<void> => {
    const response = await api.delete(url);
    return response.data;
  },
};
