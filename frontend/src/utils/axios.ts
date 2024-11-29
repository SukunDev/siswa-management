/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosHeaders, Method } from "axios";

const axiosRequest = async (
  url: string,
  method: Method = "GET",
  data?: object,
  token?: string
) => {
  try {
    let headers = {};
    if (token) {
      headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    const response = await axios({
      url: `${process.env.NEXT_PUBLIC_REST_API_URL}${url}`,
      method: method,
      data: method === "POST" || method === "PUT" ? data : undefined,
      headers: {
        ...AxiosHeaders,
        ...headers,
      },
    });
    if (response.data.status) {
      return {
        data: response.data.data,
        error: null,
      };
    } else {
      return {
        data: null,
        error: response.data.message,
      };
    }
  } catch (error) {
    return handleError(error);
  }
};

const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    return {
      data: null,
      error: `Error: ${error.response?.data.message || "An error occurred"}`,
    };
  } else if (error instanceof Error) {
    return {
      data: null,
      error: `Error: ${error.message}`,
    };
  } else {
    return {
      data: null,
      error: "Unknown error occurred",
    };
  }
};

export default axiosRequest;
