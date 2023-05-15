import { useImagenGato } from "../Hooks/useImagenGato";

export function Otro(){
    const {imagen} = useImagenGato({fact: 'esto es una prueba'})

    return(
        <>
            {imagen && <img src={imagen} />}
        </>
    )
}