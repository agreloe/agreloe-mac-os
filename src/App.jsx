import './assets/stylesheets/App.scss';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="App">
      <div className='App__topbar'>
        <Topbar />
      </div>
      <div className='App__navbar'>
      <Navbar />
      </div>
    </div>
  );
}

export default App;
