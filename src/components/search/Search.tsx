import '@styles/search.css';
import { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import regions from '../../data/regions';
import { seasons } from '../../data/seasons';
import Results from '../results/Results';
import { filterProducts, getAllProducts } from '../../lib/products';

interface Product {
  nombre: string;
  tipo: string;
  valores: string;
  meses: string[];
  regiones: string[];
  imagen: string;
}

export default function Search() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleFilter = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const region = formData.get('Región') as string;
    const month = formData.get('Temporada') as string;
    if (region && month) {
      const index = month.indexOf('(');
      const selectedMonth = month.slice(index + 1, index + 4);
      const newList = await filterProducts(region, selectedMonth);
      setFilteredProducts(newList);
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getAllProducts();
      setFilteredProducts(allProducts);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <form id="search" onSubmit={handleFilter}>
        <div className="dropdowns">
          <fieldset className="dropdown">
            <Dropdown label="Región" options={regions} />
          </fieldset>
          <fieldset className="dropdown">
            <Dropdown label="Temporada" options={seasons} />
          </fieldset>
        </div>
        <div className="extra">
          <button className="submit-button" type="submit">Buscar Productos</button>
        </div>
      </form>
      <Results products={filteredProducts} />
    </>
  )
}