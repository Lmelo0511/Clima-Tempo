import {useState} from "react";
import { IoIosSearch } from "react-icons/io";
import axios from "axios"
import { WiHumidity } from "react-icons/wi";
import { FaRegEye } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";

export const App = () => {

  const [input, setInput] = useState();
  const [cidade, setCidade] = useState({});
  
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
      setCidade(resposta.data);
      console.log(resposta.data);
    } catch {
      alert("Erro ao buscar a cidade! Verifique novamente.");
      setInput("");
    }
  }

  return(
    <>
      <div className="preencherCidade">
        <div className="inputeEPesquisa">
          <input className="pesquisa resultado" placeholder="Informe sua cidade: " value={input} onChange={(e) => setInput(e.target.value)}></input>
          <button className="botaoPesquisa resultado" onClick={enviandoDados}><IoIosSearch className="resultado" color="white" size={30}/></button>
        </div>
        <br></br>
        <div className="widgetInformacao1">
          <span>{cidade.sys.country} - {cidade.name}</span>
          <span className="Temperatura">{cidade.main.temp}</span>
          <span>{cidade.weather[0].description}</span>
          <div className="maxEMin">
            <span>{cidade.main.temp_max}</span>
            <span>{cidade.main.temp_min}</span>
          </div>
        </div>
        <br></br>
        <div className="umidadeEVento">
          <div className="umidade">
            <span className="resultado"><WiHumidity className="resultado" color="white" size={25}/>Umidade:</span>
            <span className="unidadeMedida resultado">{cidade.main.humidity}</span>
          </div>
          <div className="vento">
            <span className="resultado">{cidade.wind.deg}</span>
            <hr></hr>
            <span className="resultado">{cidade.wind.speed}</span>
          </div>
        </div>
        <br></br>
        <div className="visibilidadeEPressao">
          <span className="resultado"><FaRegEye className="resultado" size={17} color="white"/> Visibilidade: </span>
          <span className="unidadeMedida3 resultado">{cidade.visibility}</span>
          <hr></hr>
          <span className="resultado">Pressão: </span>
          <span className="unidadeMedida3 resultado">{cidade.main.pressure}</span>
        </div>
        <br></br>
        <div className="nuvens">
          <span className="resultado"><FaCloud className="resultado" size={17} color="white"/> Cobertura de Nuvens:</span>
          <span className="unidadeMedida2 resultado">{cidade.clouds.all}</span>
        </div>
      </div>
    </>
  )
}

export default App;
