import { BsFillPlayCircleFill } from "react-icons/bs";

function Cover() {
  return (
    <section className="cover p-5 text-white">
      <div className="m-[3rem] py-6 ">
        <h1 className="text-[3.5rem] mt-[4rem] font-bold mb-4">
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
        <p>23,000 trees planted</p>
        <div className="w-2/3 h-[1px] bg-white"></div>
        <p>5480 donations collected</p>
      </div>
    </section>
  );
}

export default Cover;
