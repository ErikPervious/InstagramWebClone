import { Link } from 'react-router-dom';

import './styles.css';

interface SuggestionCardProps {
  avatar: String,
  tag: String,
  description: String
}

export function SuggestionCard({item}: any) {
  return (
    <div className='containerSuggestionCard'>
      <div className="leftSuggestionCard">
        <img 
          src={item.avatar}
          alt="Foto do perfil"
          className="cardAvatar"
        />
        <div className="suggestionCardText">
          <Link to='/profile' className='cardTag'>
            <p>{item.tag}</p>
          </Link>
          <p className="cardText">Seguido por 6 pessoas...</p>
        </div>
      </div>
      <p className='buttonFollow'>
        Seguir
      </p>
    </div>
  )
}