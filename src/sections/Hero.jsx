import { useState, useEffect } from 'react';
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1, thumbnailBackground } from "../assets/images"; 
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const [typedText, setTypedText] = useState('');
  const targetText = 'Nike'; // The text we want to type

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypedText((prev) => {
        if (prev.length < targetText.length) {
          return prev + targetText[prev.length];
        }
        clearInterval(typingInterval);
        return prev; // Stop typing when the full text is typed
      });
    }, 100); // Adjust typing speed (in ms)

    return () => clearInterval(typingInterval); // Clean up interval when the component unmounts
  }, []);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container relative' // 'relative' to ensure the background is positioned correctly
    >
      <div
        className='absolute top-0 left-0 w-full h-full'
        style={{
          backgroundImage: `url(${thumbnailBackground})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -100, 
        }}
      ></div>

      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer collections
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>{typedText}</span> Shoes{/* The typing effect will display here */}
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>

        <Button label='Shop now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe collection'
          width={610}
          height={502}
          className='object-contain relative z-100'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
