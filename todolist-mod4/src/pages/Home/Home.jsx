import { Card } from "../.././components/Card/Card";
import { api } from "../.././utils/api/api";
import { Header } from "../../Header/Header";
import { useState, useEffect } from "react";
import {MdOutlineCloseFullscreen} from "react-icons/md"
import Modal from "react-modal";
import "./Home.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "30rem",
    height: "40rem",
    marginRight: "-50%",
    paddingTop: "30px",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    
    
  },
 
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

 
};
Modal.setAppElement("#root");
export function Home() {
  const [animesList, setAnimeList] = useState([]);
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [oneAnime, setOneAnime] = useState({});

  async function getAnimes() {
    const animes = await api.getAllAnimes();
    setAnimeList(animes);
  }

  function deleteAnime(animeId) {
    api.deleteAnime(animeId);
    const newAnimeList = animesList;
    newAnimeList.map((anime, index) => {
      if (anime.id === animeId) {
        newAnimeList.splice(index, 1);
        setAnimeList(newAnimeList);
        handleModal();
      }
    });
  }

  // async function editAnime(anime) {
  //   const animeEdited = await api.editAnime()
  // }

  function handleModal() {
    setmodalIsOpen(!modalIsOpen);
  }

  useEffect(() => {
    getAnimes();
  }, []);

  return (
    
    <>
      <Header getAll={getAnimes} />
      <div className="Card__container">
        {animesList.map((item, index) => {
          return (
            <button
              className="button__card card"
              onClick={() => {
                setOneAnime(item);
                handleModal();
              }}
              key={index}
            >
              <Card
                title={item.title}
                gender={item.gender}
                protagonist={item.protagonist}
                year={item.year}
              />
            </button>
          );
        })}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Card structure"
      >
        <section className="section__modal">
          <section style={{
            display:"flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%"
          }}>
            <button style={{
              cursor:"pointer",
              backgroundColor: "transparent",
            }} onClick={handleModal}>
              <MdOutlineCloseFullscreen size={30} color={" orange "} />
            </button>
          </section>
          <h2>{oneAnime.title}</h2>
          <ul lassName="card__list">
            <li className="card__listItem">{oneAnime.protagonist}</li>
            <li className="card__listItem">{oneAnime.gender}</li>
            <li className="card__listItem">{oneAnime.year}</li>
            
          </ul>
          <button style={{
              cursor:"pointer",
              backgroundColor: "Green",
              color: "white",
            }} onClick={()=>{
              updateAnime(oneAnime.id)
            }}>Edit</button>
          <button style={{
              cursor:"pointer",
              backgroundColor: "Red",
              color: "white",
            }}onClick={() =>{
            deleteAnime(oneAnime.id)
            handleModal();
          }}>Delete</button>
        </section>
      </Modal>
    </>
  );
}
