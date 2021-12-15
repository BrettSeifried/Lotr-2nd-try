// impoert FilmList
//import {fetchFilms}
import React, { useState, useEffect } from 'react';
import FilmList from '../../components/FilmsList';
import { fetchFilms } from '../../services/films';

export default function Films() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const ffetchData = async () => {
      const data = await fetchFilms();
      setData(data);
    };
    ffetchData();
  }, []);

  return (
    <div>
      <h1>Films</h1>
      <FilmList films={data} />
    </div>
  );
}
//export Films
//const data, setData
//useEffect
//const fetchData
//const data
//setData(data)
//fetchData()
//}, []);

//return div
// h1
//<FilmList
