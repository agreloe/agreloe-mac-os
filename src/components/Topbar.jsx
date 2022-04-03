import React from 'react'
import '../assets/stylesheets/Topbar.scss'
import { useSelector, useDispatch } from 'react-redux';
import { openBrightness, setApp } from '../redux/windowReducer';

const Topbar = () => {
  const window = useSelector((store)=> store.window);
  const dispatch = useDispatch();

  const openWinBright = () => {
    if(window.brightness.isOpen){
      dispatch(openBrightness(false))
    } else {
      dispatch(openBrightness(true))
    }
  }

  const dateToday = () => {
    let today = new Date();
    let hours = today.getHours();
    hours = ("0" + hours).slice(-2);
    let minutes = today.getMinutes();
    minutes = ("0" + minutes).slice(-2);
    let time = `${hours}:${minutes}`;
    let date = new Date();
    let n = date.toDateString();
    let day = n.slice(0, 10)
    document.getElementById('time').value=time
    document.getElementById('date').value=day
  }

  React.useEffect(() => {
    dispatch(setApp("Agreloe"))
    let interval = setInterval(dateToday,500);
    return () => {clearInterval(interval)};
  },[dispatch])

  return (
    <div className='topbar'>
        <div className='topbar__apple icon'></div>
        <p id='tag'>{window.app}</p>
        <div className='topbar__brightness icon' onClick={openWinBright}></div>
        <input id='date' type="text" disabled />
        <input id='time' type="text" disabled />
    </div>
  )
}

export default Topbar;