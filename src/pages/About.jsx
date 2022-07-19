import Contribution from "../components/Contribution";
import News from "../components/News";
import Event from "../components/Event";
import Team from "../components/Team";
import logo from "../public/images/logo/logo.svg";
import logo2 from "../public/images/logo/logo2.svg";
import logo3 from "../public/images/logo/logo3.svg";
import donation from "../public/images/about-images/donation.png";
import BG from "../public/images/about-images/BG.png";
import { AiTwotoneStar } from "react-icons/ai";
import { IoIosTrophy } from "react-icons/io";
import { TbFileCertificate } from "react-icons/tb";

const About = () => {
  return (
    <>
      <section className="py-6">
        <div className="block md:flex justify-between pb-5 w-[85%] mx-auto items-center">
          <div className="mt-[2rem]">
            <p className="uppercase mb-2">Know about us</p>
            <h1 className="text-2xl md:text-4xl mb-6 font-bold">
              We are a nonprofit team working worldwide
            </h1>
          </div>
          <div className="md:w-[70%] mt-[3rem]">
            <p className="text-base mb-6 font-bold">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              officia fugit molestiae fugiat maxime doloribus dignissimos
              debitis ea, ipsam distinctio! Modi dignissimos eos dolor, nam
              error veniam minus. Laboriosam, a.
            </p>
          </div>
        </div>
        <div className="bg-slate-100/60 rounded-md pb-7">
          <img
            className="mx-auto rounded-lg my-5 w-[60%] md:w-[80%]"
            src={BG}
            alt=""
          />
          <div className="md:flex items-center justify-between gap-6 my-[3rem] w-[70%] mx-auto">
            <div>
              <p className="mb-3 font-semibold text-lg">Our Mission</p>
              <h1 className="font-bold mb-3 text-2xl">
                We make the world we save our own environment
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
            <div>
              <p className="mb-3 font-semibold text-lg">Our Vission</p>
              <h1 className="font-bold mb-3 text-2xl">
                Plant more trees to make world air pollution free
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 lg:flex text-lg w-[90%] mx-auto text-[#ccc] items-center justify-evenly">
            <img src={logo2} alt="" />
            <img src={logo} alt="" />
            <img src={logo3} alt="" />
            <img src={logo2} alt="" />
            <img src={logo} alt="" />
            <img src={logo3} alt="" />
          </div>
        </div>
      </section>

      {/* award and recognition */}
      <section className="my-[3rem]">
        <h1 className="text-3xl md:text-5xl mb-6 capitalize font-bold text-center">
          awards & recognition
        </h1>
        <div className="flex justify-evenly items-center gap-6 w-[80%] mx-auto">
          <div className="flex flex-col items-center">
            <span className="text-green-300 text-5xl mb-2">
              <AiTwotoneStar />
            </span>
            <h1 className="font-semibold mb-2">best NGO award</h1>
            <p>BERLIN, GERMANY</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-green-300 text-5xl mb-2">
              <TbFileCertificate />
            </span>
            <h1 className="font-semibold mb-2">best NGO award</h1>
            <p>NEWYORK, USE</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-green-300 text-5xl mb-2">
              <IoIosTrophy />
            </span>
            <h1 className="font-semibold mb-2">best NGO award</h1>
            <p>NEW DELHI, INDIA</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-green-300 text-5xl mb-2">
              <TbFileCertificate />
            </span>
            <h1 className="font-semibold mb-2">best NGO award</h1>
            <p>VIENNA, AUSTRIA</p>
          </div>
        </div>
      </section>

      {/* our journey */}
      <section className="px-4 bg-black rounded-lg mt-7 text-white w-[90%] mx-auto py-[4rem]">
        <div className="block md:flex pb-5 w-[85%] mx-auto items-center">
          <div className="mt-[2rem] md:w-[50%] px-5">
            <p className="uppercase mb-6">our journey</p>
            <h1 className="text-[2rem] mb-6 font-bold">How we raised 34M</h1>
            <p className="mb-6 text-[#ccc]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              neque porro ipsa laboriosam earum provident, veniam quae, dolores,
              ab ipsum id officiis error dolore! Provident molestiae mollitia
              accusamus voluptatibus quibusdam?
            </p>
          </div>
          <img
            className="w-2/3 md:w-[50%] rounded-md mx-auto"
            src={donation}
            alt=""
          />
        </div>
      </section>
      <Team />
      <Contribution />
      <News />
      <Event />
    </>
  );
};

export default About;
