import axios, {AxiosRequestConfig, AxiosRequestHeaders, Method} from 'axios';
interface ApiMethod {
  GET: Method;
  POST: Method;
  PUT: Method;
  DELETE: Method;
}

export const axiosMethod: ApiMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

interface ApiParams {
  url: string;
  params?: object | null;
  method?: Method | 'GET';
  token?: string | null;
  data?: object | null;
}

export async function axiosRequest(config: ApiParams) {
  const {url, method, data, params, token} = config;

  const axiosConfig: AxiosRequestConfig = {
    url,
    params,
    method,
    data,
  };

  const headers: AxiosRequestHeaders = {
    Authorization: `Bearer ${token}`,
  };

  if (token) {
    axiosConfig.headers = headers;
  }

  const response = await axios(axiosConfig);

  return response.data;
}
