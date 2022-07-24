import blog from "../public/images/blog.png";

const Blog = () => {
  return (
    <>
      <section className="w-[85%] mx-auto md:w-[60%] mt-8">
        <p className="uppercase mb-4 mt-8 text-center">24 July, 2020</p>
        <h1 className="font-bold text-center text-2xl md:text-3xl mb-4">
          Is climate change happening faster than expected?
        </h1>
        <p className="mb-6 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <img src={blog} alt="" />
        <h1 className="font-bold my-8 text-2xl md:text-3xl text-center">
          Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque
        </h1>
        <p className="mb-5">
          Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at
          sit convallis blandit blandit in. Maecenas odio orci lectus urna ante
          consequat erat non morbi. Rhoncus ullamcorper dictum sit non semper
          sit tellus adipiscing. Est sapien rhoncus sit vestibulum sollicitudin.
          Tellus urna malesuada eu id tempus lorem. Est aliquam sem bibendum
          felis interdum pharetra.
        </p>
        <p className="mb-5">
          Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at
          sit convallis blandit blandit in. Maecenas odio orci lectus urna ante
          consequat erat non morbi. Rhoncus ullamcorper dictum sit non semper
          sit tellus adipiscing. Et sapien rhoncus sit vestibulum sollicitudin.
          Tellus urna malesuada eu id tempus lorem. Est aliquam sem bibendum
          felis interdum pharetra.
        </p>
        <p className="mb-5">
          Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at
          sit convallis blandit blandit in. Maecenas odio orci lectus urna ante
          consequat erat non morbi. Rhoncus ullamcorper dictum sit non semper
          sit tellus adipiscing. Est sapien rhoncus sit vestibulum sollicitudin.
          Tellus urna malesuada eu id tempus lorem. Est aliquam sem bibendum
          felis interdum pharetra.
        </p>
        <h1 className="text-lg font-semibold mb-4">
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h1>
        <ul className="list-disc px-6 my-3">
          <li>Posuere sed pulvinar enim faucibus justo, cursus.</li>
          <li>Posuere sed pulvinar enim faucibus justo, cursus.</li>
          <li>
            In diam facilisi at sit convallis blan dit blandit in. Maecenas odio
            orci lectus urna ante consequat erat non morbi.
          </li>
        </ul>

        <h1 className="text-lg font-semibold my-4">
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h1>
        <p className="mb-4">
          Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
          in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
          tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
          accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in
          viverra mi ut quisque.
        </p>
        <p className="mb-4">
          In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget
          accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
          Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus
          sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras
          volutpat dui. A bibendum viverra eu cras.
        </p>
      </section>
    </>
  );
};

export default Blog;
