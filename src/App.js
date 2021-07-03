import './App.css';
import Header from './components/header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useEffect, useState,createContext } from 'react';

export const AlthContext = createContext();


function App() {
  const [ location, setLocation ] = useState({});

  useEffect(()=>{
    getLocation();
  },[]);

  async function getLocation(){
    if('geolocation' in navigator){
      await navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position);
        const location ={
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        setLocation(location);
        console.log(location);
      }, function (error){
        console.log(error);
      });
    }else{
      alert('Ops, não foi possivel pegar localização');
    }
  }

  return (
    <div className="App">
      <Header />

      <AlthContext.Provider value={{location}}>
      <Main />
      </AlthContext.Provider>

      <Footer />
    </div>
  );
}

export default App;
