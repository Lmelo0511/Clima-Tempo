import {useState} from "react";
import { IoIosSearch } from "react-icons/io";
import axios from "axios"

export const App = () => {

  const [input, setInput] = useState();
  
  async function enviandoDados(e){
    
    const chaveURL = "25ef575f9e153a5836e6ca22640a992d"

    const API = axios.create({

      baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${chaveURL}&lang=pt_br`
    
    });

    if(input === ""){
      alert("Por favor, preencha o campo abaixo!");
      e.preventDefault();
      return;
    }
    
    try{
      const resposta = await API.get();
      console.log(resposta.data);
    } catch {
      alert("Erro ao buscar a cidade! Verifique novamente.");
      setInput("");
    }
  }

  return(
    <>
      <div className="preencherCidade">
        <h1 className="titulo">ClimaTempo</h1>
        <div className="inputeEPesquisa">
          <input className="pesquisa" placeholder="Informe sua cidade: " value={input} onChange={(e) => setInput(e.target.value)}></input>
          <button className="botaoPesquisa" onClick={enviandoDados}><IoIosSearch color="white" size={30}/></button>
        </div>
      </div>
    </>
  )
}

export default App;
