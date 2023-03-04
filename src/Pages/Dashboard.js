import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserDesh() {
  const {id} = useParams();
  return (
    <div className="w-full h-full">
      <div className="flex w-full h-full mt-10">
        <div className="w-[20%] h-full bg-green-100 mt-10">
          <img src="/header&footer/library.jpg" alt="Book Stor" className="w-[50%] h-[10%] mt-5 ml-5"/>
        </div>
        <div className="flex flex-col ml-5 w-[60%] h-[80%] mt-10 bg-gray-100">Welcome {id}
        </div>
      </div>
    </div>
  );
}

export default UserDesh;