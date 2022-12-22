import { Link } from 'react-router-dom';

import { Header } from '../../components/header';

import './styles.css';

export function Feed() {
    return (
      <div className="containerFeed">
        <Header />
        <div className="container">
          <div className="containerMain">
          </div>
          <div className="containerAside">
            <div className="containerAccountCard">
              <img 
                src="https://avatars.githubusercontent.com/u/51729214?v=4"
                alt="Foto do perfil"
                className="accountCardAvatar"
              />
              <div className="accountCardText">
                <Link to='/profile' className='accountCardTag'>
                  <p>erik_pervious</p>
                </Link>
                <p className="accountCardName">Erik Matheus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
    