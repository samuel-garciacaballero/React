import { Footer } from "./Components/Footer";
import "./index.css";
import { TwitterCard } from "./TwitterCard";
import { useState } from "react";

export function App() {
  //ejemplo de introducir parametros unificados en un objeto (no siempre es recomendable hacer esto)
  const samuga = {username: "samuga", arroba: (username) => `@${username}` };
  //Add arroba al username
  const arroba = (username) => `@${username}`;


  return (
    <section className="App">
      <TwitterCard arroba={arroba} username="elenatorro">
        Elena Torro
      </TwitterCard>
      <TwitterCard arroba={arroba} username="midudev">
        midudev
      </TwitterCard>
      <TwitterCard arroba={arroba} username="criskaz">
        Criskaz
      </TwitterCard>
      <TwitterCard {...samuga}>Samuga</TwitterCard>
      <Footer />
    </section>
  );
}
