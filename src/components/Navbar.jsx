import React from 'react'
import '../assets/stylesheets/Navbar.scss'

const Navbar = () => {
    const [safariVisible, setSafariVisible] = React.useState(false);
    const [drawVisible, setDrawVisible] = React.useState(false);
    const [msgVisible, setMsgVisible] = React.useState(false);
    const [mailVisible, setMailVisible] = React.useState(false);
    const [notesVisible, setNotesVisible] = React.useState(false);

    const safariClick = () => {
        if(safariVisible === true){
            setSafariVisible(false);
        } else {
            setMailVisible(false);
            setNotesVisible(false);
            setMsgVisible(false);
            setDrawVisible(false);
            setSafariVisible(true);
        }
    }

    const notesClick = () => {
        if(notesVisible === true){
            setNotesVisible(false);
        } else {
            setMailVisible(false);
            setSafariVisible(false)
            setMsgVisible(false);
            setDrawVisible(false);
            setNotesVisible(true);
        }
    }
    const mailClick = () => {
        if(mailVisible === true){
            setMailVisible(false);
        } else {
            setNotesVisible(false);
            setSafariVisible(false)
            setMsgVisible(false);
            setDrawVisible(false);
            setMailVisible(true);
        }
    }
    const msgClick = () => {
        if(msgVisible === true){
            setMsgVisible(false);
        } else {
            setNotesVisible(false);
            setSafariVisible(false)
            setMailVisible(false);
            setDrawVisible(false);
            setMsgVisible(true);
        }
    }
    const drawClick = () => {
        if(drawVisible === true){
            setDrawVisible(false);
        } else {
            setNotesVisible(false);
            setSafariVisible(false)
            setMailVisible(false);
            setMsgVisible(false);
            setDrawVisible(true);
        }
    }

  return (
    <div className='navbar'>
        <div className={`navbar__icon safari ${safariVisible === true ? "clicked" : ""}`} onClick={safariClick}></div>
        <div className={`navbar__icon notes ${notesVisible === true ? "clicked" : ""}`} onClick={notesClick}></div>
        <div className={`navbar__icon msg ${msgVisible === true ? "clicked" : ""}`} onClick={msgClick}></div>
        <div className={`navbar__icon mail ${mailVisible === true ? "clicked" : ""}`} onClick={mailClick}></div>
        <div className={`navbar__icon drawings ${drawVisible === true ? "clicked" : ""}`} onClick={drawClick}></div>
    </div>
  )
}

export default Navbar