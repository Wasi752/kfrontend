import { Link } from "react-router-dom";

function BookCategory() {
  return (
    <div className="w-full h-full">
      
      <div className="flex w-full h-full mt-10">
        <div className="w-[20%] h-full bg-green-100 mt-10">
          <Link to={"/sdetails/1"}><p className="text-2xl font-serif font-extrabold ml-10 mb-5 mt-40 text-blue-500">Staff Details</p></Link>
          <Link to="/summary/staff"><p className="text-2xl font-serif font-extrabold ml-10 mb-5 mt-5 text-blue-500">Create New Staff Data</p></Link>
        </div>
        <div className="flex flex-col ml-5 w-[60%] h-[80%] mt-10 bg-gray-100">
          <p className="text-2xl font-serif font-extrabold ml-10 mb-5 mt-10 text-green-800">Staff Summary</p>
        </div>
      </div>
    </div>
      )
}

export default BookCategory;