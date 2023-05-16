import { useId } from "react";
import { useFilters } from "../Hooks/useFilters";
import "./Filters.css";

export function Filters() {
  const { filters,setFilters } = useFilters();
  //USO DE useId PARA LOS ELEMENTOS EXTRAÍDOS CON .MAP
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {

    setFilters((estadoAnterior) => ({
      ...estadoAnterior,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((estadoAnterior) => ({
      ...estadoAnterior,
      category: event.target.value,
    }));
  };
  return (
    <section className="filters">
      <div>
        <label htmlFor="minPriceFilterId">Price</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor="categoryId">Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Móviles</option>
        </select>
      </div>
    </section>
  );
}
