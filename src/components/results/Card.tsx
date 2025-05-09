import '@styles/card.css'

interface CardProps {
  product: {
    id: number;
    nombre: string;
    tipo: string;
    descripcion: string;
    meses: string[];
    regiones: string[];
    imagen: string;
  };
}

export default function Card({ product }: Readonly<CardProps>) {
  
  const handleRedirect = () => {
    window.location.href = `/product/${encodeURIComponent(product.nombre)}`;
  }

  return (
    <button className='image-container' onClick={handleRedirect}>
      <img src={product.imagen || './icons/placeholder-image.png'} alt={product.nombre} className='card-image' />
      <img src='./icons/more-info.svg' alt='more icon' className='icon-overlay' />
    </button>
  )
}