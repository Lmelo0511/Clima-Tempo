import {useState} from "react";
import { IoIosSearch } from "react-icons/io";
import axios from "axios"
import { WiHumidity } from "react-icons/wi";
import { FaRegEye } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";

export const App = () => {

  const [input, setInput] = useState();
  const [cidade, setCidade] = useState();

  const pais = cidade != null ? cidade.sys.country : "";
  const city = cidade != null ? cidade.name : "";
  const temperatura = cidade != null ? cidade.main.temp : "";
  const estado = cidade != null ? cidade.weather[0].description : "";
  const tempMax = cidade != null ? cidade.main.temp_max : "";
  const tempMin = cidade != null ? cidade.main.temp_min : "";
  const umidade = cidade != null ? cidade.main.humidity : "";
  const velocidadeVento = cidade != null ? cidade.wind.speed : "";
  const rajadasVento = cidade != null ? cidade.wind.deg : "";
  const visibilidade = cidade != null ? cidade.visibility : "";
  const pressao = cidade != null ? cidade.main.pressure : "";
  const nuvens = cidade != null ? cidade.clouds.all : "";

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
      console.log(resposta);
      console.log(cidade)
    } catch {
      alert("Erro ao buscar a cidade! Verifique novamente.");
      setInput("");
    }
  }

  return(
    <>
      <div className="preencherCidade">
        <div className="inputeEPesquisa resultado">
          <input className="pesquisa resultado" placeholder="Informe sua cidade: " value={input} onChange={(e) => setInput(e.target.value)}></input>
          <button className="botaoPesquisa resultado" onClick={enviandoDados}><IoIosSearch className="resultado" color="white" size={30}/></button>
        </div>
        <br></br>
        <div className="widgetInformacao1">
          <span>{pais} - {city}</span>
          <span className="Temperatura">{temperatura}</span>
          <span>{estado}</span>          
          <div className="maxEMin">
            <span>Máx: {tempMax}</span>
            <span>Min: {tempMin}</span>
          </div>
        </div> 
        <br></br>
        <div className="umidadeEVento">
          <div className="umidade">
            <span className="resultado"><WiHumidity className="resultado" color="white" size={17}/>Umidade:</span>
            <span className="unidadeMedida resultado">{umidade}%</span>
          </div>
          <div className="vento">
            <span className="resultado">{velocidadeVento} km/h Vento</span>
            <hr></hr>
            <span className="resultado">{rajadasVento} Rajadas</span>
          </div>
        </div>
        <br></br>
        <div className="visibilidadeEPressao">
          <span className="resultado"><FaRegEye className="resultado" size={17} color="white"/> Visibilidade: </span>
          <span className="unidadeMedida3 resultado">{visibilidade}</span>
          <hr></hr>
          <span className="resultado">Pressão: </span>
          <span className="unidadeMedida3 resultado">{pressao}</span>
        </div>
        <br></br>
        <div className="pressao">
          <span className="resultado"><FaCloud className="resultado" size={17} color="white"/> Densidade de Nuvens:</span>
          <span className="unidadeMedida2 resultado">{nuvens}%</span>
        </div>
      </div>
    </>
  )

}

export default App;
