const Works = () => {
  return (
    <section className="mx-[3rem] mb-[4rem]">
      <div className="mt-[2rem] text-center py-6">
        <p className="uppercase mb-6">what we have done</p>
        <h1 className="text-[3rem] mb-6 font-bold">
          we are creating sustainable <br /> society, for everyone and <br />{" "}
          forever.
        </h1>
      </div>
      <div className="grid md:flex gap-5">
        <div className="bg-1 w-[100%] rounded-lg py-[4rem] px-5 lg:w-[33%]">
          <div className="mb-6 text-white p-[2rem]  ">
            <h1 className="text-2xl">Lorem ipsum dolor sit</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
              libero?
            </p>
          </div>
          <button className="bg-white p-3 mb-4 ml-[2rem] rounded-md">
            learn more
          </button>
        </div>
        <div className="bg-2 w-[100%] rounded-lg py-[4rem] px-[2rem] lg:w-[33%]">
          <div className="mb-6 text-white p-[2rem]  ">
            <h1 className="text-2xl">Lorem ipsum dolor sit</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
              libero?
            </p>
          </div>
          <button className="bg-white p-3 mb-4 ml-[2rem] rounded-md">
            learn more
          </button>
        </div>
        <div className="bg-3 w-[100%] rounded-lg py-[4rem] px-[2rem] lg:w-[33%]">
          <div className="mb-6 text-white p-[2rem]  ">
            <h1 className="text-2xl">Lorem ipsum dolor sit</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
              libero?
            </p>
          </div>
          <button className="bg-white p-3 mb-4 ml-[2rem] rounded-md">
            learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Works;
