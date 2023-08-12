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
        <Route path='/plutonn-community-clone' element={<CommunityPage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/community' element={<CommunityPage/>} />
        <Route path='/searchPage' element={<SearchPage/>}/>
        <Route path='/courses' element={<SearchPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
