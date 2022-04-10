import React from 'react'
import '../assets/stylesheets/Safari.scss'
import { openSafari, setApp, selectSafari } from "../redux/windowReducer";
import { useDispatch } from "react-redux";

const Safari = () => {
  const dispatch = useDispatch()

  const closeSafari = () => {
    dispatch(openSafari(false))
    dispatch(selectSafari(false))
    document.getElementById("safari").classList.remove("clicked")
    dispatch(setApp("Agreloe"))
  }

  return (
    <div className='safariBlock'>
        <div className="safariBlock__topNav">
            <button className='safariBlock__button' onClick={closeSafari} onTouchStart={closeSafari}></button>
            <div className="safariBlock__topNav__url"></div>
        </div>
        <div className="safariBlock__content">
            <h1>Favorites</h1>
            <div className="safariBlock__content__icons">
              <a href="https://www.linkedin.com/in/agreloerika/" target="_blank" rel="noopener noreferrer">
                <div className='safariBlock__content__icons__ln'></div></a>
                <a href="https://www.behance.net/agreloe" target="_blank" rel="noopener noreferrer">
                <div className='safariBlock__content__icons__be'></div></a>
                <a href="https://github.com/agreloe" target="_blank" rel="noopener noreferrer">
                <div className='safariBlock__content__icons__gh'></div></a>
            </div>
            <h3>Other sites</h3>
            <div className="safariBlock__content__projects">
              <a href="https://agreloe.com" target="_blank" rel="noopener noreferrer">
                <div className="safariBlock__content__projects__win95"></div></a>
                <a href="https://derigoargentina.com/" target="_blank" rel="noopener noreferrer">
                <div className="safariBlock__content__projects__derigo"></div></a>
            </div>
        </div>
    </div>
  )
}

export default Safari