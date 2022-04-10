import React from 'react'
import '../assets/stylesheets/Mail.scss';
import { openMail, selectMail, setApp } from "../redux/windowReducer";
import { useDispatch } from "react-redux";

const Mail = () => {
    const dispatch = useDispatch()

  const closeMail = () => {
    dispatch(openMail(false))
    dispatch(selectMail(false))
    document.getElementById("mail").classList.remove("clicked")
    dispatch(setApp("Agreloe"))
  }

  return (
    <div className='mailBlock'>
        <div className="mailBlock__topbar">
            <button className="mailBlock__topbar__close" onClick={closeMail} onTouchStart={closeMail}></button>
            <button className="mailBlock__topbar__send"></button>
        </div>
        <div className="mailBlock__form">
            <form action="">
                <input type="text" value="To: agreloerica@gmail.com" disabled />
                <input type="text" placeholder='Name'/>
                <span></span>
                <textarea name="message" placeholder='Message'></textarea>
            </form>
        </div>
    </div>
  )
}

export default Mail