import React from 'react';
import './Banner.css'; 
import useAuth from '../../hooks/useAuth';

const Banner = () => {
  const {isLoggeidIn, userData} = useAuth();

  return (
    <div className="banner">
      <p className="banner-text">
      {isLoggeidIn ? (
        <>{userData}, aprovecha nuestros descuentos</>
      ): (
        <>Crea una cuenta para disfrutar de nustras promociones</>
      )}
      </p>
    </div>
  );
};

export default Banner;
