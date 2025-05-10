import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const GenerateBtn = () => {
  const {user,setShowLogin}=useContext(AppContext)
  const navigate=useNavigate()


  const onClickHandler=()=>{
      if(user){
        navigate('/result')

      }else{
      setShowLogin(true);
      }
  }
  return (
    <div className="pb-16 text-center flex flex-col items-center">
      
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 py-6 md:py-8">
        See the magic. Try now
      </h1>

      {/* Generate Button */}
      <button 
      onClick={onClickHandler}
        className="inline-flex items-center gap-2 px-12 py-3 
                   rounded-full bg-black text-white hover:scale-105 
                   transition-transform duration-500"
      >
        Generate Images
        <img src={assets.star_group} alt="Star" className="h-6" />
      </button>

    </div>
  );
};

export default GenerateBtn;
