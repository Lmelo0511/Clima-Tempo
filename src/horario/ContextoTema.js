import React, { createContext } from "react";

export const ContextoTema = createContext();

export const ProvedorTema = ({children}) => {

    let imagemUrl;
    const hora = new Date();
    const mostrandoHora = hora.getHours();

    if (mostrandoHora > 6 && mostrandoHora < 15) {
        imagemUrl = require(`../Imagens/nuvens-no-ceu-com-sol-e-nuvens_896360-20939.avif`);
    } else if (mostrandoHora >= 15 && mostrandoHora < 18) {
        imagemUrl = require(`../Imagens/sunset-evening-sun-36502.jpg`);
    } else {
        imagemUrl = require(`../Imagens/19493808-ceu-noturno-com-muitas-estrelas-fundo-de-natureza-abstrata-com-poeira-estelar-no-universo-profundo-ilustracaoial-vetor.jpg`);
    }

    const estiloFundo = {
        backgroundImage: `url(${imagemUrl})`,
        backgroundSize: "cover",
        backgroundPposition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        borderRadius: "10px",
        height: "132vh",
    };

    return (
        <ContextoTema.Provider value={{estiloFundo}}>{children}</ContextoTema.Provider>
    );
};
