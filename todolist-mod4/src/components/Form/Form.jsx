import { useState } from "react";
import "./Form.css";

export function Form() {
  const [newAnime, setNewAnime] = useState();

  function handleForm(event) {
    event.preventDefault();

    setNewAnime({ ...newAnime, characters: [] });
  }
  
  return (
    <div className="form">
      <form className="form__card" onSubmit={handleForm}>
        <section>
          <div>
            <span>Title:</span>
            <input
              type="text"
              name="title"
              onChange={(event) => {
                setNewAnime({ ...newAnime, title: event.target.value });
              }}
            ></input>
          </div>
        </section>
        <section>
          <div>
            <span>Protagonist:</span>
            <input
              type="text"
              name="protagonist"
              onChange={(event) => {
                setNewAnime({ ...newAnime, protagonist: event.target.value });
              }}
            ></input>
          </div>
        </section>
        <section>
          <div>
            <span>Gender:</span>
            <input
              type="text"
              name="gender"
              onChange={(event) => {
                setNewAnime({ ...newAnime, gender: event.target.value });
              }}
            ></input>
          </div>
        </section>
        <section>
          <div>
            <span>Year:</span>
            <input
              type="number"
              name="year"
              onChange={(event) => {
                setNewAnime({ ...newAnime, year: event.target.value });
              }}
            ></input>
          </div>
          <button type="submit" className="btn__submit">
            SUBMIT{" "}
          </button>
        </section>
      </form>
    </div>
  );
}
