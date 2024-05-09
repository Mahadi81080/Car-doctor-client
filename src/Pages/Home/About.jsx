import parts from "../../../car-doctor-resources-main/images/about_us/parts.jpg";
import person from "../../../car-doctor-resources-main/images/about_us/person.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen -mt-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl h-96" />
          <img
            src={parts}
            className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-2/3 border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2 space-y-2">
          <h1 className="text-[#ff3811] text-xl">About Us</h1>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="pt-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p className="py-2">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button
            data-aos="zoom-in"
            data-aos-duration="1700"
            className="p-3 bg-[#ff3811] text-white border-none"
          >
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
