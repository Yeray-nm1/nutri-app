import '@styles/results.css';
import Tag from '@components/results/Tag';
import Card from '@components/results/Card';
const tags = ['Verduras', 'Fruta']

interface ResultsProps {
  products: {
    id: number;
    nombre: string;
    tipo: string;
    descripcion: string;
    meses: string[];
    regiones: string[];
    imagen: string;
  }[];
}

export default function Results({ products }: Readonly<ResultsProps>) {
  return (
    <main className="results">
      <header className="container-head">
        <h2>Productos disponibles</h2>
        <aside className="tags">
          {tags.map(tag => <Tag key={tag} tag={tag} />)}
        </aside>
      </header>
      <section className="cards">
        {products?.map(product => <Card key={product.id} product={product} />)}
      </section>
    </main>
  )
}