export function renderResults(products, tipos) {
  if (products.length === 0) {
    return `
      <p>No se encontraron productos que coincidan con los criterios de búsqueda.</p>
    `;
  } else {
    return `
  <header class="container-head">
    <h2>Productos disponibles</h2>
    <aside class="tags">
      ${tipos
        .map((tag) => `<div class="tag-info"><p>${tag}</p></div>`)
        .join('')}
    </aside>
  </header>
      <section class="cards">
        ${products
          .map(
            (product) => `
          <article class="card">
            <section class="image-container">
              <img
                src="${product.image}"
                alt="${product.nombre}"
                loading="lazy"
                width="100%"
                height="50%"
                class="card-image"
              />
              <p>Tipo: ${product.tipo}</p>
            </section>

            <section class="info-container">
              <h3>${product.nombre}</h3>
              <div class="container-months">
                <CalendarIcon />
                <p>${product.meses.join(', ')}</p>
              </div>
              <hr />
              <p><strong>Valores nutricionales:</strong> ${product.valores}</p>
              <div class="container-months">
                <RegionIcon />
                <p>${product.region.join(', ')}</p>
              </div>
            </section>
          </article>
        `
          )
          .join('')}
      </section>
  `;
  }
}
