import { useState,useEffect } from "react";
import { getRandomfact } from "../Services/facts";
export function useCatFact () {
    const [fact, setFact] = useState();
    const refreshFact = () => {
      getRandomfact().then(setFact);
    };
    
    useEffect(refreshFact, []);
  
    return { fact, refreshFact };
  };