import {
  Search as SearchIcon,
  Home as HomeIcon,
  Send as SendIcon,
  PlusSquare as PlusSquareIcon,
  Compass as CompassIcon,
  Heart as HeartIcon
} from 'react-feather';
import { Link } from 'react-router-dom';

import LogoPng from "../../assets/Logo.png";

import './styles.css';

export function Header() {

  const path = location.pathname;

  return (
    <div className="rootHeader">
      <div className="containerHeader">
        <div className="containerLogo">
          <Link to={`/`}>
            <img className="logoInstagram" src={LogoPng} alt="Logo do instagram" />
          </Link>
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
          <Link to={`/`} className="buttonAction">
            <HomeIcon className="icon" size={path === '/' ? 24 : 22} />
          </Link>
          <Link to={`/direct`} className="buttonAction"> 
            <SendIcon className="icon" size={path === '/direct' ? 24 : 22} />
          </Link>
          <Link to={`/explore`} className="buttonAction"> 
            <CompassIcon className="icon" size={path === '/explore' ? 24 : 22}/>
          </Link>
          <div className="buttonAction"> 
            <HeartIcon className="icon" size={22} />
          </div>
          <Link to={`/profile`} className="buttonAction"> 
            <img 
              src="https://avatars.githubusercontent.com/u/51729214?v=4" 
              className="profileAvatar" 
              alt="Foto de perfil"
            />
          </Link>
        </div>
      </div>
      <div className="lineBottom" />
    </div>
  )
}