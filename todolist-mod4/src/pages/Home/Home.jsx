import "./Home.css";
import { useState , useEffect } from "react";
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
 },[])

  return (
    <>
      <div className="Card__container">
        {animesList.map((item, index) => {
          return <Card key={index} />;
        })}
        ;
      </div>
    </>
  );
}
