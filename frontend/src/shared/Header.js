import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, useLocation } from 'react-router-dom';
import UserLogout from "./UserLogout";

export default function Header() {

  // Getting my Current Location
  const location = useLocation();
  const myPath = location.pathname;

  const hidden = myPath === '/login' || myPath === '/register' || myPath === '/forgotPassword' ? "hidden" : ""


  return (
    <div className={`flex flex-col ${hidden}`}>
      <Navbar fluid rounded  >
        <Navbar.Brand href="#">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">My App PB</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item><Link to='/myProfile'>My Profile</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item ><UserLogout /></Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link ><Link to='/'>Home</Link></Navbar.Link>
          <Navbar.Link >About</Navbar.Link>
          <Navbar.Link ><Link to="/myProfile">MyProfile</Link></Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>

  );
}
