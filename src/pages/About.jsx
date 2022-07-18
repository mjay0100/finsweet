import Contribution from "../components/Contribution";
import News from "../components/News";
import Event from "../components/Event";
import logo from "../public/images/logo.svg";
import logo2 from "../public/images/logo2.svg";
import logo3 from "../public/images/logo3.svg";
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
            src="https://s3-alpha-sig.figma.com/img/6b0d/2b7a/bcbc1e3e336fe96e9e9bc64f47322768?Expires=1658707200&Signature=UeQd0PbtwvsAcAFwvtwyi6VDcI3Sqskt-NHvI7hFddZlmgeSZzOtQmHzEWcXWDGVuw3kbvqDJzou1WdOLGeaDNpQ3xLSM13XSlvh8cxKr74RjACWPdR1Oaf51HqtsELyRIoVRwHf1B1GZWzlToWhXdKEJ-LFROYmCX5p71S1or4nytphbBQq40yJctDEVfiAMZjvizZp1~i~6q8FWTzJqrHJ-11Fa1IsmXgv5ibJ3ik7Ddbmo0mMb4cpqInaroDqo-KYl4rIj70~eR4Uunm0jA2MCIHHO9nsPsqEvVxPw47Jlj0e~tPapgo5mp2q10bMs-BuDcsxmZr6LrtZx-iDeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
      
      <Contribution />
      <News />
      <Event />
    </>
  );
};

export default About;
