import products from '../data/products.json';
import { renderResults } from './ResultsTemplate.js';
import { temporadaMeses } from '../data/seasons.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#search');
  const resultsContainer = document.querySelector('.results');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const region = form.querySelector('select[name="Región"]').value;
    const temporada = form.querySelector('select[name="Temporada"]').value;
    const tipos = form.querySelectorAll('input[name="tipo"]:checked');
    const tiposArray = Array.from(tipos).map((tipo) => tipo.value);

    const mesesTemporada = temporadaMeses[temporada] || [];

    // implementing filter logic
    const filtered = products.filter(product => {
      const matchRegion = !region || product.region.includes(region);
      const matchTemporada = !temporada || mesesTemporada.some(mes =>  product.meses.includes(mes));
      const matchTipo = !tiposArray.length || tiposArray.includes(product.tipo);
      return matchRegion && matchTemporada && matchTipo;
    });

    resultsContainer.innerHTML = renderResults(filtered, tiposArray);
  });
});