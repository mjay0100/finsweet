import React from "react";

const Work = () => {
  return (
    <section className="bg-green-100/60 ">
      <div className="flex mx-[3rem]">
        <div className="mt-[2rem] py-[5.5rem] pl-[5rem]">
          <p className="uppercase mb-6">Know about us</p>
          <h1 className="text-[3rem] mb-6 font-bold">
            We care for the earth, care for the coming birth
          </h1>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            neque porro ipsa laboriosam earum provident, veniam quae, dolores,
            ab ipsum id officiis error dolore! Provident molestiae mollitia
            accusamus voluptatibus quibusdam?
          </p>
          <p className="mb-[2rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            a deleniti odit nobis, magnam itaque minus asperiores, sint pariatur
            vitae, quo recusandae quasi optio sequi id iusto doloremque?
            Doloremque, corrupti?
          </p>
          <button className="bg-green-400 hover:bg-green-500 transition-all duration-300 py-2 px-4 rounded-md text-white">
            Learn More
          </button>
        </div>
        <img
          className="h-[85vh] px-[5rem] my-[4rem] rounded-md"
          src="https://images.unsplash.com/photo-1605713288610-00c1c630ca1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWxkcmVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </section>
  );
};

export default Work;
