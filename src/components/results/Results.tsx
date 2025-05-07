import '@styles/results.css';
import Card from '@components/results/Card';
import Tag from '@components/results/Tag';
const tags = ['Verduras', 'Fruta']

interface ResultsProps {
  products: {
    nombre: string;
    tipo: string;
    valores: string;
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
        {products?.map(product => (
          <Card
            key={product.nombre}
            name={product.nombre}
            type={product.tipo}
            description={product.valores}
            months={product.meses}
            regions={product.regiones}
            image={product.imagen}
          />
        ))}
      </section>
    </main>
  )
}