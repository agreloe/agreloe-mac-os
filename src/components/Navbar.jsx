import React from 'react'
import '../assets/stylesheets/Navbar.scss'
import { useDispatch, useSelector } from 'react-redux';
import { openNotes, openDraw, openSafari, openMail, setApp } from '../redux/windowReducer'

const Navbar = () => {
    const dispatch = useDispatch();
    const window = useSelector((store) => store.window);

    const safariClick = () => {
        dispatch(openSafari(true))
        dispatch(setApp('Safari'))
    }

    const notesClick = () => {
        dispatch(openNotes(true))
        dispatch(setApp('Notes'))
    }

    const mailClick = () => {
        dispatch(openMail(true))
        dispatch(setApp('Mail'))
    }

    const drawClick = () => {
        dispatch(openDraw(true))
        dispatch(setApp('Drawings'))
    }

  return (
    <div className='navbar'>
        <div id="safari" className={`navbar__icon safari ${window.safari.isOpen ? "clicked" : ""}`} onClick={safariClick}></div>
        <div id="notes" className={`navbar__icon notes ${window.notes.isOpen ? "clicked" : ""}`} onClick={notesClick}></div>
        <div id="mail" className={`navbar__icon mail ${window.mail.isOpen ? "clicked" : ""}`} onClick={mailClick}></div>
        <div id="draw" className={`navbar__icon drawings ${window.draw.isOpen ? "clicked" : ""}`} onClick={drawClick}></div>
    </div>
  )
}

export default Navbar