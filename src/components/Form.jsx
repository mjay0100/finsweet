const Form = () => {
    
  return (
    <>
      <form action="" className="w-[50%] mt-8 mx-auto grid grid-cols-2 gap-5">
        <div className="grid gap-2 ">
          <label className="text-sm" htmlFor="first-name">
            First Name
          </label>
          <input
            className="border-b p-2 border-solid border-slate-200"
            id="first-name"
            type="text"
            placeholder="John"
          />
        </div>
        <div className="grid gap-2 ">
          <label className="text-sm" htmlFor="last-name">
            Last Name
          </label>
          <input
            className="border-b p-2 border-solid border-slate-200"
            id="last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
        <div className="grid gap-2 ">
          <label className="text-sm" htmlFor="email">
            Email ID
          </label>
          <input
            className="border-b p-2 border-solid border-slate-200"
            id="email"
            type="text"
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className="grid gap-2 ">
          <label className="text-sm" htmlFor="subject">
            Subject
          </label>
          <input
            className="border-b p-2 border-solid border-slate-200"
            id="subject"
            type="text"
          />
        </div>
        <div className="grid gap-2 col-span-2">
          <label className="text-sm" htmlFor="message">
            Message
          </label>

          <textarea
            className="border p-2 text-xs border-solid border-slate-200 "
            id="message"
            cols="8"
            rows="8"
          >
            Type your message
          </textarea>
        </div>
        <div className="mt-4 justify-center grid col-span-2">
          <button className="py-2 px-3 rounded-md bg-green-300">
            Send message
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
