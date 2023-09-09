import axios from 'axios';
export default function AxiosClient() {
  return axios.create({
    baseURL: 'https://localhost:7135/api/',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'x-api-key': 'leela123',
    },
  });
}
export async function readRequest(slug) {
  return await AxiosClient().get(slug);
}