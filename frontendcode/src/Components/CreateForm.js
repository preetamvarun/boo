import '../styles/books.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateForm = () => {
  const [title, setTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [pageCount, setPageCount] = useState('');
  const [createBookData, setCreateBookData] = useState(false);

  const handleCreate = async () => {
    if (
      title.trim() === '' ||
      authorName.trim() === '' ||
      pageCount.trim() === ''
    ) {
      setCreateBookData(false);
      return;
    } else {
      const newBookData = {
        title,
        authorName,
        pageCount,
      };
      const response = await fetch('http://localhost:8080/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBookData),
      });

      if (!response.ok) {
        throw new Error('Http Error : ' + response.status);
      } else {
        setCreateBookData(true);
      }
    }
  };

  return (
    <div className='form-container newBook'>
      <form>
        <div>
          <label>Title</label>
          <input
            type='text'
            min={1}
            onChange={(e) => setTitle(e.target.value)}></input>
        </div>
        <div>
          <label>Author Name</label>
          <input
            type='text'
            minLength={1}
            onChange={(e) => setAuthorName(e.target.value)}></input>
        </div>
        <div>
          <label>Page Count</label>
          <input
            type='number'
            min={1}
            onChange={(e) => setPageCount(e.target.value)}></input>
        </div>
        {!createBookData && (
          <button type='button' className='btn' onClick={handleCreate}>
            Create
          </button>
        )}
      </form>

      {!createBookData ? (
        <p id='msg1'>Fill out the form to create a book</p>
      ) : (
        <p id='msg2'>New book has been created</p>
      )}

      {createBookData && (
        <Link to='/' className='btn btn-link'>
          {' '}
          Go To Books{' '}
        </Link>
      )}
    </div>
  );
};

export default CreateForm;
