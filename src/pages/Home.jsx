import { BsFillPlayCircleFill } from "react-icons/bs";
import logo from "../public/images/logo/logo.svg";
import logo2 from "../public/images/logo/logo2.svg";
import logo3 from "../public/images/logo/logo3.svg";
import { workData } from "../data";
import Donation from "../components/Donation";
import Works from "../components/Works";
import Contribution from "../components/Contribution";
import News from "../components/News";
import Event from "../components/Event";


const Home = () => {
  return (
    <>
      {/* cover */}
      <section className="cover p-5 text-white">
        <div className="m-[3rem] py-6 ">
          <h1 className="text-3xl md:text-5xl mt-[4rem] font-bold mb-4">
            Save the environment <br /> today for a better <br /> tomorrow
          </h1>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white text-black rounded-md">
              What we do
            </button>
            <button className="flex items-center gap-1">
              <span>
                <BsFillPlayCircleFill />
              </span>
              Play Video
            </button>
          </div>
        </div>
        <div className="flex gap-4 items-center mx-[3rem] mt-[10rem] mb-[4rem]">
          <p className="text-center">23,000 trees planted</p>
          <div className=" w-[55%] md:w-2/3 h-[1px] bg-white"></div>
          <p className="text-center">5480 donations collected</p>
        </div>
      </section>

      {/* about */}
      <section className="px-[3rem]  py-6">
        <div className="block md:flex pb-5 w-[85%] mx-auto items-center">
          <div className="mt-[2rem] md:w-[50%] px-5">
            <p className="uppercase mb-6">Know about us</p>
            <h1 className="text-[2rem] mb-6 font-bold">
              We help nature smile and survive{" "}
            </h1>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              neque porro ipsa laboriosam earum provident, veniam quae, dolores,
              ab ipsum id officiis error dolore! Provident molestiae mollitia
              accusamus voluptatibus quibusdam?
            </p>
            <p className="mb-[2rem]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis a deleniti odit nobis, magnam itaque minus asperiores,
              sint pariatur vitae, quo recusandae quasi optio sequi id iusto
              doloremque? Doloremque, corrupti?
            </p>
            <button className="bg-green-400 hover:bg-green-500 transition-all duration-300 py-2 px-4 rounded-md text-white">
              Learn More
            </button>
          </div>
          <img
            className="h-[80vh] md:h-[50vh] my-[3rem] rounded-md mx-auto"
            src="https://images.unsplash.com/photo-1605713288610-00c1c630ca1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWxkcmVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="flex items-center gap-[1.5rem] justify-center mb-[1.5rem]">
          <p className="text-lg">Our supporters</p>
          <div className="w-[77%] h-[1px] bg-slate-400"></div>
        </div>
        <div className="grid grid-cols-3 gap-5 w-[90%] mx-auto  lg:flex text-lg text-[#ccc] items-center justify-evenly mb-[3.5rem]">
          <img src={logo2} alt="" />
          <img src={logo} alt="" />
          <img src={logo3} alt="" />
          <img src={logo2} alt="" />
          <img src={logo} alt="" />
          <img src={logo3} alt="" />
        </div>
      </section>

      {/* services */}
      <section className="bg-green-100/60 px-[3rem] py-[2rem] ">
        <div className="md:flex w-[85%] mx-auto items-center">
          <div className="mt-[2rem] md:w-[50%] px-4 ">
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
                    <h1 className="font-semibold text-2xl capitalize">
                      {title}
                    </h1>
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
            className="h-[80vh] md:h-[50vh] my-[3rem] rounded-md mx-auto"
            src="https://images.unsplash.com/photo-1605713288610-00c1c630ca1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWxkcmVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </section>
      <Works />
      <Donation />
      <Contribution />
      <News/>
      <Event/>
    </>
  );
};

export default Home;
