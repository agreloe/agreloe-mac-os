import React from 'react'
import '../assets/stylesheets/Drawings.scss';
import { openDraw, setApp } from "../redux/windowReducer";
import { useDispatch } from "react-redux";

const Drawings = () => {
  const dispatch = useDispatch()

  const selectName1 = () => {
      document.getElementById("name1").classList.add("touched")
      document.getElementById("name2").classList.remove("touched")
      document.getElementById("name3").classList.remove("touched")
      document.getElementById("name4").classList.remove("touched")
  }

  const selectName2 = () => {
      document.getElementById("name2").classList.add("touched")
      document.getElementById("name1").classList.remove("touched")
      document.getElementById("name3").classList.remove("touched")
      document.getElementById("name4").classList.remove("touched")
  }

  const selectName3 = () => {
      document.getElementById("name3").classList.add("touched")
      document.getElementById("name1").classList.remove("touched")
      document.getElementById("name2").classList.remove("touched")
      document.getElementById("name4").classList.remove("touched")
  }

  const selectName4 = () => {
      document.getElementById("name4").classList.add("touched")
      document.getElementById("name1").classList.remove("touched")
      document.getElementById("name2").classList.remove("touched")
      document.getElementById("name3").classList.remove("touched")
  }

  const closeDraw = () => {
    dispatch(openDraw(false))
    document.getElementById("draw").classList.remove("clicked")
    dispatch(setApp('Agreloe'))
  }

  return (
    <div className='drawBlock'>
      <button className='drawBlock__button' onClick={closeDraw}></button>
      <div className='drawBlock__title'>
        <p>Drawings</p>
      </div>
      <div className="drawBlock__topbar">Drawings</div>
      <div className="drawBlock__content">
          <div className="drawBlock__content__img first" onClick={selectName1}>
            <p id='name1' className="imgName">el-barto.jpg</p>
          </div>

          <div className="drawBlock__content__img second" onClick={selectName2}>
            <p id='name2' className='imgName'>el-gato.jpg</p>
          </div>

          <div className="drawBlock__content__img third" onClick={selectName3}>
            <p id='name3' className='imgName'>scorpio.jpg</p>
          </div>

          <div className="drawBlock__content__img fourth" onClick={selectName4}>
            <p id='name4' className='imgName'>japon.jpg</p>
          </div>
      </div>

    </div>
  )
}

export default Drawings