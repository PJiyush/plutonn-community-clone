// import logo from './logo.svg';
import './App.css';
import CenterPart from './components/CenterPart';
import LeftPart from './components/LeftPart';
import Navbar from './components/Navbar';
import RightPart from './components/RightPart';

function App() {
  return (
    <>
    <div className='navDiv'><Navbar/></div>
    <div className='divisions'>
      <div className='leftPart' > <LeftPart/> </div>
      <div className='centerPart' ><CenterPart/></div>
      <div className='rightPart' ><RightPart/></div>
    </div>
    </>
  );
}

export default App;
