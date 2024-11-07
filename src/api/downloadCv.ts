export const downloadCv = async () => {
  const url = import.meta.env.VITE_BASE_API_URL + '/download-cv';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};
