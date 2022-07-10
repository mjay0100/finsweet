import Cover from "./Cover";
import About from "./About";
import Services from "./Services";
import Works from "./Works";
import Donation from "./Donation";
import Contribution from "./Contribution";
import News from "./News";
import Event from "./Event";
import Footer from "./Footer";

const Content = () => {
  return (
    <div>
      <Cover />
      <About />
      <Services />
      <Works />
      <Donation />
      <Contribution />
      <News/>
      <Event/>
      <Footer/>
    </div>
  );
};

export default Content;
