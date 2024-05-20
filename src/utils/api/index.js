import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api', 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptores de petición
api.interceptors.request.use(
  (config) => {
    // Puedes agregar lógica adicional antes de enviar la petición
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptores de respuesta
api.interceptors.response.use(
  (response) => {
    // Puedes agregar lógica adicional para manejar respuestas exitosas
    return response;
  },
  (error) => {
    // Puedes agregar lógica adicional para manejar errores
    if (error.response) {
      // El servidor respondió con un código de estado que no está en el rango de 2xx
      console.error('Error de respuesta:', error.response.data);
    } else if (error.request) {
      // La petición fue hecha pero no se recibió respuesta
      console.error('Error de petición:', error.request);
    } else {
      // Algo ocurrió al configurar la petición
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Función fetchData para realizar peticiones
const fetchData = async (url, options = {}) => {
  try {
    const response = await api(url, options);
    return response.data;
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw new Error('Could not get data');
  }
};

export { api, fetchData };
