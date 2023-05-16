import { useCart } from "../Hooks/useCart";
import { useFilters } from "../Hooks/useFilters";
import "./Footer.css";

export function Footer() {
  // const { filters } = useFilters()
  const filters = useFilters();
  const cart = useCart().cart;
  return (
    <footer className="footer">
       <h4>
        Prueba técnica de React ⚛️
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
      {
        //JSON.stringify(filters, null, 2)
      }
      {
        // JSON.stringify(cart, null, 2)
      }
    </footer>
  );
}
