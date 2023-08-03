import api from './api';

export async function getHotel(token) {
  console.log('token', token);
  const response = await api.get('/hotels', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

