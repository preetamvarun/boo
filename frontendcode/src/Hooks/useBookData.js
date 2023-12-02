import { useEffect, useState } from 'react';

const useBookData = (id) => {
  const [bookData, setBookData] = useState(null);

  async function getBookData() {
    const data = await fetch(`http://localhost:8080/books/${id}`);
    const json = await data.json();
    setBookData(json);
  }

  useEffect(() => {
    getBookData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return bookData;
};

export default useBookData;
