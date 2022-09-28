import './Card.css';


export function Card({ gender, protagonist, year, title }) {
  return (
    <div className="card">
      <h2 className='card__title'>{title}</h2>
      <section className="card__item">
        <span className="card__span">Protagonist:</span>
        <h3>{protagonist}</h3>
      </section>
      <section className="card__item">
        <span className="card-span">Gender:</span>
        <h3>{gender}</h3>
      </section>
      <section className="card__item">
        <span className="card-span">Year:</span>
        <h3>{year}</h3>
      </section>
    </div>
  );
}