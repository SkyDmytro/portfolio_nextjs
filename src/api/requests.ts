const requestPost = async <T>(url: string, data?: unknown): Promise<T> => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .catch(e => {
      console.log(e);
    });
};

export const requestGet = async <T>(url: string): Promise<T> => {
  return fetch(url)
    .then(response => response.json())
    .catch(e => {
      console.log(e);
    });
};

export const postData = async (url: string, data: unknown) => {
  const fullUrl = import.meta.env.VITE_BASE_API_URL + url;
  requestPost(fullUrl, data);
};

export const getData = async (url: string) => {
  const fullUrl = import.meta.env.VITE_BASE_API_URL + url;
  return requestGet(fullUrl);
};
