import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const {generateImage}=useContext(AppContext)


  const onSumbitHandler=async(e)=>{
     e.preventDefault();
     setLoading(true);

     if(input){
      const image =await generateImage(input);

      if(image){
        setImageLoaded(true);
        setImage(image);
      }
     }
     setLoading(false);
  }

  return (
    <motion.form 
    onSubmit={onSumbitHandler} 
      className='flex flex-col min-h-[90vh] justify-center items-center'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      > 
        <div className='relative'>
          <motion.img 
            src={image} 
            alt='' 
            className='max-w-sm rounded' 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? 'w-full' : 'w-0'}`}
            animate={{ width: loading ? '100%' : '0%' }}
            transition={{ duration: 10 }}
          />
        </div>
        <motion.p 
          className={!loading ? 'hidden' : ''}
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          Loading......
        </motion.p>
      </motion.div>

      {!isImageLoaded && (
        <motion.div 
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <input 
            type='text' 
            placeholder='Describe what you want to generate' 
            className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20' 
          />
          <motion.button 
            type='submit' 
            className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Generate
          </motion.button>
        </motion.div>
      )}

      {isImageLoaded && (
        <motion.div 
          className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            onClick={() => setImageLoaded(false)} 
            className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Generate Another
          </motion.p>
          <motion.a 
            href={image} 
            download 
            className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Download
          </motion.a>
        </motion.div>
      )}
    </motion.form>
  );
};

export default Result;