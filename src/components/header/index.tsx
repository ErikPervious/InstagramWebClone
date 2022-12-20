import React from "react";
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
import { colors } from "../../styles";

export function Header() {
  return (
    <div id="mainHeader">
      <img className="logoInstagram" src={LogoPng} alt="Logo do instagram" />
      <div className="containerInput">
        <SearchIcon color={colors.GRAY_PRIMARY} size={15} />
        <input 
          className="inputSearch" 
          placeholder="Search"
          type="text" 
        />
      </div>
      <div className="containerActions">
        <button className="action"> 
          <HomeIcon color={colors.BLACK_PRIMARY} size={20} />
        </button>
        <button className="action"> 
          <SendIcon color={colors.BLACK_PRIMARY} size={20} />
        </button>
        <button className="action"> 
          <PlusSquareIcon color={colors.BLACK_PRIMARY} size={20} />
        </button>
        <button className="action"> 
          <CompassIcon color={colors.BLACK_PRIMARY} size={20} />
        </button>
        <button className="action"> 
          <HeartIcon color={colors.BLACK_PRIMARY} size={20} />
        </button>
        <button className="action"> 
          <img className="action profileAvatar" src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" alt="Foto de perfil" />
        </button>
      </div>
    </div>
  )
}