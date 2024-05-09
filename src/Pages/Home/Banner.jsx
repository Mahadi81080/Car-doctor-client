import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../../car-doctor-resources-main/images/banner/1.jpg";
import logo2 from "../../../car-doctor-resources-main/images/banner/2.jpg";
import logo3 from "../../../car-doctor-resources-main/images/banner/3.jpg";
import logo4 from "../../../car-doctor-resources-main/images/banner/4.jpg";
import logo5 from "../../../car-doctor-resources-main/images/banner/5.jpg";
import logo6 from "../../../car-doctor-resources-main/images/banner/6.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <>
      <div className="my-7">
        <Swiper
            spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              id="slide1"
              className="carousel-item relative w-full rounded-lg h-72  lg:h-96"
            >
              <img src={logo} className="w-full rounded-lg" />
              <div className="absolute rounded-lg top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className="space-y-5 pl-12 pt-12 text-left">
                  <h5
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className=" font-bold sm:text-xs lg:text-5xl text-white"
                  >
                    Affordable <br /> Price For Car <br /> Servicing
                  </h5>
                  <h2
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className=" font-Gramond text-white"
                  >
                    There are many variations of passages of available, but{" "}
                    <br /> the majority have suffered alteration in some form
                  </h2>
                  <div className="flex gap-5">
                    <button
                      data-aos="zoom-in"
                      data-aos-duration="1700"
                      className="btn bg-[#ff3811] text-white border-none"
                    >
                      Discover More
                    </button>
                    <button className="btn btn-outline text-white">
                      Latest Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              id="slide1"
              className="carousel-item relative w-full h-72  lg:h-96"
            >
              <img src={logo2} className="w-full rounded-lg" />
              <div className="absolute rounded-lg top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className="space-y-5 pl-12 pt-12 text-left">
                  <h5
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className=" font-bold sm:text-xs lg:text-5xl text-white"
                  >
                    Affordable <br /> Price For Car <br /> Servicing
                  </h5>
                  <h2
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className=" font-Gramond text-white"
                  >
                    There are many variations of passages of available, but{" "}
                    <br /> the majority have suffered alteration in some form
                  </h2>
                  <div className="flex gap-5">
                    <button
                      data-aos="zoom-in"
                      data-aos-duration="1700"
                      className="btn bg-[#ff3811] text-white border-none"
                    >
                      Discover More
                    </button>
                    <button className="btn btn-outline text-white">
                      Latest Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              id="slide1"
              className="carousel-item relative w-full h-72  lg:h-96"
            >
              <img src={logo3} className="w-full rounded-lg" />
              <div className="absolute rounded-lg top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className="space-y-5 pl-12 pt-12 text-left">
                  <h5
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className=" font-bold sm:text-xs lg:text-5xl text-white"
                  >
                    Affordable <br /> Price For Car <br /> Servicing
                  </h5>
                  <h2
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className=" font-Gramond text-white"
                  >
                    There are many variations of passages of available, but{" "}
                    <br /> the majority have suffered alteration in some form
                  </h2>
                  <div className="flex gap-5">
                    <button
                      data-aos="zoom-in"
                      data-aos-duration="1700"
                      className="btn bg-[#ff3811] text-white border-none"
                    >
                      Discover More
                    </button>
                    <button className="btn btn-outline text-white">
                      Latest Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              id="slide1"
              className="carousel-item relative w-full h-72  lg:h-96"
            >
              <img src={logo4} className="w-full rounded-lg" />
              <div className="absolute rounded-lg top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className="space-y-5 pl-12 pt-12 text-left">
                  <h5
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className=" font-bold sm:text-xs lg:text-5xl text-white"
                  >
                    Affordable <br /> Price For Car <br /> Servicing
                  </h5>
                  <h2
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className=" font-Gramond text-white"
                  >
                    There are many variations of passages of available, but{" "}
                    <br /> the majority have suffered alteration in some form
                  </h2>
                  <div className="flex gap-5">
                    <button
                      data-aos="zoom-in"
                      data-aos-duration="1700"
                      className="btn bg-[#ff3811] text-white border-none"
                    >
                      Discover More
                    </button>
                    <button className="btn btn-outline text-white">
                      Latest Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              id="slide1"
              className="carousel-item relative w-full h-72  lg:h-96"
            >
              <img src={logo5} className="w-full  rounded-lg" />
              <div className="absolute rounded-lg top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className="space-y-5 pl-12 pt-12 text-left">
                  <h5
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className=" font-bold sm:text-xs lg:text-5xl text-white"
                  >
                    Affordable <br /> Price For Car <br /> Servicing
                  </h5>
                  <h2
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className=" font-Gramond text-white"
                  >
                    There are many variations of passages of available, but{" "}
                    <br /> the majority have suffered alteration in some form
                  </h2>
                  <div className="flex gap-5">
                    <button
                      data-aos="zoom-in"
                      data-aos-duration="1700"
                      className="btn bg-[#ff3811] text-white border-none"
                    >
                      Discover More
                    </button>
                    <button className="btn btn-outline text-white">
                      Latest Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              id="slide1"
              className="carousel-item relative w-full h-72  lg:h-96"
            >
              <img src={logo6} className="w-full rounded-lg " />
              <div className="absolute rounded-lg top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className="space-y-5 pl-12 pt-12 text-left">
                  <h5
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className=" font-bold sm:text-xs lg:text-5xl text-white"
                  >
                    Affordable <br /> Price For Car <br /> Servicing
                  </h5>
                  <h2
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className=" font-Gramond text-white"
                  >
                    There are many variations of passages of available, but{" "}
                    <br /> the majority have suffered alteration in some form
                  </h2>
                  <div className="flex gap-5">
                    <button
                      data-aos="zoom-in"
                      data-aos-duration="1700"
                      className="btn bg-[#ff3811] text-white border-none"
                    >
                      Discover More
                    </button>
                    <button className="btn btn-outline text-white">
                      Latest Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
