// import logo from './logo.svg';
import './App.css';
import CommunityPage from './components/CommunityPage';
import HomePage from './components/HomePage';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SearchPage from './components/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<CommunityPage/>} />
        <Route exact path='/home' element={<HomePage/>} />
        <Route exact path='/community' element={<CommunityPage/>} />
        <Route exact path='/searchPage' element={<SearchPage/>}/>
        <Route exact path='/courses' element={<SearchPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
