// import CharacterList, Controls {fetchCharacters}
import React, { useEffect, useState } from 'react';
import CharacterList from '../../components/CharactersList';
import Controls from '../../components/Controls';
import { fetchCharacters } from '../../services/characters';
//export Characters
export default function Characters() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [race, setRace] = useState('All');
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race);
      setData(data);
    };
    fetchData();
  }, [race]);
  const handleClick = async () => {
    const data = await fetchCharacters(race, query);
    setData(data);
  };

  return (
    <div>
      <h1>Characters</h1>
      <Controls {...{ query, setQuery, race, setRace, handleClick }} />
      <CharacterList characters={data} />
    </div>
  );
}
//const data, querty, race
//useEffect
//fetchdata = async
//const data
//fethdata
//}, [race]);

// const handleClick = async

//return
//div
//h1
//<Controls {...{ query, setQuery, race, setRace, handleClick}}
// <CharacterList
