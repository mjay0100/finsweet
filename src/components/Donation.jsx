import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const data = {
  datasets: [
    {
      data: [40, 35, 10, 10, 5],
      borderColor: ["rgba(255,206,86,0.2)"],
      backgroundColor: [
        "rgba(232,99,132,1)",
        "rgba(232,211,6,1)",
        "rgba(54,162,235,1)",
        "rgba(255,159,64,1)",
        "rgba(153,102,255,1)",
      ],
      pointBackgroundColor: "rgba(255,206,86,0.2)",
    },
  ],
};

const Donation = () => {
  return (
    <section className=" mb-[4rem] p-[1.2rem] flex justify-between bg-black text-white">
      <div className="mt-[2rem]  py-[5.5rem] pl-[5rem] text-white">
        <h1 className="text-[3rem] mb-6 font-bold">
          How we spend your <br /> donations and where it goes forever.
        </h1>
        <p className="text-white/60">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, libero?
        </p>
        <div className="grid grid-cols-3 mt-[3rem]">
          <div className="flex gap-4">
            <input type="checkbox" />
            <p>40% planting trees</p>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" />
            <p>35% planting trees</p>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" />
            <p>10% planting trees</p>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" />
            <p>10% planting trees</p>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" />
            <p>5% planting trees</p>
          </div>
        </div>
      </div>
      <div className="mt-[6rem] mx-[4rem]">
        <Doughnut data={data} />
      </div>
    </section>
  );
};

export default Donation;
