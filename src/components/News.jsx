import { newsData } from "../data";

const News = ({ title }) => {
  return (
    <section className=" mx-[1rem] rounded-lg mb-[4rem]">
      <div className="mt-[6rem] mb-[4rem] items-center text-center gap-2 ">
        <h1 className="mb-4 text-[2rem] font-bold">{title}</h1>
      </div>
      <div className="grid grid-cols-2 md:flex justify-between gap-5 mx-[2rem]">
        {newsData.map((data) => {
          const { id, img, title, text } = data;
          return (
            <div key={id}>
              <img className="mb-" src={img} alt="" />
              <h1 className="text-[1.3rem] font-semibold mb-3">{title}</h1>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

News.defaultProps = {
  title: "Read Our News",
};

export default News;
