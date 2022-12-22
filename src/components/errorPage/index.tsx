import './styles.css';

import Lottie from 'react-lottie';
import animationData from '../../animations/error.json';

export function ErrorPage() {

  const defaultOptions = {
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className='containerErrorPage'>
      <Lottie 
	      options={defaultOptions}
        height={200}
        width={200}
      />
      <h1 className='text'>página não encontrada</h1>
      <button className="buttonAction">
        VOLTAR PARA O FEED
      </button>
    </div>
  )
}