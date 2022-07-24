import Works from "../components/Works";
import Contribution from "../components/Contribution";
import projectImg from "../public/images/projectImg.png";
import { workData } from "../data";

const Project = () => {
  return (
    <>
      <section className="w-[85%] mx-auto md:w-[60%] mt-8">
        <p className="text-lg font-semibold uppercase mb-4">our project</p>
        <h1 className="font-bold text-5xl mb-8">
          Weekly cleanliness program in the city
        </h1>
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          neque porro ipsa laboriosam earum provident, veniam quae, dolores, ab
          ipsum id officiis error dolore! Provident molestiae mollitia accusamus
          voluptatibus quibusdam? ipsum id officiis error dolore! Provident
          molestiae mollitia accusamus voluptatibus quibusdam?
        </p>
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          neque porro ipsa laboriosam earum provident, veniam quae, dolores, ab
          ipsum id officiis error dolore! Provident molestiae mollitia accusamus
          voluptatibus quibusdam?ipsum id officiis error dolore! Provident
          molestiae mollitia accusamus voluptatibus quibusdam?
        </p>
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          neque porro ipsa laboriosam earum provident, veniam quae, dolores, ab
          ipsum id officiis error dolore! Provident molestiae mollitia accusamus
          voluptatibus quibusdam? ipsum id officiis error dolore! Provident
          molestiae mollitia accusamus voluptatibus quibusdam?
        </p>
        <img src={projectImg} alt="" />
        <h1 className="font-bold my-8 text-3xl">Some cool heading</h1>
        <p className="mb-5">
          Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at
          sit convallis blandit blandit in. Maecenas odio orci lectus urna ante
          consequat erat non morbi. Rhoncus ullamcorper dictum sit non semper
          sit tellus adipiscing. Est sapien rhoncus sit vestibulum sollicitudin.
          Tellus urna malesuada eu id tempus lorem. Est aliquam sem bibendum
          felis interdum pharetra. Diam fermentum in lectus morbi at eget sit et
          quisque. Semper commodo viverra donec magna egestas nibh. Condimentum
          pellentesque auctor ornare at at tellus nunc cras eu. Velit dignissim
          penatibus faucibus tempus. Arcu pharetra morbi bibendum et dolor
          volutpat amet. Sed mauris amet mi sed purus vitae odio. Mi eu lectus
          suscipit sagittis, ultrices ut dui.
        </p>
        <ul className="list-disc px-6 my-3">
          <li>Posuere sed pulvinar enim faucibus justo, cursus.</li>
          <li>Posuere sed pulvinar enim faucibus justo, cursus.</li>
          <li>
            In diam facilisi at sit convallis blandit blandit in. Maecenas odio
            orci lectus urna ante consequat erat non morbi.
          </li>
        </ul>
        <p>
          Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at
          sit convallis blandit blandit in. Maecenas odio orci lectus urna ante
          consequat erat non morbi.
        </p>
      </section>
      <section className="bg-[#EBF0F9] px-[3rem] py-[4rem] my-12 ">
        <div className="grid md:grid-cols-2 w-[85%] mx-auto items-center">
          {workData.map((data) => {
            const { id, icon, title, text } = data;
            return (
              <div className="flex items-center gap-6 mb-6" key={id}>
                <span className="text-lg text-white bg-green-300 p-1 rounded-md">
                  {icon}
                </span>
                <div>
                  <h1 className="font-semibold text-2xl capitalize">{title}</h1>
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Works title="" header="" />
      <Contribution />
    </>
  );
};

export default Project;
