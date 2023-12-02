import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useBookData from '../Hooks/useBookData';
import '../styles/books.css';

const BookForm = () => {
  const { id } = useParams();

  const bookInfo = useBookData(id);

  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);

  const [title, setTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [pageCount, setPageCount] = useState('');

  useEffect(() => {
    setTitle(bookInfo?.title || '');
    setAuthorName(bookInfo?.authorName || '');
    setPageCount(bookInfo?.pageCount || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookInfo]);

  const handleUpdate = async () => {
    // Updated Book Data Object
    const updatedBookData = {
      id,
      title,
      authorName,
      pageCount,
    };

    // Make the PUT REQUEST FROM SPRING-BOOT API END POINT
    const response = await fetch(`http://localhost:8080/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBookData),
    });

    // If the response is not ok then we will throw an error
    if (!response.ok) {
      throw new Error(`HTTP ERROR : ${response.status}`);
    } else {
      setIsUpdateSuccess(true);
    }
  };

  return !bookInfo ? (
    <p>Getting Form</p>
  ) : (
    <div>
      <h1 style={{ textAlign: 'center' }}>UPDATE BOOK DATA</h1>
      <form>
        <div className='form-container'>
          <div>
            <label>ID (READ-ONLY)</label>
            <input type='number' value={id} readOnly />
          </div>
          <div>
            <label>Title</label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isUpdateSuccess ? true : false}
            />
          </div>
          <div>
            <label>Author Name</label>
            <input
              type='text'
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              disabled={isUpdateSuccess ? true : false}
            />
          </div>
          <div>
            <label>Page Count</label>
            <input
              type='number'
              value={pageCount}
              onChange={(e) => setPageCount(e.target.value)}
              disabled={isUpdateSuccess ? true : false}
            />
          </div>

          {!isUpdateSuccess && (
            <button type='button' className='btn' onClick={handleUpdate}>
              UPDATE
            </button>
          )}

          {isUpdateSuccess && (
            <Link to='/' className='btn btn-link'>
              GO TO BOOKS
            </Link>
          )}

          {isUpdateSuccess && <p id='msg'>Book has been updated succesfully</p>}
        </div>
      </form>
    </div>
  );
};

export default BookForm;
