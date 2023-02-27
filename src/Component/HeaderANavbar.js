import { Link } from "react-router-dom";

function Menu({ name, link }) {
    const kalar = "p-5 m-2 text-xl font-bold hover:text-blue-800 ";
    return (
        <Link to={link}><span className={kalar}>{name}</span></Link>
    );
}
export const menuName = [
    "Home",
    "About",
    "Contact",
    "Stor"
];
export const menuLink = [
    "/",
    "/about",
    "/contact",
    "/stor"
];
export const navbar = menuName.map((x, i) => <Menu name={menuName[i]} link={menuLink[i]} />);

function HeaderANavbar() {
    return (
        <div className='w-full h-screen'>
            <img className='top-0 left-0 w-full h-screen object-cover' src='/header&footer/library-book-bookshelf-read.jpg' />
            <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'>
                <div className='flex'>
                    <div className='w-2/12'></div>
                    <div className='flex w-8/12'>
                        <img className='w-[60%] h-[60%] mt-11' src='logo.svg' />
                        <ul className='flex text-white font-bold text-xl mt-10 ml-[60%]'>
                            {navbar}
                        </ul>
                    </div>
                    <div className='w-2/12'></div>
                </div>
                <div className='flex flex-row justify-center mt-[15%]'>
                    <p className='text-7xl font-serif text-white text-center'>Books are our best friends<br></br> they inspire us overcome our failures</p>
                </div>
                <button
                    className='border-2 p-4 px-4 hover:bg-slate-50/10 duration-500 py-4 w-[9%] backdrop-blur-2xl rounded-lg font-serif text-white text-2xl ml-[40%] mt-[3%]'
                >Watch video
                </button>
                <button
                    className='border-2 p-4 px-4 hover:bg-slate-50/10 duration-500 py-4 w-[11%] backdrop-blur-2xl rounded-lg font-serif text-white text-2xl ml-7 mt-[3%]'
                >About our mission
                </button>
            </div>
        </div>
    );
}
export default HeaderANavbar;