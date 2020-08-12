import axios, { AxiosRequestConfig } from "axios";
import { randomBytes } from "crypto";

type AxiosRequestConfigWithTime = AxiosRequestConfig & { startTime: number };

export abstract class BaseIntegration {
  /**
   * Create axios client
   *
   * @param {string} baseURL
   * @returns
   * @memberof BaseIntegration
   */
  static createAxiosClient(baseURL: string) {
    const axiosInstance = axios.create({
      baseURL,
      data: {
        json: true,
        resolveWithFullResponse: true,
      },
    });

    axiosInstance.interceptors.request.use(
      request => {
        (request as AxiosRequestConfigWithTime).startTime = Date.now();
        request.headers["x-tracking-request-id"] = randomBytes(16).toString("hex");
        return request;
      },
      error => {
        throw error;
      },
    );

    axiosInstance.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        throw error;
      },
    );

    return axiosInstance;
  }
}
