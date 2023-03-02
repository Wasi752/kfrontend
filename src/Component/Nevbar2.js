import { navbar } from "./HeaderANavbar";
import { Link } from "react-router-dom";

function Nevbar() {
    return (
        <div className="w-full h-[10%] flex">
            <div className="w-[33%] m-5">{navbar}</div>
            <div className="w-[33%]"></div>
            <div className="w-[33%] text-right m-5">
                <Link to='/signup2'><span className="p-2 text-lg hover:text-green-800 ">signup</span></Link>
                <Link to='/login'><span className="p-2 text-lg hover:text-green-800">login</span></Link>
            </div>
        </div>
    );
}
export default Nevbar;