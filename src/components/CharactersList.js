//export CharacterList ({ characters })
// return
//Section
//.map characters
//div className and key
//a wiki URL
//pbirth - death

// FROM DEMO CODE
import React from 'react';

export default function CharacterList({ characters }) {
  return (
    <section className="characters">
      {characters.map((char) => (
        <div className="character" key={char.name}>
          <a href={char.wikiUrl}>{char.name}</a>
          <p>{char.dates}</p>
        </div>
      ))}
    </section>
  );
}
