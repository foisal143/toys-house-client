import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Authprovaider/Authprovaider';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navitems = (
    <>
      <Link to="/">Home</Link>
      <Link to="/all-toys">All Toys</Link>
      {user && (
        <>
          {' '}
          <Link to="/my-toys">My Toys</Link>
          <Link to="/add-toys">Add A Toys</Link>
        </>
      )}
      <Link to="/blog">Blog</Link>
    </>
  );

  const handlerLogout = () => {
    logout().then().catch();
  };
  return (
    <div className="navbar flex justify-between items-center  bg-base-100">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-center space-y-5 rounded-box w-52"
          >
            {navitems}
          </ul>
        </div>
        <Link to="/" className="cursor-pointer font-bold text-2xl">
          Toys House
        </Link>
      </div>
      <div className=" hidden lg:flex">
        <ul className="menu flex gap-8 font-semibold menu-horizontal px-1">
          {navitems}
        </ul>
      </div>
      {user ? (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                title={user?.displayName}
                alt="Tailwind CSS Navbar component"
                src={user?.photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li onClick={handlerLogout}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      ) : (
        <Link to="/login">
          <button className="btn-coustom">Login</button>
        </Link>
      )}
    </div>
  );
};

export default Header;
