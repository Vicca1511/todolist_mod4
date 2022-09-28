import "./Card.css";

export function Card() {
  return (
    <div className="card">
      <h2>Title Name</h2>

      <section className="card__item">
        <span className="card__name">Protagonist:</span>
        <p>Prota Name</p>
      </section>
      <section className="card__item">
        <span className="card__name">Gender:</span>
        <p>Prota Gender</p>
      </section>

      <h2>Title</h2>
      <section className="card__item">
        <span className="card__name">Year:</span>
        <p>Anime Year</p>
      </section>
    </div>
  );
}
