import { newsData } from "../data";

const News = () => {
  return (
    <section className=" mx-[6rem] rounded-lg mb-[4rem]">
      <div className="mt-[6rem] mb-[4rem] items-center flex gap-2 ">
        <h1 className="text-[2rem] font-bold">Read Our News</h1>
        <div className="w-[77%] h-[1px] bg-slate-400"></div>
      </div>
      <div className="flex justify-between gap-5">
        {newsData.map((data) => {
          const { id, img, title, text } = data;
          return (
            <div key={id}>
              <img className="mb-3 h-[180px]" src={img} alt="" />
              <h1 className="text-[1.3rem] font-semibold mb-3">{title}</h1>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default News;
