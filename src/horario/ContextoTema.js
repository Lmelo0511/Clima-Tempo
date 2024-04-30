import React, { createContext } from "react";

export const ContextoTema = createContext();

export const ProvedorTema = ({children}) => {

    let imagemUrl;
    const hora = new Date();
    const mostrandoHora = hora.getHours();

    if (mostrandoHora > 6 && mostrandoHora < 10) {
        imagemUrl = require(`../Imagens/photo-1677246646620-d4c82db03775.avif`);
    } else if (mostrandoHora >= 11 && mostrandoHora < 16) {
        imagemUrl = require(`../Imagens/pexels-tugba-19754770.jpg`);
    } else if (mostrandoHora >= 16 && mostrandoHora < 18) {
        imagemUrl = require(`../Imagens/sunset-evening-sun-36502.jpg`);
    } else {
        imagemUrl = require(`../Imagens/19493808-ceu-noturno-com-muitas-estrelas-fundo-de-natureza-abstrata-com-poeira-estelar-no-universo-profundo-ilustracaoial-vetor.jpg`);
    };
    
    const estiloFundo = {
        backgroundImage: `url(${imagemUrl})`,
        backgroundSize: "cover",
        backgroundPposition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        borderRadius: "10px",
        height: "100vh",
    };

    return (
        <ContextoTema.Provider value={{estiloFundo}}>{children}</ContextoTema.Provider>
    );
};
