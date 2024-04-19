import API from "./serviços/api";
import {useState} from "react";
import { IoIosSearch } from "react-icons/io";

export const App = () => {

  const [input, setInput] = useState();
  const [cidade, setCidade] = useState({});

  async function enviandoDados(){

    if(input === ""){
      alert("Por favor, preencha o campo abaixo!");
    }

    try{
      const resposta = await API.get(`${input}/json`);
      setCidade(resposta.data);
    } catch {
      alert("Erro ao buscar a cidade! Verifique novamente.");
      setInput("");
    }
  }

  return(
    <>
      <div>

        <input className="pesquisa" placeholder="Informe sua cidade: " value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button className="botaoPesquisa" onClick={enviandoDados}><IoIosSearch color="white" size={30}/></button>

      </div>
    </>
  )
}

export default App;
