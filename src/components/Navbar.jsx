import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <section className="flex justify-between items-center w-full py-7 px-12">
        <img src={logo} alt="logo" width={120}/>

        <div className='flex border-2 border-white rounded-lg'>
            <p className='py-2 px-7 text-lg'>SHOP</p>
            <p className='py-2 px-7 text-lg'>ABOUT</p>
        </div>

        <div className='flex border-2 border-white rounded-full'>
            <p className='py-2 px-7 text-lg'>CART</p>
        </div>
    </section>
  )
}

export default Navbar