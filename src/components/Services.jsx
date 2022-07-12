import React from "react";
import { workData } from "../data";
const Services = () => {
  return (
    <section className="bg-green-100/60 px-[3rem] py-[2rem] ">
      <div className="md:flex mx-[3rem]">
        <div className="mt-[2rem] py-[1.5rem]">
          <p className="uppercase mb-6">what we do</p>
          <h1 className="text-[2rem] mb-6 font-bold">
            We care for the earth, care for the coming birth
          </h1>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            neque porro ipsa laboriosam ?
          </p>
          {workData.map((data) => {
            const { id, icon, title, text } = data;
            return (
              <div className="flex items-center gap-6 mb-6" key={id}>
                <span className="text-lg text-white bg-green-300 p-1 rounded-md">
                  {icon}
                </span>
                <div>
                  <h1 className="font-semibold text-2xl capitalize">{title}</h1>
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
          <button className="bg-green-400 hover:bg-green-500 transition-all duration-300 py-2 px-4 rounded-md text-white">
            Learn More
          </button>
        </div>
        <img
          className="my-0 w-[100%] md:h-[85vh] md:w-[50%] px-5 md:my-[4rem] rounded-md"
          src="https://images.unsplash.com/photo-1605713288610-00c1c630ca1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWxkcmVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </section>
  );
};

export default Services;
