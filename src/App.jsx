import React from 'react'
import './assets/stylesheets/App.scss';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Brightness from './components/Brightness';
import Notes from './components/Notes';
import Safari from './components/Safari';
import Mail from './components/Mail';
import Drawings from './components/Drawings';
import Draggable from "react-draggable";
import { selectNotes, selectDraw, selectMail, selectSafari, setApp, setIndex, openBrightness } from './redux/windowReducer';
import { useSelector, useDispatch } from 'react-redux';
import bgImage from './assets/img/agreloe_macOS-bg.jpg';
import bgImageWebp from './assets/img/ezgif.com-gif-maker.webp';

function App() {

  const window = useSelector((store)=> store.window);
  const dispatch = useDispatch();
  const nodeRef = React.useRef(null);
  const [loading, setLoading] = React.useState(true);

  const deselect = () => {
    dispatch(setApp('Agreloe'))
    dispatch(openBrightness(false))
  }

  const selectedNotes = () => {
    dispatch(setIndex(window.index + 1))
    dispatch(selectDraw(false))
    dispatch(selectSafari(false))
    dispatch(selectMail(false))
    dispatch(setApp('Notes'))
    dispatch(selectNotes(true))
  }
  const selectedSafari = () => {
    dispatch(setIndex(window.index + 1))
    dispatch(selectNotes(false))
    dispatch(selectDraw(false))
    dispatch(selectMail(false))
    dispatch(setApp('Safari'))
    dispatch(selectSafari(true))
  }
  const selectedMail = () => {
    dispatch(setIndex(window.index + 1))
    dispatch(selectNotes(false))
    dispatch(selectDraw(false))
    dispatch(selectSafari(false))
    dispatch(setApp('Mail'))
    dispatch(selectMail(true))
  }
  const selectedDraw = () => {
    dispatch(setIndex(window.index + 1))
    dispatch(selectNotes(false))
    dispatch(selectSafari(false))
    dispatch(selectMail(false))
    dispatch(setApp('Drawings'))
    dispatch(selectDraw(true))
  }

  React.useEffect(()=>{
    setTimeout(() => setLoading(false), 2500)
  },[])

  return (
    <>
      {
        loading === true ? (
          <div className='App__loader'>
            <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 146.36 186.29">
              <path id="b" d="M79.27,12.56C88.76,.06,101.94,0,101.94,0c0,0,1.96,11.75-7.46,23.08-10.06,12.09-21.5,10.11-21.5,10.11,0,0-2.15-9.51,6.29-20.62Zm-5.08,28.86c4.88,0,13.94-6.71,25.72-6.71,20.29,0,28.27,14.44,28.27,14.44,0,0-15.61,7.98-15.61,27.35,0,21.85,19.45,29.38,19.45,29.38,0,0-13.59,38.26-31.96,38.26-8.43,0-14.99-5.68-23.88-5.68s-18.04,5.9-23.9,5.9c-16.77,0-37.95-36.3-37.95-65.47s17.93-43.77,34.75-43.77c10.93,0,19.42,6.31,25.1,6.31h0Z" fill="#fff"/>
            </svg>
            <div className="progressBar">
              <div className="progress2 progress-moved">
                <div className="progress-bar2"></div>
              </div>
            </div>
          </div>
        ) : (
          <div id="App" className="App">
          <div className="App__bg">
              <picture>
                <source srcSet={bgImageWebp} type='image/webp' />
                <img src={bgImage} alt="Purple gradient colored waves" />
              </picture>
          </div>
          <div className='App__topbar'>
            <Topbar />
          </div>
          <div className="App__screen">
            <div className="screen" onClick={deselect}>
            </div>
          {
            window.brightness.isOpen === true && (
              <div className='App__brightness'>
                <Brightness />
              </div>
            )
          }
          {
            window.safari.isOpen === true && (
              <Draggable nodeRef={nodeRef} cancel='.safariBlock__button'>
                <div id="safari" ref={nodeRef} className='App__screen__safari' onClick={selectedSafari} onTouchStart={selectedSafari}  style={window.safari.isSelected ? {zIndex:`${window.index}`} : {zIndex: `${window.index - 1}`}}>
                <Safari />
                </div>
              </Draggable>
            )
          }
          {
            window.notes.isOpen === true && (
              <Draggable nodeRef={nodeRef} cancel='.notesBlock__button'>
                <div id="notes" ref={nodeRef} className='App__screen__notes' onClick={selectedNotes} onTouchStart={selectedNotes}  style={window.notes.isSelected ? {zIndex:`${window.index}`} : {zIndex: `${window.index - 1}`}}>
                <Notes />
                </div>
              </Draggable>
            )
          }
          {
            window.mail.isOpen === true && (
              <Draggable nodeRef={nodeRef} cancel='.mailBlock__topbar__close'>
                <div id="mail" ref={nodeRef} className='App__screen__mail' onClick={selectedMail} onTouchStart={selectedMail}  style={window.mail.isSelected ? {zIndex:`${window.index}`} : {zIndex: `${window.index - 1}`}}>
                <Mail />
                </div>
              </Draggable>
            )
          }
          {
            window.draw.isOpen === true && (
              <Draggable nodeRef={nodeRef} cancel='.drawBlock__button, .first, .second, .third, .fourth'>
                <div id="draw" ref={nodeRef} className='App__screen__draw' onClick={selectedDraw} onTouchStart={selectedDraw}  style={window.draw.isSelected ? {zIndex:`${window.index}`} : {zIndex: `${window.index - 1}`}}>
                <Drawings />
                </div>
              </Draggable>
            )
          }

          </div>
          <div className='App__navbar'>
          <Navbar />
          </div>
          </div>
        )
      }
      </>
  );
}

export default App;
