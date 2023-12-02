import { useEffect, useState } from 'react';
import useBooksData from '../Hooks/useBooksData';
import BooksTable from './BooksTable';

const BooksBox = () => {
  const booksJson = useBooksData();

  const [booksData, setBooksData] = useState(null);

  const [updatedBooksData, setUpdatedBooksData] = useState('');

  useEffect(() => {
    setBooksData(booksJson?._embedded?.books);

    // Initially updated books data === books data
    setUpdatedBooksData(booksJson?._embedded?.books);
  }, [booksJson]);

  const handleDelete = (id) => {
    const newData = updatedBooksData.filter((eachBook) => eachBook.id !== id);
    setUpdatedBooksData(newData);
  };

  return !booksData ? (
    <p>Getting books data</p>
  ) : (
    <div>
      <h1 style={{ textAlign: 'center', margin: '1.25rem' }}>
        Books Management System
      </h1>
      <BooksTable booksData={updatedBooksData} deleteBook={handleDelete} />
    </div>
  );
};

export default BooksBox;
