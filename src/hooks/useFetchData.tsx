import { useState } from 'react';

import { API_URL } from '../config';

/**
 * A hook for fetching data from a URL.
 * @param {string} url The URL to fetch from.
 * @param {RequestInit} [options] The options for the fetch call.
 * @returns {{data: any, loading: boolean, error: string | null, fetchData: (body: unknown) => void}} A response object with the data, loading state, error message, and a function to fetch the data.
 */
export function useFetchData<T>(
  url: string,
  options: RequestInit = {}
): {
  data: T | null;
  loading: boolean;
  error: string | null;
  fetchData: (body?: unknown) => void;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (body: unknown) => {
    console.log(body);
    setLoading(true);
    setError(null);
    const fullUrl = API_URL + url;

    try {
      console.log(options);
      const response = await fetch(fullUrl, {
        ...options,
        method: options.method || 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        body: JSON.stringify(body) || undefined,
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (err) {
      console.log(err);
      setError(String(err));
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
}
