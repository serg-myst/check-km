import "./MainPage.css";
import { useState, useEffect } from "react";
import MarkInfo from './MarkInfo'

function MainPage() {

  const [mark, setMark] = useState('')
  const [clicked, setClicked] =useState(false)
 
  function handleClick() {
    setClicked(true);
  }

  function handleMarkChange(event) {
     setMark(event.target.value);
     setClicked(false);
  }

  function handleValueChange() {
    setMark('');
    setClicked(false);
    document.querySelector('input').focus();
  }

  return (
    <section className="main__section">
      <div className="container">
        <div className="main__section-text">
          <h3 className="main__section-title">Запрос (Поиск происходит по продуктивному контуру)</h3>
        </div>
        <p className="main__section--text-info">(для сканирования переключитесь на латинскую раскладку)</p>
        <div className="main__section-input">
          <p className="main__section-input--text">Введите / сканируйте марку</p>
          <div className="main__section-input--body"> 
            <input className="main__section-input--input" type="text" value={mark} onChange={handleMarkChange}></input>   
            <button className="main__section--input-btn" onClick={handleValueChange}>X</button>       
          </div>
          <button className="main__section-btn" onClick={handleClick}>Запрос</button>
        </div>
        {clicked ? <MarkInfo mark={mark}/> : <p className="main__section-info">Для получения информации нажмите Запрос</p>}
      </div>     
    </section>
  )
}

export default MainPage