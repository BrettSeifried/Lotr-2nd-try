//import bookList
import BookList from '../../components/BookList';
import React, { useEffect, useState } from 'react';
//export Books
//useEffect, getBooks
export default function Books() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);
  const getBooks = async () => {
    const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/books`, {
      headers: {
        apikey: process.env.REACT_APP_SUPABASE_KEY,
        Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
      },
    });
    const data = await resp.json();
    setData(data);
  };
  return (
    <div>
      <h1>Books</h1>
      <BookList books={data} />
    </div>
  );
}
//const getBooks
// const resp = awwait fetch FROM DEMO CODE
// setData(data.docs)
//return
//div
//h1
//<BookList books={data} />
