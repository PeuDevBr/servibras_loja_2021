import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { api } from "../services/api";

interface Product {
  name: string;
  code: string;
  brand: string;
  subject: string;
  model: string;
  version: string;
  cost: string;
  title: string;
}

interface ProductsProviderprops {
  children: ReactNode;
}

const ProductsContext = createContext<Product[]>([]);

export function ProductsProvider({ children }: ProductsProviderprops) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setProducts(response.data.transactions));
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);

  return context;
}
