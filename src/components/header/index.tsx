import {
  Search as SearchIcon,
  Home as HomeIcon,
  Send as SendIcon,
  PlusSquare as PlusSquareIcon,
  Compass as CompassIcon,
  Heart as HeartIcon
} from 'react-feather';

import LogoPng from "../../assets/Logo.png";

import './styles.css';

export function Header() {
  return (
    <div className="rootHeader">
      <div className="containerHeader">
        <div className="containerLogo">
          <img className="logoInstagram" src={LogoPng} alt="Logo do instagram" />
        </div>
        <div className="containerInput">
          <div className="containerInputSearch">
            <SearchIcon className="iconSearch" />
            <input 
              className="inputSearch" 
              placeholder="Search"
              type="text"
            />
          </div>
        </div>
        <div className="containerActions">
          <button className="buttonAction"> 
            <HomeIcon className="action icon" />
          </button>
          <button className="buttonAction"> 
            <SendIcon className="action icon" />
          </button>
          <button className="buttonAction"> 
            <PlusSquareIcon className="action icon" />
          </button>
          <button className="buttonAction"> 
            <CompassIcon className="action icon" />
          </button>
          <button className="buttonAction"> 
            <HeartIcon className="action icon" />
          </button>
          <button className="buttonAction"> 
            <img 
              src="https://avatars.githubusercontent.com/u/51729214?v=4" 
              className="action profileAvatar" 
              alt="Foto de perfil"
            />
          </button>
        </div>
      </div>
      <div className="lineBottom" />
    </div>
  )
}