import Works from "../components/Works";
import Contribution from "../components/Contribution";
import News from "../components/News";
import Event from "../components/Event";
import serviceBg from "../public/images/service-page/service.png";
import { workData } from "../data";

const Services = ({title}) => {
  return (
    <>
      <section className="px-[3rem]  py-6">
        <div className="block md:flex pb-5 w-[85%] mx-auto items-center">
          <div className="mt-[2rem] md:w-[50%] px-5">
            <p className="uppercase mb-6">Know about us</p>
            <h1 className="text-4xl mb-6 font-bold">
              We are working worldwide
            </h1>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              neque porro ipsa laboriosam earum provident, veniam quae, dolores,
              ab ipsum id officiis error dolore! Provident molestiae mollitia
              accusamus voluptatibus quibusdam?
            </p>
          </div>
          <img
            className="h-[60vh] md:w-[50%] my-[3rem] object-cover rounded-md mx-auto"
            src={serviceBg}
            alt=""
          />
        </div>
      </section>
      {/* what we do for environment */}
      <section className="bg-green-100/60 px-[3rem] py-[2rem] ">
        <div className="w-[85%] mx-auto items-center">
          <div className="mt-[2rem] px-4">
            <h1 className="text-[2rem] mb-6 font-bold">
              what we do for the environment
            </h1>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              neque porro ipsa laboriosam ?
            </p>
            <div className="grid grid-cols-3 gap-4">
              {workData.map((data) => {
                const { id, icon, title, text } = data;
                return (
                  <div className="flex items-start gap-3 mb-6" key={id}>
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
            </div>
          </div>
        </div>
      </section>

      <Works />
      <Contribution />
      <News />
      <Event />
    </>
  );
};

export default Services;
