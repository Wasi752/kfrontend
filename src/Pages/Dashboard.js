import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BookCategory() {
  const [name, setName] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetch('http://localhost:3001/user/' + id)
      .than((Response) => Response.json())
      .than((data) => {
        const userName = data.filter((x) => x.id === id)[0];
        setName(userName.fullName)
      });
  }, [id]);
  return (
    <div className="w-full h-full">
      <div className="flex w-full h-full mt-10">
        <div className="w-[20%] h-full bg-green-100 mt-10">
          <img src="header&footer/library.jpg" alt="Book Stor" className="w-[50%] h-[10%] mt-5 ml-5"/>
        </div>
        <div className="flex flex-col ml-5 w-[60%] h-[80%] mt-10 bg-gray-100">{name}
        </div>
      </div>
    </div>
  );
}

export default BookCategory;