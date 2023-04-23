import React from 'react'
import {Link} from 'react-router-dom'

const Mainpage = () => {
  return (
    <div className="w-full h-screen bg-food bg-cover bg-center bg-fixed overflow-auto items-center flex flex-col">
      <div className="w-full h-screen backdrop-blur-lg z-10 flex flex-col justify-center items-center gap-10">
        <h1 className="text-yellow-300 font-dance text-7xl max-sm:text-5xl">
          Smokey house
        </h1>
        <div className="font-abel w-3/4 lg:w-1/3 justify-start">
          <h5 className="text-white text-2xl">Menu:</h5>
          <ul className="list-disc marker:text-yellow-300 text-white text-xl">
            <li class="">
              <Link to='/food-menu'>Food menu</Link>
            </li>
            <li>
              <Link to='/drinks-menu'>Drink's menu</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="fixed bottom-0 w-full flex flex-col gap-1 z-20 text-white font-abel text-md px-2 pb-1">
        <h1>Contact us:</h1>
        <p className="gap-2 flex items-center">
          <i className="fa-brands fa-instagram"></i>smokey__house
        </p>
        <p className="gap-2 flex items-center">
          <i className="fa-solid fa-phone"></i>08074812872 & 07067371485
        </p>
      </div>
    </div>
  );
}

export default Mainpage