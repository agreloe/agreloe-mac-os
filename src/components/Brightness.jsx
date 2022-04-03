import React from 'react'
import '../assets/stylesheets/Brightness.scss'
import { useSelector, useDispatch } from 'react-redux';
import { setLevel } from '../redux/windowReducer';

const Brightness = () => {
    const window = useSelector((store)=> store.window);
    const dispatch = useDispatch();

    const brightnessControl = (e) => {
        let body = document.getElementById('App');
        let val = e.target.value;
        body.setAttribute("style", "filter: brightness("+val+"%);");
        dispatch(setLevel(val))
    }

    React.useEffect(()=>{
        document.getElementById("brightness-range").defaultValue = window.brightness.level
    },[window.brightness.level])

  return (
    <div id='brightness' className='brightness'>
        <div className="brightness__wrapper">
            <label className='brightness__wrapper__label' htmlFor="brightness">Screen</label>
            <input className='brightness__wrapper__slider' type="range" id="brightness-range" step={10} onChange={brightnessControl}/>
        </div>
    </div>
  )
}

export default Brightness