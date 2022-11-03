import { Routes, Route } from 'react-router-dom';
import BookPage from './components/BookPage';
import NavBar from './components/NavBar';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<BookPage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>

    </div>
  );
}

export default App;
