import "./App.css";
import { useImagenGato } from "./Hooks/useImagenGato";
import { useCatFact } from "./Hooks/useCatFact";
import { Otro } from "./Components/Otro";


export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imagen } = useImagenGato({ fact });

  const handleClick = async () => {
    refreshFact()
  };
  return (
    <main>
      <h1>WEB DE GATITOS</h1>
      <button onClick={handleClick}>Refrescar</button>
      <section>
        {fact && <p>{fact}</p>}
        {imagen && (
          <img
            src={imagen}
            alt={`imagen obtenida usando las primeras palabras de ${fact}`}
          />
        )}
      </section>
      <Otro />  
    </main>
  );
}
