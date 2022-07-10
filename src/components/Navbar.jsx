import { RiBracesLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="flex justify-between mx-[3rem] relative  items-center p-5">
      <h1 className="font-bold text-3xl flex gap-2 items-center">
        {" "}
        <span>
          <RiBracesLine />{" "}
        </span>
        finsweet
      </h1>
      <div className="">
        <ul className=" hidden md:flex gap-6 capitalize items-center">
          <li className="">home</li>
          <li className="">about us</li>
          <li className="">what we do</li>
          <li className="">media</li>
          <li className="">contact</li>
          <button className="hidden lg:block px-4 py-2 rounded-md bg-black text-white">
            Donate
          </button>
        </ul>
      </div>
      <span className="absolute right-0 md:hidden text-2xl text-black cursor-pointer">
        <FaBars />
      </span>
    </header>
  );
};

export default Navbar;
