//section
// map
//div id and image of film
//content
//h1 title
//p totaled at box office

// DEMO CODE from LOTR
import React from 'react';
// export FilmList function

export default function FilmList({ films }) {
  return (
    <section className="films">
      {films.map((film) => (
        <div
          className="film"
          key={film.id}
          style={{ backgroundImage: `url({${process.env.PUBLIC_URL}/films/${film.title}.jpeg` }}
        >
          <div className="content">
            <h1>{film.title}</h1>
            <p>
              {`${film.title} totaled $${film.box_office_total}M at the box office and had ${film.academy_award_nominations} Academyt Award nomination(s)`}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
