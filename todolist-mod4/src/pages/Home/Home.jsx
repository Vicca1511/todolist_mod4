import "./Home.css";
import { useState, useEffect } from "react";
import { Card } from "../.././components/Card/Card";
import { api } from "../.././utils/api/api";

export function Home() {
  const [animesList, setAnimesList] = useState([]);

  async function getAnimes() {
    const animes = await api.getAllAnimes();
    setAnimesList(animes);
  }

  useEffect(() => {
    getAnimes();
  }, []);

  return (
    
   
      <div className="Card__container">
        {animesList.map((item, index) => {
          return( 
          <button className="button__card card" key={index} onClick={()=> {console.log(item)}}>
            <Card 
            title={item.title} 
            gender={item.gender} 
            protagonist={item.protagonist} 
            year ={item.year} />
      
          </button> 
        )})};
      </div>
    
  );
}
