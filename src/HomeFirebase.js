import FooterAFNavbar from "./Component/Footer";
import Nevbar from "./Component/Nevbar2";

function Home() {
    return (
        <div className="w-full h-full">
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-[10%] flex">
                    <Nevbar/>
                </div>
                <div className="w-full h-3/6 bg-green-200 flex flex-col justify-center pl-40 bg-blue-200 ">
                    <div className="flex w-full h-full">
                        <img src="/header&footer/shelves-books-library-candles-wallpaper-thumb.jpg" className="w-[20%] h-[20%] m-5" alt="Book Stor Pic" />
                        <img src="/header&footer/books-library-architecture-shelves-wallpaper-preview.jpg" className="w-[20%] h-[20%] m-5" alt="Book Stor Pic" />
                        <img src="/header&footer/shelves-books-library-candles-wallpaper-thumb.jpg" className="w-[20%] h-[20%] m-5" alt="Book Stor Pic" />
                        <img src="/header&footer/books-library-architecture-shelves-wallpaper-preview.jpg" className="w-[20%] h-[20%] m-5" alt="Book Stor Pic" />

                    </div>
                    <div className="flex w-full h-full">
                        <img src="/header&footer/shelves-books-library-candles-wallpaper-thumb.jpg" className="w-[20%] h-[20%] m-5" alt="Book Stor Pic" />
                        <img src="/header&footer/books-library-architecture-shelves-wallpaper-preview.jpg" className="w-[20%] h-[20%] m-5" alt="Book Stor Pic" />
                        <img src="/header&footer/library.jpg" className="w-[20%] h-[20%] m-5" alt="Book Stor Pic" />
                        <img src="/header&footer/library-book-bookshelf-read.jpg" className="w-[20%] h-[20%] m-5" alt="Book Stor Pic" />

                    </div>
                </div>

                <FooterAFNavbar />

            </div>
        </div>
    );
}
export default Home;