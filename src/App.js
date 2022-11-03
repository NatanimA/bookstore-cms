import BookPage from "./components/BookPage";
import NavBar from "./components/NavBar";
import { Routes , Route } from 'react-router-dom'
import Categories from "./components/Categories";
function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
            <Route exact path="/" element={<BookPage />}></Route>
            <Route path="/categories" element={<Categories />}></Route>
        </Routes>
        
    </div>
  );
}

export default App;
