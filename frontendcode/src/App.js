import './App.css';
import BooksBox from './Components/BooksBox';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import BookForm from './Components/BookForm';
import Error from './Components/Error';
import CreateForm from './Components/CreateForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BooksBox />} />
        <Route path='/book/:id' element={<BookForm />} />
        <Route path='*' element={<Error />} />
        <Route path='/createNewBook' element={<CreateForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
