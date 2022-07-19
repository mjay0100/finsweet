import { team } from "../data";
// console.log(team);

const Team = () => {
  return (
    <section className="mt-[3rem]">
      <div className="text-center">
        <h1 className="font-bold text-4xl mb-4">Meet our Team</h1>
        <p className="w-[40%] mx-auto mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non
          numquam quia nobis, delectus perferendis? Ad doloremque sit quo
          asperiores.
        </p>
      </div>
      <div className="grid grid-cols-2 text-center md:grid-cols-4 gap-8 w-[90%] mx-auto">
        {team.map((person) => {
          const { id, img, name, title, icons } = person;          return (
            <div key={id}>
              <img
                className="rounded-lg h-[320px] object-cover"
                src={img}
                alt=""
              />
              <p className="text-lg my-2 capitalize">{name}</p>
              <p className="w-[50%] mx-auto mb-2 capitalize"> {title}</p>
              <div className="flex gap-3 justify-center">
                {icons.map((link, index) => {
                  const { icon } = link;
                  return <a key={index}>{icon}</a>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Team;
