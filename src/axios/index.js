import axios from 'axios';

const defaultAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_DOMAIN,
  headers: {
    'Content-Type': 'application/json',
  },
});

const authAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_DOMAIN,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
});

authAxios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const logout = () => {
  localStorage.removeItem('accessToken');
};

// access token 재발급
const getRefreshToken = async () => {
  try {
    const res = await refresh();
    const accessToken = res.data.data?.accessToken;
    return accessToken;
  } catch (e) {
    // 로그아웃 처리
    logout();
  }
};

authAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config, response } = error;
    //  401에러가 아니거나 재요청이거나 refresh 요청인 경우 그냥 에러 발생
    if (response.status !== 401 || config.sent || config.url === REFRESH_URL) {
      return Promise.reject(error);
    }
    // 아닌 경우 토큰 갱신
    config.sent = true; // 무한 재요청 방지
    const accessToken = await getRefreshToken();
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return axios(config); // 재요청
  }
);

export { defaultAxios, authAxios };
