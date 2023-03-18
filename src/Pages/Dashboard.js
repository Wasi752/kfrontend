import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function DeshboardLeftSide({ itemname, link }) {
  return (
    <Link to={link}> <ul className=" text-left ml-10 mb-5 hover:text-blue-600 ">{itemname}</ul></Link>
  )
}
const humanResourceLink = [
  { iname: "Committee", link: "/committee" },
  { iname: "Boards", link: "/board" },
  { iname: "Madrasa", link: "/reg/madrasa/madrasalist" },
  { iname: "Negran", link: "/negran" },
  { iname: "Mumtahin", link: "/mumtahin" },
  { iname: "Staff", link: "/summary" },
  { iname: "Recruitment", link: "/recruit" },
  { iname: "Payroll", link: "/payscale" },
  { iname: "Leave Info", link: "/leave" },
  { iname: "Registration", link: "/reg" },
  { iname: "Form fill Up", link: "/fillup" },
  { iname: "Center Manegment", link: "/center" },
  { iname: "Examination", link: "/exam" },
  { iname: "Result Prepare", link: "/" },
  { iname: "Result Publish", link: "/result" },
  { iname: "Certificate Issue", link: "/certificate" },
  { iname: "Scholarship", link: "/scholarship" },
  { iname: "Alumni Info", link: "/alumni" }
];
const LeftMenu = humanResourceLink.map(x => <DeshboardLeftSide link={x.link} itemname={x.iname} />);

function UserDesh() {
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

export default UserDesh;