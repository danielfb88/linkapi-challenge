import axios, { AxiosRequestConfig } from "axios";
import { randomBytes } from "crypto";
import { Context } from "../../Context";
import { IGetDealsResponse } from "./pipedriveTypes";

const { BASE_URL_PIPEDRIVE, API_KEY_PIPEDRIVE } = process.env;

type AxiosRequestConfigWithTime = AxiosRequestConfig & { startTime: number };

/**
 * Create axios client
 *
 * @export
 * @returns
 */
export function createPipedriveAxiosClient() {
  const axiosInstance = axios.create({
    baseURL: BASE_URL_PIPEDRIVE,
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

export async function getAllDeals(): Promise<IGetDealsResponse> {
  const endpoint = `/deals`;

  try {
    const result = await Context.getInstance().integrations.pipedrive.get<IGetDealsResponse>(endpoint, {
      params: { api_token: API_KEY_PIPEDRIVE },
    });

    return result.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
