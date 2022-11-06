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
    color: "white",
    
    
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
  const [modalEdit , setModalEdit] = useState(false);

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
  function handleModal() {
    setmodalIsOpen(!modalIsOpen);
  }

  async function updateAnime( e , animeId) {
    e.preventDefault();

    const anime = {
      title: e.target.title.value,
      protagonist: e.target.protagonist.value,
      gender: e.target.gender.value,
      year: e.target.year.value,
      characters: [],
    };
    
    const newAnimeList = animesList;
    newAnimeList.map((item, index) => {
      if (item.id === animeId) {
        console.log(item)
        newAnimeList.splice(index , 1 , item);
        setAnimeList(newAnimeList);
        handleModal();
      }
      
    });
    setModalEdit(false);

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
      >{modalEdit ? 
        <form className="form__card" onSubmit={updateAnime()}>
        <section>
          <div>
            <span>Title:</span>
            <input
              type="text"
              name="title"
              defaultValue={oneAnime.title}
            ></input>
          </div>
        </section>
        <section>
          <div>
            <span>Protagonist:</span>
            <input
              type="text"
              name="protagonist"
              defaultValue={oneAnime.protagonist}
            ></input>
          </div>
        </section>
        <section>
          <div>
            <span>Gender:</span>
            <input
              type="text"
              name="gender"
              defaultValue={oneAnime.gender}
            ></input>
          </div>
        </section>
        <section>
          <div>
            <span>Year:</span>
            <input
              type="number"
              name="year"
              defaultValue={oneAnime.year}
            ></input>
          </div>
          <button type="submit" className="btn__submit " >
            SUBMIT{" "}
          </button>
        </section>
      </form>
        :
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
              setModalEdit(true);
            }}>Edit</button>
          <button style={{
              cursor:"pointer",
              backgroundColor: "Red",
              color: "white",
            }}onClick={() =>{
            deleteAnime(oneAnime.id)
            handleModal();
          }}>Delete</button>
        </section>}
      </Modal>
    </>
  );
}
