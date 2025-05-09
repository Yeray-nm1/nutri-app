const { PUBLIC_BASE_URL } = import.meta.env;

export const filterProducts = async (region: string, month: string) => {
  const response = await fetch(`${PUBLIC_BASE_URL}/${region}/${month}`);
  const data = await response.json();
  return data;
}

export const getAllProducts = async () => {
  const response = await fetch(PUBLIC_BASE_URL);
  const data = await response.json();
  return data;
}

export const getProductByName = async (id: number) => {
  const response = await fetch(`${PUBLIC_BASE_URL}/product/${id}`);
  const data = await response.json();
  return data;
}