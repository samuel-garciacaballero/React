import { useEffect, useState } from "react";

const URL_IMAGENES = "https://cataas.com";
export function useImagenGato({ fact }) {
  const [imagen, setImagen] = useState(null);
  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(" ", 4).join(" ");
    fetch(
      `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(firstWord);
        const { url } = response;
        setImagen(url);
      });
  }, [fact]);
  return { imagen: `${URL_IMAGENES}${imagen}` };
} //Custom hook que devuelve la imgagen
