import { Link } from 'react-router-dom';
import '../styles/books.css';
import { Titles } from '../utilities/data';
import BookRow from './BookRow';

const BooksTable = ({ booksData, deleteBook }) => {
  return (
    <div className='main-container'>
      <Link to='/createNewBook' className='create'>
        CREATE A NEW BOOK
      </Link>
      <div className='row'>
        {Titles.map((eachTitle) => (
          <p key={eachTitle}>{eachTitle}</p>
        ))}
      </div>
      {booksData.map((eachBook) => (
        <BookRow {...eachBook} key={eachBook.id} deleteBook={deleteBook} />
      ))}
    </div>
  );
};

export default BooksTable;
