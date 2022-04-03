import './assets/stylesheets/App.scss';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Brightness from './components/Brightness';
import Notes from './components/Notes';
import Safari from './components/Safari';
import Mail from './components/Mail';
import Drawings from './components/Drawings';
import { useSelector } from 'react-redux';

function App() {
  const window = useSelector((store)=> store.window);

  return (
    <div id="App" className="App">
      <div className='App__topbar'>
        <Topbar />
      </div>
      {
        window.brightness.isOpen === true && (
          <div className='App__brightness'>
            <Brightness />
          </div>
        )
      }
      {
        window.notes.isOpen === true && (
          <Notes />
        )
      }
      {
        window.safari.isOpen === true && (
          <Safari />
        )
      }
      {
        window.mail.isOpen === true && (
          <Mail />
        )
      }
      {
        window.draw.isOpen === true && (
          <Drawings />
        )
      }
      <div className='App__navbar'>
      <Navbar />
      </div>
    </div>
  );
}

export default App;
