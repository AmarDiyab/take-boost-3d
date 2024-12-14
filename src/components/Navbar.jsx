import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jsx';
import Logo from '../assets/logo.jsx';

const Navbar = () => {
  const location = useLocation();

  return (
    <section className={`flex justify-between max-md:justify-center items-center w-full py-7 px-12 ${location.pathname === "/shop" ? "bg-white text-black " : ""}`}>
        <Logo fill={location.pathname === "/shop" ? "black" : "white"} />

        <div className={`flex border-2 ${location.pathname === "/shop" ? "border-black" : "border-white"} rounded-lg cursor pointer max-md:hidden`}>
          <Link to='/shop' >
            <p className='py-2 px-7 text-lg hover:font-bold'>SHOP</p>
          </Link>
          <Link to='/about'>
            <p className='py-2 px-7 text-lg hover:font-bold'>ABOUT</p>
          </Link>
        </div>

        <div className='w-[150px]'></div>

        {/* <div className={`flex border-2 ${location.pathname === "/shop" ? "border-black" : "border-white"} rounded-full max-md:hidden`}>
            <p className='py-2 px-7 text-lg'>CART</p>
        </div> */}
    </section>
  )
}

export default Navbar