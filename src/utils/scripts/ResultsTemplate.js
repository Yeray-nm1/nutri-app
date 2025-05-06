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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                <p>${product.meses.join(', ')}</p>
              </div>
              <hr />
              <p><strong>Valores nutricionales:</strong> ${product.valores}</p>
              <div class="container-months">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                </svg>
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
