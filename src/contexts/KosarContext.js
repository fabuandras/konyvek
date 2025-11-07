import { createContext } from "react";
import { konyvLista } from "../adat";
import { useState } from "react";

export const KosarContext = createContext("")

export const Kosarprovider = ({ children }) => {

    const [kosarLista, setKosarLista] = useState([])
    function kosarba(adat) {
        const sl = [...kosarLista]
        sl.push(konyvLista[adat])
        setKosarLista([...sl])
        console.log(kosarLista)
    }

    return <KosarContext.Provider value={{konyvLista, konyvLista, kosarba}}>
        {children}
    </KosarContext.Provider>
}