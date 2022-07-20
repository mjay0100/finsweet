import donation from "../public/images/donation.png";
import Contribution from "../components/Contribution";

const Donation = () => {
  return (
    <>
      <section className="px-[3rem]  py-6">
        <div className="block md:flex pb-5 w-[90%] mx-auto items-center">
          <div className="mt-[2rem] md:w-[50%] px-5">
            <p className="uppercase mb-6">Donates</p>
            <h1 className="text-[2rem] mb-6 font-bold">
              We help nature smile and survive{" "}
            </h1>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              neque porro ipsa laboriosam earum provident, veniam quae, dolores.
            </p>
            <button className="bg-green-400 hover:bg-green-500 transition-all duration-300 py-2 px-4 rounded-md text-white">
              Learn More
            </button>
          </div>
          <img
            className="md:h-[45vh] my-[3rem] rounded-md mx-auto"
            src={donation}
            alt=""
          />
        </div>
      </section>
      <section className="px-[3rem] py-6 md:flex justify-between gap-8 items-center w-[90%] mx-auto">
        <div className="md:w-[50%]">
          <h1 className="font-semibold text-4xl mb-4">
            How you can contribute to protect Earth
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div className="md:w-[50%] mt-8 md:mt-0">
          <div className="flex gap-4 mb-4 font-bold capitalize">
            <p className="border-b border-solid border-green-500">overwise</p>
            <p>impact</p>
            <p>what you get</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            </p>
            <p>
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </div>
      </section>
      <div className="w-[80%] mt-5 mx-auto h-[1px] bg-slate-400"></div>
      <section className="md:flex mt-12 gap-8 w-[85%] items-center mx-auto">
        <h1 className="font-semibold md:w-[33%] text-4xl mb-4">
          How we use your donation
        </h1>
        <p className="mb-4 md:w-[33%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam
        </p>
        <p className="mb-4 md:w-[33%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam
        </p>
      </section>
      <Contribution />
    </>
  );
};
export default Donation;
