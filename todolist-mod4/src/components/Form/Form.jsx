// import { useState } from "react";
import "./Form.css";

export function Form() {
  const anime = {
    title: event.target.title,
    protagonist: event.target.protagonist,
    gender: event.target.gender,
    year: event.target.year,
    characters: [],
  };

  return (
    <div className="form">
      <form>
        <section>
          <span>Title:</span>
          <input className="input" type="text" name="title"></input>
        </section>
        <section>
          <span>Protagonist:</span>
          <input className="input" type="text" name="protagonist"></input>
        </section>
        <section>
          <span>Gender:</span>
          <input className="input" type="text" name="gender"></input>
        </section>
        <section>
          <span>Year:</span>
          <input className="input" type="number" name="year"></input>
        </section>
        <button className="btn__submit" type="submit" >Submit</button>
      </form>
    </div>
  );
}
