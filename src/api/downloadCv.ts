import { API_URL } from '../config';

export const downloadCv = async () => {
  const url = API_URL + '/download-cv';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};
