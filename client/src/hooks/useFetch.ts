import useSWR from "swr";
import { api } from "../lib/api/client";

type SWRConfiguration = any;

const fetcher = async <T>(path: string): Promise<T> => {
  const res = await api.get(path);

  if (res.status !== 200) {
    const error = new Error("An error occurred while fetching the data.");
    error.message = res.data.message;
    throw error;
  }
  // return res.data;
  return res.data.result;
};

export const useFetch = <T>(
  apiPath: string,
  configuration?: SWRConfiguration
) => {
  const result = useSWR<T, { message: string }>(
    apiPath,
    fetcher,
    configuration
  );

  return result;
};
