import { useParams } from "react-router-dom";
import { LeftMenu } from "../Component/DeshboadrLeftSide";

function AdminDeshBoard() {
  const { id } = useParams();
  return (
    <div className="w-full h-full">
      <div className="w-full h-[10%] flex ">
        <div className="[w-10%] h-full" >
          <img src="/header&footer/darsgah.png" alt="Book Stor" className="w-[25%] h-[10%] mt-1 ml-10" />
          <p className="text-lg text-left font-blod text-green-600 ml-8">Darus Salam</p>
          <p className="text-left text-sm ml-3">publisher & book Seller</p>
        </div>
        <div className="w-[76%] h-[10%]"></div>
        <div className="w-[10%] h-[10%] text-center">
          <p className="text-lg font-bold font-serif text-green-700 mt-3">{id}</p>
          <p className="text-md text-green-700">Super Admin</p>
        </div>
      </div>
      <div className="flex w-full h-full mt-10">
        <div className="w-[12%] h-full bg-green-100 mt-1">
          <p className="text-lg text-green-700 font-bold ml-10 text-left mb-5">Deshboard</p>
          {LeftMenu}
        </div>
        <div className="flex flex-col ml-5 w-[60%] h-[80%] mt-10 bg-gray-100">
        </div>
      </div>
    </div>
  );
}

export default AdminDeshBoard;