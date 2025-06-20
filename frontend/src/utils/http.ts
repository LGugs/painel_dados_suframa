import axios, { type AxiosInstance } from "axios";

export const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Credentials": false,
  "X-Requested-With": "XMLHttpRequest",
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  Expires: "0",
};

class Http {
  private instance: AxiosInstance | null = null;

  public get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const PORT_BACK = import.meta.env.VITE_PORT_BACK;
    const HOST_BACK = import.meta.env.VITE_API_HOST || 'localhost'; // caso no .env não seja definido
    const apiUrl = `http://${HOST_BACK}:${PORT_BACK}/v1`;
    const http = axios.create({
      baseURL: apiUrl,
      headers,
      withCredentials: false,
    });

    this.instance = http;
    return http;
  }
}

export const HttpInstance = new Http();
