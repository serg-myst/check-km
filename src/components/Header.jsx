import CurrentTime from "./CurrentTime"
import './Header.css'
import cz from './cz.png'

function Header() {

  return (
    <header className="header">
      <div className="container"> 
        <div className="header_wrapper">
          <ul className="header__list">
            <li>
              <img className="header__list-img" src={cz} alt='photo'></img>
            </li>
            <li>
              <p>Сервис для получения информации по кодам маркировки</p>
            </li>
          </ul>   
        </div>
      </div>
    </header>
  )
}

export default Header