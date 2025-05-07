import CalendarIcon from '@icons/CalendarIcon'
import RegionIcon from '@icons/RegionIcon'

export interface CardProps {
  name: string;
  type: string;
  description: string;
  months: string[];
  regions: string[];
  image: string;
}

export default function Card({ name, type, description, months, regions, image }: Readonly<CardProps>) {
  return (
    <article className="card">
      <section className="image-container">
        <img
          src={image}
          alt={name}
          loading="lazy"
          width="100%"
          height="50%"
          className="card-image"
        />
        <p>Tipo: {type}</p>
      </section>

      <section className="info-container">
        <h3>{name}</h3>
        <div className="container-months">
          <CalendarIcon />
          <p>{months.join(', ')}</p>
        </div>
        <hr />
        <p><strong>Valores nutricionales:</strong> {description}</p>
        <div className="container-months">
          <RegionIcon />
          <p>{regions.join(', ')}</p>
        </div>
      </section>
    </article>
  )
}