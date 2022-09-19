import 'Card.css';

export function Card(title , protagonist , gender , year) {
    return (
        <div className='Card__container'>
            <h2>{title}</h2>
            <section className='card__infos'>
                <span className='card__span'>Protagonist: </span>
                <h3>{protagonist}</h3>
            </section>
            <section className='card__infos'>
                <span className='card__span'>Gender: </span>
                <h3>{gender}</h3>
            </section>
            <section className='card__infos'>
                <span className='card__span'>Year: </span>
                <h3>{year}</h3>
            </section>
        </div>
    )
}
import "./card.css";

// export function Card({ gender, protagonist, year, title }) {
//   return (
//     <div className="card-component">
//       <h2>{title}</h2>
//       <section className="card-infos">
//         <span className="card-span">Protagonist:</span>
//         <h3>{protagonist}</h3>
//       </section>
//       <section className="card-infos">
//         <span className="card-span">Gender:</span>
//         <h3>{gender}</h3>
//       </section>
//       <section className="card-infos">
//         <span className="card-span">Year:</span>
//         <h3>{year}</h3>
//       </section>
//     </div>
//   );
// }