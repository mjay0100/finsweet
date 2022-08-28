import { useState } from "react";
import { RiBracesLine } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="flex justify-between mx-[3rem] relative  items-center p-5">
      <h1 className="font-bold text-2xl flex gap-2 items-center">
        {" "}
        <span>
          <RiBracesLine />{" "}
        </span>
        finsweet
      </h1>
      <nav
        className={`${show ? "show-sidebar sidebar" : "sidebar md:contents"}`}>
        <ul
          className={`${
            show
              ? "list-sidebar sidebar show-sidebar h-[50%] items-center text-lg capitalize"
              : "hidden lg:flex gap-6 capitalize items-center"
          }`}>
          {show && (
            <h1 className="absolute top-[20px] ml-4 font-bold text-2xl flex gap-2 items-center">
              {" "}
              <span>
                <RiBracesLine />{" "}
              </span>
              finsweet
            </h1>
          )}
          <li className="hover:text-[#0000FF] duration-300 ease-in-out py-4 ml-4">
            <Link
              onClick={() => setShow(false)}
              to="/"
              className={`${show ? "mt-[5rem] py-4 ml-4" : ""}`}>
              home
            </Link>
          </li>
          <li className="hover:text-[#0000FF] py-4 ml-4 duration-300 ease-in-out">
            <Link
              onClick={() => setShow(false)}
              to="/about"
              className={`${show ? "py-4 ml-4" : ""}`}>
              about us
            </Link>
          </li>
          <li className="hover:text-[#0000FF] py-4 ml-4 duration-300 ease-in-out">
            <Link
              to="/services"
              onClick={() => setShow(false)}
              className={`${show ? "py-4 ml-4" : ""}`}>
              what we do
            </Link>
          </li>
          <li className="hover:text-[#0000FF] py-4 ml-4 duration-300 ease-in-out">
            <Link
              to="/media"
              onClick={() => setShow(false)}
              className={`${show ? "py-4 ml-4" : ""}`}>
              media
            </Link>
          </li>
          <li className="hover:text-[#0000FF] py-4 ml-4 duration-300 ease-in-out">
            <Link
              to="/contact"
              onClick={() => setShow(false)}
              className={`${show ? "py-4 ml-4" : ""}`}>
              contact
            </Link>
          </li>
          <li className="hover:text-[#0000FF] py-4 ml-4 duration-300 ease-in-out">
            <Link
              to="/project"
              onClick={() => setShow(false)}
              className={`${show ? "py-4 ml-4" : ""}`}>
              project
            </Link>
          </li>
          <li className="hover:text-[#0000FF] py-4 ml-4 duration-300 ease-in-out">
            <Link
              to="/blog"
              onClick={() => setShow(false)}
              className={`${show ? "py-4 ml-4" : ""}`}>
              blog
            </Link>
          </li>
          {!show && (
            <Link to="/donation">
              <button className="hidden lg:block px-4 py-2 rounded-md hover:bg-[#ccc] duration-300 hover:text-black bg-black text-white">
                Donate
              </button>
            </Link>
          )}
        </ul>
      </nav>
      {show ? (
        <span
          className="absolute right-0 text-2xl text-black cursor-pointer"
          onClick={() => setShow(!show)}>
          <FaTimes />
        </span>
      ) : (
        <span
          className="absolute right-0 lg:hidden text-2xl text-black cursor-pointer"
          onClick={() => setShow(!show)}>
          <FaBars />
        </span>
      )}
    </header>
  );
};

export default Navbar;
