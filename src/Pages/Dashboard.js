import { useParams } from "react-router-dom";
import { LeftMenu } from "../Component/DeshboadrLeftSide";
import GetCurrentDate from "../Component/GetDate";
import { useNavigate } from "react-router-dom";
import useAuthentication from "../util";

const submit = () => {
  console.log('Roza');
  fetch('http://localhost:3000/secret-6', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('code'),
      'IV': localStorage.getItem('iv')
    },
  })
    .then(r => r.text())
    .then((response) => {
      console.log(response);
    });
}

function AdminDeshBoard() {
  const navigate = useNavigate();
  const { id } = useParams();
  useAuthentication();
  const logOut = () => {
    localStorage.clear()
    navigate('/')
  }
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
          <button
            type="button"
            className="border border-rounded"
            onClick={logOut}
          >Logout</button>
        </div>
      </div>
      <div className="flex w-full h-full mt-10">
        <div className="w-[12%] h-full bg-green-100 mt-1">
          <button
            type="button"
            className="border border-rounded"
            onClick={submit}
          >Click Me!</button>
          <p className="text-lg text-red-700 font-bold ml-10 text-left mb-5"><GetCurrentDate /></p>

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