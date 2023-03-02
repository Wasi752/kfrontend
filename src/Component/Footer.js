import {navbar} from '../Component/HeaderANavbar'

function FooterAFNavbar() {
    return(
        <div className="w-full h-full">
            <div className="flex flex-row w-full mt-5 ml-5 justify-center bg-white">
                {navbar}
            </div>
            <img src="header&footer/header2.jpg" className="w-full h-[20%]" />
        </div>
    )
}
export default FooterAFNavbar;