const API_URL = 'https://instasport.co/dashboard/api/v1/clubs/';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(API_URL);

  return response.json();
};
