import { Logo } from "../assets/icons";
import { socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

const Contact = () => {
  return (
    <footer>
      <div className='flex justify-center items-start max-lg:flex-col'>
        <div className='flex flex-col items-center'>
          <a href='/' className='flex items-center gap-2'>
            <img src={Logo} alt='logo' className='w-9 h-9 object-contain' />
            <p className=' text-red text-[28px] max-sm:text-[20px] font-bold cursor-pointer  '>
              IEEE PELS
            </p>
          </a>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                key={icon.alt}
              >
                <a href={icon.href}>
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-between text-white-400 mt-6 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Contact;