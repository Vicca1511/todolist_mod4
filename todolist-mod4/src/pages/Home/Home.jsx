import "./Home.css";
import { Card } from "../.././components/Card/Card";
import { api } from "../.././utils/api/api";
import { useState, useEffect } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
   overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
   }
};
Modal.setAppElement("#root");
export function Home() {
  const [animesList, setAnimesList] = useState([]);
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  async function getAnimes() {
    const animes = await api.getAllAnimes();
    setAnimesList(animes);
  }

  function handleModal() {
    setmodalIsOpen(!modalIsOpen);
  }

  useEffect(() => {
    getAnimes();
  }, []);

  return (
    <>
      <div className="Card__container">
        {animesList.map((item, index) => {
          return (
            <button
              className="button__card card"
              key={index}
              onClick={() => handleModal()}
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
        ;
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Card structure"
      >
        <section>
          
        </section>
      </Modal>
    </>
  );
}
