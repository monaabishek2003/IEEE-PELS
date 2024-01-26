import { hero_1 } from "../assets/images";

const Hero = () => {
    return (
      <section 
        id="home"
        className="w-full flex lg:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      >
        <div className='relative xl:w-2/5 flex flex-col justify-center  items-start w-full  max-lg:padding-x pt-28'>
        
  
          <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
            IEEE <span className="text-red">Power</span>
            <br/>         
            <span className='xl:whitespace-nowrap text-red'>
              Electronics <span className="xl:bg-white rounded-r-full relative z-10 pr-4">Society</span>
            </span>
            <br/>
          </h1>
          <p className='font-palanquin text-[36px] font-bold leading-8 mt-6 mb-14 '>
            SSN Student Branch Chapter
          </p>
        </div>
        
        <div className='relative flex-1 flex justify-center items-center lg:min-h-screen max-lg:py-40 bg-shade bg-hero bg-cover bg-center'>
          <img
            src={hero_1}
            alt='shoe colletion'
            width={610}
            height={502}
            className='object-contain relative rounded-xl'
          />
        </div>
      </section>
    )
  }

export default Hero;