import News from "../components/News";
import Event from "../components/Event";
import { mediaData } from "../data";

const Media = () => {
  return (
    <>
      {/* our goal */}
      <section className="bg-green-100/60 px-[3rem] py-[2rem] ">
        <div className="md:flex w-[85%] mx-auto items-center">
          <div className="mt-[2rem] md:w-[50%] px-4 ">
            <p className="uppercase mb-6">what we do</p>
            <h1 className="text-[2rem] mb-6 font-bold">
              Our goal is to make water available for everyone
            </h1>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              neque porro ipsa laboriosam ?
            </p>
            <button className="bg-green-400 hover:bg-green-500 transition-all duration-300 py-2 px-4 rounded-md text-white">
              Learn More
            </button>
          </div>
          <div className="mt-8 grid gap-6 md:w-[50%]">
            {mediaData.map((data) => {
              const { id, img, title, body } = data;
              return (
                <div key={id} className="flex gap-3">
                  <img src={img} alt="" />
                  <div className="grid gap-3">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <p>{body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <News title="Read Our Recent News" />

      <Event />
    </>
  );
};

export default Media;
