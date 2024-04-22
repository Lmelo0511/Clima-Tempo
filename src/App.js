import {useState} from "react";
import { IoIosSearch } from "react-icons/io";
import axios from "axios"
import { WiHumidity } from "react-icons/wi";
import { FaRegEye } from "react-icons/fa";

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
      console.log(resposta);
    } catch {
      alert("Erro ao buscar a cidade! Verifique novamente.");
      setInput("");
    }
  }

  return(
    <>
      <div className="preencherCidade">
        <div className="inputeEPesquisa">
          <input className="pesquisa" placeholder="Informe sua cidade: " value={input} onChange={(e) => setInput(e.target.value)}></input>
          <button className="botaoPesquisa" onClick={enviandoDados}><IoIosSearch color="white" size={30}/></button>
        </div>
        <br></br>
        <div className="widgetInformacao1">
          <span>Brasil - São Paulo</span>
          <span className="Temperatura">25°</span>
          <span>Nublado</span>
          <div className="maxEMin">
            <span>Máx.: 26</span>
            <span>Min.: 22</span>
          </div>
        </div>
        <br></br>
        <div className="umidadeEVento">
          <div className="umidade">
            <span><WiHumidity color="white" size={17}/>Umidade:</span>
            <span className="unidadeMedida">71%</span>
          </div>
          <div className="vento">
            <span>0.76 km/h Vento</span>
            <hr></hr>
            <span>1.42 km/h Rajadas</span>
          </div>
        </div>
        <br></br>
        <div className="visibilidade">
          <span><FaRegEye size={17} color="white"/>Visibilidade: </span>
          <span className="unidadeMedida2">10000</span>
          <span>Pressão: </span>
        </div>
        <div className="pressao">

        </div>
      </div>
    </>
  )
}

export default App;
