import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <section className="flex justify-between items-center w-full py-7 px-12">
        <img src={logo} alt="logo" width={120}/>

        <div className='flex border-2 border-white rounded-lg cursor pointer'>
          <Link to='/shop' >
            <p className='py-2 px-7 text-lg hover:font-bold'>SHOP</p>
          </Link>
          <Link to='/about'>
            <p className='py-2 px-7 text-lg hover:font-bold'>ABOUT</p>
          </Link>
        </div>

        <div className='flex border-2 border-white rounded-full'>
            <p className='py-2 px-7 text-lg'>CART</p>
        </div>
    </section>
  )
}

export default Navbar