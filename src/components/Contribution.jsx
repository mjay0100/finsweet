const Contribution = () => {
  return (
    <section className="contribution-bg w-[85%] mx-auto rounded-lg mb-[4rem] text-white">
      <div className="mt-[5rem] p-[3rem] ">
        <h1 className="text-2xl md:text-4xl mb-6 text-center font-bold">
          You can contribute to make <br /> the environment greener!
        </h1>
        <div className="flex gap-4 justify-center">
          <button className="bg-green-500 py-3 px-5 rounded-md">
            join as a volunteer
          </button>
          <button className="text-black bg-white py-3 px-5 rounded-md">
            Donate
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contribution;
