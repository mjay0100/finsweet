import { useState } from "react";
import { RiBracesLine } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";

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
        className={`${show ? "show-sidebar sidebar" : "sidebar md:contents"}`}
      >
        <ul
          className={`${
            show
              ? "list-sidebar sidebar show-sidebar h-[50%] items-center text-lg capitalize"
              : "hidden md:flex gap-6 capitalize items-center"
          }`}
        >
          {show && (
            <h1 className="absolute top-[20px] ml-4 font-bold text-2xl flex gap-2 items-center">
              {" "}
              <span>
                <RiBracesLine />{" "}
              </span>
              finsweet
            </h1>
          )}
          <li className={`${show ? "mt-[5rem] py-4 ml-4" : ""}`}>home</li>
          <li className={`${show ? "py-4 ml-4" : ""}`}>about us</li>
          <li className={`${show ? "py-4 ml-4" : ""}`}>what we do</li>
          <li className={`${show ? "py-4 ml-4" : ""}`}>media</li>
          <li className={`${show ? "py-4 ml-4" : ""}`}>contact</li>
          {!show && (
            <button className="hidden lg:block px-4 py-2 rounded-md bg-black text-white">
              Donate
            </button>
          )}
        </ul>
      </nav>
      {show ? (
        <span
          className="absolute right-0 text-2xl text-black cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <FaTimes />
        </span>
      ):   <span
          className="absolute right-0 md:hidden text-2xl text-black cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <FaBars />
        </span>}
      
    </header>
  );
};

export default Navbar;
