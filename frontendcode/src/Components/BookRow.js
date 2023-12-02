import { Link } from 'react-router-dom';

const BookRow = ({ id, title, authorName, pageCount, deleteBook }) => {
  const handleDelete = async () => {
    // MAKE A DELETE REQUEST TO OUR SPRING-BOOT API
    const response = await fetch(`http://localhost:8080/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Http Error ', response.status);
    } else {
      deleteBook(id);
    }
  };

  return (
    <div className='row'>
      <p>{id}</p>
      <p>{title}</p>
      <p>{authorName}</p>
      <p>{pageCount}</p>
      <p>
        <Link to={`/book/${id}`} className='up-btn'>
          Update
        </Link>
      </p>
      <p>
        <button type='button' onClick={handleDelete} className='del-btn'>
          Delete
        </button>
      </p>
    </div>
  );
};

export default BookRow;
