import { Link } from "react-router-dom";

function DeshboardLeftSide({ itemname, link }) {
  return (
    <Link to={link}> 
     <ul className=" text-left ml-10 mb-3 hover:text-blue-600 ">{itemname}</ul>
     </Link>
  )
}
const leftMenu = [
  { iname: "Configuration", link: "/" },
  { iname: "User Management", link: "/" },
  { iname: "Published Books", link: "/" },
  { iname: "To Be Publish", link: "/" },
  { iname: "In Stock", link: "/" },
  { iname: "Out of Stock", link: "/" },
  { iname: "Add Books", link: "/" },
  { iname: "Sold Books", link: "/" },
  { iname: "Promotipon", link: "/" },
  { iname: "Finance", link: "/" },
  { iname: "Campaigns", link: "/" },
  { iname: "Order Manegment", link: "/" },
  { iname: "Manage Reviews", link: "/" },
  { iname: "Delivary", link: "/" },
  
];
export const LeftMenu = leftMenu.map(x => <DeshboardLeftSide link={x.link} itemname={x.iname} />);


