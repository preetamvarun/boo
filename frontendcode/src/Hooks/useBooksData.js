import { useState, useEffect } from 'react';

const useBooksData = () => {
  const [books, setBooks] = useState(null);

  async function getBooks() {
    const data = await fetch('http://localhost:8080/books');
    const json = await data.json();
    setBooks(json);
  }

  useEffect(() => {
    getBooks();
  }, []);

  return books;
};

export default useBooksData;
