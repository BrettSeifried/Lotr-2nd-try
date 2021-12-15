import React from 'react';

export default function BookList({ books }) {
  return (
    <section className="books">
      {books.map((b) => (
        <div className="book" key={b.id}>
          <p>{b.title}</p>
          <p>{b.created_at}</p>
        </div>
      ))}
    </section>
  );
}
