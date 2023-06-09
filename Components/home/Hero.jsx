import Link from "next/link";

const Hero = ({ handleClickScroll, handleHeaderVideo }) => {
  return (
    <div className="relative h-screen overflow-x-hidden">
      {/*    <img className="w-full hidden sm:block" src="/images/Home/Hero.png" alt="" />
      <img className="w-full sm:hidden" src="/images/Home/Hero Mobile.png" alt="" /> */}
      <video
        autoPlay
        muted
        loop
        className="w-screen h-screen hidden sm:block md:object-cover object-fill bg-black opacity-30 z-0"
      >
        <source
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/header_video.mp4"
          type="video/mp4"
        />
      </video>
      <img
        src="https://toggletechlab.s3.us-east-2.amazonaws.com/Mobile/mobile-header-min.png"
        alt="mobile-header"
        className="w-screen h-screen sm:hidden block object-cover"
      />

      <div className="absolute top-36 md:top-1/4 w-full 2xl:top-1/3">
        <div className="w-11/12  md:w-3/4 mx-auto">
          <div className="md:w-3/5">
            <p className="text-gold uppercase text-base  mb-2">
              Immersive Prototyping for Startups
            </p>
            <h1 className="font-sans text-2xl md:text-3xl lg:text-4xl text-white w-11/12 md:leading-12">
              Transforming Ideas into Reality with{" "}
              <span className="text-gold">XR</span> Technology
            </h1>
            <p className="text-grey text-base md:text-lg mt-12 font-montserrat w-4/5">
              Experience the future of your startup with immersive prototypes
              that captivate investors
            </p>
            <div className=" md:flex mt-8">
              <button
                onClick={handleClickScroll}
                className="text-black font-medium text-base md:text-lg bg-gold rounded-3xl py-2 px-7 md:px-5 mr-4"
              >
                Get Started
              </button>
              <Link className="mt-4 md:mt-0 sm:block hidden" href="/portfolio">
                <button className="text-gold text-base md:text-lg border-2 border-white rounded-3xl py-2 px-4">
                  Watch a Demo
                </button>
              </Link>
              {/* <button
                className="text-gold text-base md:text-lg border-2 sm:hidden block
              border-white rounded-3xl py-2 px-4 mt-4"
                onClick={handleHeaderVideo}
              >
                Watch a Demo
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
