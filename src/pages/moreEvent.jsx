import event from "../public/images/event.png";
import Event from "../components/Event";
import { GrLocation } from "react-icons/gr";
import { AiOutlineCalendar } from "react-icons/ai";

const MoreEvent = () => {
  return (
    <>
      <div className=" py-[4rem] my-8 bg-[#EFF7F2]">
        <h1 className="text-4xl w-[85%] md:w-[60%] font-semibold  mx-auto">
          Say no to using plastic and save Earth{" "}
        </h1>
        <div className="flex gap-6 w-[85%] md:w-[60%] mx-auto my-8">
          <p>
            <span className="text-2xl">
              <GrLocation />
            </span>
            8 Brewery Drive, Hudson, NH 03051, USA
          </p>
          <p>
            <span className="text-2xl">
              <AiOutlineCalendar />
            </span>{" "}
            September 3, 2021 8:30 AM
          </p>
        </div>
      </div>
      <section className="w-[85%] mx-auto md:w-[60%] mt-8">
        <h1 className="font-bold  text-2xl md:text-3xl mb-4">About</h1>
        <p className="mb-6">
          Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
          in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
          tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
          accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in
          viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
          vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum
          amet, nisi eu id.
        </p>
        <p className="mb-6">
          Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus
          sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras
          volutpat dui. A bibendum viverra eu cras. Mauris morbi sed dignissim a
          in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec
          arcu sed elit scelerisque tempor ornare tristique. Integer faucibus
          duis praesent tempor feugiat ornare in. Erat libero egestas porttitor
          nunc pellentesque mauris et pulvinar eget.
        </p>

        <img src={event} alt="" />

        <p className="mt-5">
          Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at
          sit convallis blandit blandit in. Maecenas odio orci lectus urna ante
          consequat erat non morbi. Rhoncus ullamcorper dictum sit non semper
          sit tellus adipiscing. Est sapien rhoncus sit vestibulum sollicitudin.
          Tellus urna malesuada eu id tempus lorem. Est aliquam sem bibendum
          felis interdum pharetra.
        </p>
      </section>
      <Event title="Other Events" />
    </>
  );
};

export default MoreEvent;
