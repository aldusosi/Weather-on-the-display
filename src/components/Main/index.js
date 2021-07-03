import './style.css';
import Button from '../Button';
import Card from '../Card';
import { useState, useContext } from 'react';
import { AlthContext } from '../../App';

function Main(){
    const { location } = useContext(AlthContext);
    const apiKey = 'f30b10daf097f6fead752080e375d690';
    const { latitude, longitude } = location;
    const [dadosMeteorologicos, setDadosMeteorologicos] = useState({});

    async function handleClick(){
        console.log(apiKey);
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f30b10daf097f6fead752080e375d690`);

            const data = await response.json();

            const objectMeteorologia = {
                time:data.dt,
                name:data.name,
                temperaturaMin:(data.main.temp_min - 273.15).toFixed(1),
                temperaturaMax:(data.main.temp_max -273.15).toFixed(1),
                humidade:data.main.humidity,
                ambiente:data.weather[0].main,
                description:data.weather[0].description,
            }
            console.log(data);
            console.log(objectMeteorologia);
            setDadosMeteorologicos(objectMeteorologia);
        } catch (error) {
            console.log(error)
        }
        
    }

    return(
        <main>
            <Button handleClick={ handleClick }/>

            <Card dadosMeteorologicos={dadosMeteorologicos}/>
         </main>
    )
}

export default Main;