import { navLinks } from "../constants";
import { Logo, menu } from "../assets/icons";
import { useState } from "react"

const Navbar = () => {
  const [active, setactive] = useState("");
  const [toggle, settoggle] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-10 w-full ">
      <nav className="flex justify-between items-center max-container">
      <a
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setactive("");
            window.scrollTo(0,0);
          }}
        >
          <img src={Logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className=' text-red text-[28px] max-sm:text-[20px] font-bold cursor-pointer  '>
            IEEE PELS
          </p>
        </a>
        {/* this is for the laptop version */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`font-montserrat leading-normal text-lg ${
                  active === item.label ? "text-slate-gray font-semibold"  : "text-slate-gray"
                }`}
                onClick={() => setactive(item.label)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* the below is mobile version */}
        <div className="lg:hidden flex-1 flex justify-end items-center">
          <img
            src={menu}
            alt="menu"
            width={25}
            height={25}
            className=""
            onClick={() => settoggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-pale-blue absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`font-montserrat leading-normal text-lg ${
                      active === item.label
                        ? "text-slate-gray font-semibold"
                        : "text-slate-gray"
                    }`}
                    onClick={() => setactive(item.label)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
