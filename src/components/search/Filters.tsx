interface FiltersProps {
  tipos: string[];
}

export default function Filters({ tipos }: Readonly<FiltersProps>) {
  return (
    <fieldset className="filtro">
      <span>Tipo: </span>
      {
        tipos.map((tipo) => (
          <div key={tipo} className="checkbox-container">
            <input className="checkbox" type="checkbox" name="tipo" value={tipo} id={tipo} />
            <label htmlFor="tipo">{tipo}</label>
          </div>
        ))
      }
    </fieldset>
  )
}