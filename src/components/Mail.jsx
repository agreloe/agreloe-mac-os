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
        </div>
        <div className="mailBlock__form">
            <form action="https://formsubmit.co/55722d22f1e5cee05655cdabd25b163f" method="POST">
                <input type="text" value="To: agreloerica@hotmail.com" disabled />
                <input type="text" name='name' placeholder='Name'/>
                <input type="email" name='email' placeholder='Email'/>
                <span></span>
                <textarea name="message" placeholder='Message'></textarea>
                <button type='submit' className="mailBlock__form__send"></button>
            </form>
        </div>
    </div>
  )
}

export default Mail