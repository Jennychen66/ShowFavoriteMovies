
import { Route, Routes } from 'react-router-dom';
import './css/App.css'
import Home from './pages/Home'
import Favorite from './pages/Favorite';
import LazyLoad from './pages/LazyLoad';
import NavBar from './component/navBar';
import { MovieProvider } from './context/MovieContext';

function App() {

  return (
    <MovieProvider>
      <NavBar></NavBar>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/lazyload" element={<LazyLoad />} />
      </Routes>
    </MovieProvider>
  )
}

function Text({ display }) {
  return (
    <div className="text">
      <p>{display}</p>
    </div>
  )
}

export default App
