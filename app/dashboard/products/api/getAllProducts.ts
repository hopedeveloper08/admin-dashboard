export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default async function getAllProducts() {
  const url = "https://fakestoreapi.com/products";

  const response = await fetch(url);

  if (response.ok) {
    const data: Array<Product> = await response.json();    
    return data;
  } else throw Error()
}
