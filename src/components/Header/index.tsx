import {
  CartIcon,
  ContactIcon,
  FacebookIcon,
  FavouriteIcon,
  InstagramIcon,
  ProfileIcon,
  SearchIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../assets/svgs";
import logo from "../../assets/images/Logo.png";
// import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <div className="[&>*]:px-7">
        {/* Section 1 */}
        <div className="bg-black flex justify-between items-center h-12">
          {/* Sociail Icons */}
          <div className="flex [&>*]:cursor-pointer [&>*]:w-8 [&>*]:mr-3 ">
            <FacebookIcon />
            <TwitterIcon />
            <YoutubeIcon />
            <InstagramIcon />
          </div>
          <div className="flex [&>*]:cursor-pointer [&>*]:w-8">
            <ProfileIcon />
          </div>
        </div>
        {/* Section 2 */}
        <div className="bg-white shadow-md flex justify-between items-center h-12">
          <div className="flex items-center">
            <ContactIcon className="w-8" />
            <div className=" ml-2 [&>*]:font-semibold text-sm">
              <p className="text-golden-sunbeam">Call us at</p>
              <p>03090001571</p>
            </div>
          </div>
          {/* Logo in Center */}
          <div className="absolute top-0 bottom-5 left-1/2 transform -translate-x-1/2">
            <img src={logo} alt="Logo" className="h-24" />
          </div>
          <div className="flex items-center [&>*]:ml-4 [&>*]:cursor-pointer">
            <FavouriteIcon />
            <CartIcon />
            <SearchIcon />
          </div>
        </div>
      </div>
      {/* Section 3 */}
      {/* <div className="w-full h-10 bg-red-400 flex justify-center">
        <div className="bg-gray-500">
          <ul className="flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/newCollection"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                New Collection
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sale"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Sale
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menswear"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Menswear
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/latestBlogs"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Latest Blogs
              </NavLink>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};
