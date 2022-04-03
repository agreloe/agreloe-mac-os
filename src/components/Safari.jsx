import React from 'react'
import '../assets/stylesheets/Safari.scss'
import { openSafari, setApp } from "../redux/windowReducer";
import { useDispatch } from "react-redux";

const Safari = () => {
    const dispatch = useDispatch()

  const closeSafari = () => {
    dispatch(openSafari(false))
    document.getElementById("safari").classList.remove("clicked")
    dispatch(setApp('Agreloe'))
  }
  return (
    <div className='safariBlock'>
        <div className="safariBlock__topNav">
            <button onClick={closeSafari}></button>
            <div className="safariBlock__topNav__url"></div>
        </div>
        <div className="safariBlock__content">
            <h1>Favorites</h1>
            <div className="safariBlock__content__icons">
                <div className='safariBlock__content__icons__ln'></div>
                <div className='safariBlock__content__icons__be'></div>
                <div className='safariBlock__content__icons__gh'></div>
            </div>
            <h3>Other sites</h3>
            <div className="safariBlock__content__projects">
                <div className="safariBlock__content__projects__win95"></div>
                <div className="safariBlock__content__projects__derigo"></div>
            </div>
        </div>
    </div>
  )
}

export default Safari