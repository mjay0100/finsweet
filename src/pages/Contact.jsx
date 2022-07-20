import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import Form from "../components/Form";

const Contact = () => {
  return (
    <>
      <section className="px-[3rem] bg-[#EBF0F9] py-[2rem] ">
        <div className="md:flex w-[85%] mx-auto items-center">
          <div className="mt-[2rem] md:w-[50%] px-4 ">
            <p className="uppercase mb-6">what we do</p>
            <h1 className="text-5xl mb-6 font-bold">
              We'd love to hear from you
            </h1>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              neque porro ipsa laboriosam ?
            </p>
          </div>
          <div className="mt-8 grid w-[40%] mx-auto gap-6 md:w-[50%]">
            <div className="grid gap-3 items-center">
              <h1 className="text-2xl font-semibold">Let's talk!</h1>
              <p>+1 234 56 789</p>
            </div>
            <div className="grid gap-3 items-center">
              <h1 className="text-2xl font-semibold">Head Office</h1>
              <p>8 Brewery Drive, Hudson, NH 03051 USA</p>
            </div>
            <div className="grid gap-3 items-center">
              <h1 className="text-2xl font-semibold">Branch Office</h1>
              <p>178 Marconi St., Venice, 34293 Italy</p>
            </div>
            <div className="flex gap-3">
              <span>
                <FaFacebook />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaLinkedin />
              </span>
            </div>
          </div>
        </div>
      </section>
      <Form />
    </>
  );
};

export default Contact;
