import { DependencyList, useEffect, useState } from 'react';
import request from '../helpers/request';
import { useRequestType } from '../types/hook/useRequestType';

export const useGetRequest = <ResponseT, ParamsT = any>(
  url: string,
  params?: ParamsT,
  deps: DependencyList = [],
): useRequestType<ResponseT> => {
  const [data, setData] = useState<ResponseT>();
  const [error, setError] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setIsLoaded(false);
      try {
        const { data: response } = await request.get<ResponseT>(url, {
          params,
        });
        setData(response);
        setIsLoaded(true);
      } catch (e: any) {
        setError(e);
      }
    };

    fetchData();
  }, deps);

  return [data, isLoaded, error];
};
