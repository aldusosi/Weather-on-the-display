import './style.css';
import { useState, useEffect } from 'react';

function Card({dadosMeteorologicos}){
  //const {name, temperaturaMax, temperaturaMin, time, humidade, ambiente, description} = dadosMeteorologicos;
  const [ informacoes, setInformacoes ] = useState(dadosMeteorologicos);
  console.log(informacoes);

  useEffect(()=>{
    setInformacoes(dadosMeteorologicos);
  },[dadosMeteorologicos]);
    return(
        <div className="card">
          <div className="card-head">
            <div className="date-city">
              <p>Sábado, 03 de julho de 2021</p>
              <h2>{informacoes.name}</h2>
            </div>
            <div className="temperature">
              {informacoes && <p className="display-temperature">{informacoes.temperaturaMin}</p>}
              <p>Temperatura</p>
            </div>
          </div>
          <div className="card-body">
            <div className="dados">
                <div><span> <b>Região:</b> </span> <span>{informacoes.name}</span></div>
                <div><span> <b>Temp. Mínima:</b> </span> <span>{informacoes.temperaturaMin}</span></div>
                <div><span> <b>Temp. Máxima:</b> </span> <span>{informacoes.temperaturaMax}</span></div>
                <div><span> <b>Umidade:</b> </span> <span>{informacoes.humidade}%</span></div>
            </div>
            <div className="condicao-do-tempo">
              <div>
                <p>{informacoes.ambiente}</p>
                <p>{informacoes.description}</p>
              </div>
              
            </div>
          </div>

        </div>
    )
}

export default Card;