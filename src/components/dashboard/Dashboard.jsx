import React, { useEffect, useState } from "react";
import Fp from "../../assets/fp.jpg";
import ft1 from "../../assets/1.jpg";
import ft2 from "../../assets/2.jpg";
import ft3 from "../../assets/3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Lg from "../../assets/logo1.png"
// import "./styles.css";

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Link } from "react-router-dom";
import { BsFillGiftFill, BsFillTicketPerforatedFill } from "react-icons/bs";

const Dashboard = () => {
  const [userName, setUserName] = useState("Nama Pengguna");
  const [userPoints, setUserPoints] = useState(10);

  // Simulasi pembaruan poin setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setUserPoints((prevPoints) => prevPoints + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [slides, setSlides] = useState([]);

  // Contoh data slide
  const initialSlides = [
    { id: 1, imageUrl: { ft1 }, alt: "Slide 1" },
    { id: 2, imageUrl: { ft2 }, alt: "Slide 2" },
    { id: 3, imageUrl: { ft3 }, alt: "Slide 3" },
  ];

  useEffect(() => {
    // Simulasi penambahan slide setiap 5 detik
    const interval = setInterval(() => {
      const newSlideId = slides.length + 1;
      const newSlide = {
        // id: newSlideId,
        imageUrl: newSlideId === 1 ? ft1 : newSlideId === 2 ? ft2 : ft3, // Sesuaikan dengan struktur proyek Anda
        alt: `Slide ${newSlideId}`,
        // alt: `Slide ${newSlideId}`,
      };

      setSlides((prevSlides) => [...prevSlides, newSlide]);
    }, 1000);

    return () => clearInterval(interval);
  }, [slides]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-800 mx-auto md:p-10">
      <div className="text-center flex justify-center font-semibold text-xl">
        <img src={Lg} alt="" className="md:w-[300px] w-[230px]"/>
        
      </div>
      <div className=" flex mt-2  md:ml-10">
        <div className="mr-3">
          <img src={Fp} alt="" className="w-12 h-auto  mt-1.5 rounded-full" />
        </div>
        <div className="text-lg font-semibold mb">
          <div>{userName}</div>{" "}
          <div className="text-[#6E205E] text-md mb-4">
            VVIP
            {/* Point: <span id="userPoints">{userPoints}</span> */}
          </div>
        </div>
      </div>

      <div className="bg-[#6E205E] m-2 md:ml-10 md:mr-10 text-white p-2 rounded-md mb-3">
        <div className="flex ">
          <div className="w-1/2 ml-1">
            <div>Saldo</div>
            <span>Rp. 100.000</span>
          </div>
          <div className="border-l-2 rounded-lg "></div>
          <div className="ml-3">
            <div>Point</div>
            <span>
              400.000 <span className="text-sm">Pts</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex  mb-3  justify-center ">
        <div className="bg-[#6E205E] flex flex-col items-center text-sm mr-3 p-3 rounded-md text-white pl-6 pr-6">
          <div className="">
            {" "}
            <BsFillGiftFill size={25} />
          </div>

          <p className="mt-2">Gift</p>
        </div>
        <div className="bg-[#6E205E] flex flex-col items-center text-sm mr-3 p-3 rounded-md text-white pl-6 pr-6">
          <div className="">
            {" "}
            <BsFillTicketPerforatedFill size={25} />
          </div>

          <p className="mt-2">E-Ticket</p>
        </div>
        <div className="bg-[#6E205E] flex flex-col items-center text-sm mr-3 p-3 rounded-md text-white pl-6 pr-6">
          <div className="">
            {" "}
            <BsFillGiftFill size={25} />
          </div>

          <p className="mt-2">Gift</p>
        </div>
        <div className="bg-[#6E205E] flex flex-col items-center text-sm mr-3 p-3 rounded-md text-white pl-6 pr-6">
          <div className="">
            {" "}
            <BsFillGiftFill size={25} />
          </div>

          <p className="mt-2">Gift</p>
        </div>
      </div>

      <div>
        <span className="font-bold text-lg text-gray-900 m-2 md:ml-10">
          What's New
        </span>
        <Swiper
          effect={"coverflow"}
          // grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className=""
          style={{
            width: "100%",
            paddingTop: "20px",
            paddingBottom: "10px",
            paddingLeft: "30px",
          }}
        >
          <SwiperSlide
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "300px",
              height: "300px",
            }}
          >
            {/* Center slide text vertically */}
            <div>
              <img
                src={ft1}
                className="rounded-md"
                style={{
                  display: "block",
                  width: "100%",
                }}
                alt="Slide 1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "300px",
              height: "300px",
            }}
          >
            {/* Center slide text vertically */}
            <div>
              <img
                src={ft2}
                className="rounded-md"
                style={{
                  display: "block",
                  width: "100%",
                }}
                alt="Slide 2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "300px",
              height: "300px",
            }}
          >
            {/* Center slide text vertically */}
            <div>
              <img
                src={ft3}
                className="rounded-md"
                style={{
                  display: "block",
                  width: "100%",
                }}
                alt="Slide 3"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mb-20">
        <div className="flex m-2 md:ml-10">
          {" "}
          <span className="font-bold text-lg w-4/5 text-gray-900">
            Special Offers
          </span>
          <Link
            to={"/product"}
            className="font-bold flex justify-end text-lg text-[#6E205E] hover:text-[#833a74]"
          >
            see all
          </Link>
        </div>

        <div className="mt-4 min-w-full md:ml-10 md:pr-20 overflow-x-auto ">
          <Swiper
            effect={"slide"}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={"auto"}
            // navigation={true}
            modules={[Autoplay, Navigation]}
          >
            <SwiperSlide
              style={{
                width: "140px", // Adjust the width of the slides
              }}
            >
              <div className="w-32 shadow-2xl">
                <div className="bg-gray-200 p-2 rounded-md">
                  <img
                    src={ft1}
                    className="block w-full h-20 object-cover mb-2 rounded"
                    alt="Slide 1"
                  />
                  <div className="text-gray-700 font-semibold text-sm">
                    Nasi Goreng
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: "140px", // Adjust the width of the slides
              }}
            >
              <div className="w-32 shadow-2xl">
                <div className="bg-gray-200 p-2 rounded-md">
                  <img
                    src={ft2}
                    className="block w-full h-20 object-cover mb-2 rounded"
                    alt="Slide 1"
                  />
                  <div className="text-gray-700 font-semibold text-sm">
                    Nasi Goreng
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: "140px", // Adjust the width of the slides
              }}
            >
              <div className="w-32 shadow-2xl">
                <div className="bg-gray-200 p-2 rounded-md">
                  <img
                    src={ft3}
                    className="block w-full h-20 object-cover mb-2 rounded"
                    alt="Slide 1"
                  />
                  <div className="text-gray-700 font-semibold text-sm">
                    Nasi Goreng
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: "140px", // Adjust the width of the slides
              }}
            >
              <div className="w-32 shadow-2xl">
                <div className="bg-gray-200 p-2 rounded-md">
                  <img
                    src={ft1}
                    className="block w-full h-20 object-cover mb-2 rounded"
                    alt="Slide 1"
                  />
                  <div className="text-gray-700 font-semibold text-sm">
                    Nasi Goreng
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: "140px", // Adjust the width of the slides
              }}
            >
              <div className="w-32 shadow-2xl">
                <div className="bg-gray-200 p-2 rounded-md">
                  <img
                    src={ft1}
                    className="block w-full h-20 object-cover mb-2 rounded"
                    alt="Slide 1"
                  />
                  <div className="text-gray-700 font-semibold text-sm">
                    Nasi Goreng
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: "140px", // Adjust the width of the slides
              }}
            >
              <div className="w-32 shadow-2xl">
                <div className="bg-gray-200 p-2 rounded-md">
                  <img
                    src={ft1}
                    className="block w-full h-20 object-cover mb-2 rounded"
                    alt="Slide 1"
                  />
                  <div className="text-gray-700 font-semibold text-sm">
                    Nasi Goreng
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: "140px", // Adjust the width of the slides
              }}
            >
              <div className="w-32 shadow-2xl">
                <div className="bg-gray-200 p-2 rounded-md">
                  <img
                    src={ft1}
                    className="block w-full h-20 object-cover mb-2 rounded"
                    alt="Slide 1"
                  />
                  <div className="text-gray-700 font-semibold text-sm">
                    Nasi Goreng
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: "140px", // Adjust the width of the slides
              }}
            >
              <div className="w-32 shadow-2xl">
                <div className="bg-gray-200 p-2 rounded-md">
                  <img
                    src={ft1}
                    className="block w-full h-20 object-cover mb-2 rounded"
                    alt="Slide 1"
                  />
                  <div className="text-gray-700 font-semibold text-sm">
                    Nasi Goreng
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: "140px", // Adjust the width of the slides
              }}
            >
              <div className="w-32 shadow-2xl">
                <div className="bg-gray-200 p-2 rounded-md">
                  <img
                    src={ft1}
                    className="block w-full h-20 object-cover mb-2 rounded"
                    alt="Slide 1"
                  />
                  <div className="text-gray-700 font-semibold text-sm">
                    Nasi Goreng
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: "140px", // Adjust the width of the slides
              }}
            >
              <div className="w-32 shadow-2xl">
                <div className="bg-gray-200 p-2 rounded-md">
                  <img
                    src={ft1}
                    className="block w-full h-20 object-cover mb-2 rounded"
                    alt="Slide 1"
                  />
                  <div className="text-gray-700 font-semibold text-sm">
                    Nasi Goreng
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: "140px", // Adjust the width of the slides
              }}
            >
              <div className="w-32 shadow-2xl">
                <div className="bg-gray-200 p-2 rounded-md">
                  <img
                    src={ft1}
                    className="block w-full h-20 object-cover mb-2 rounded"
                    alt="Slide 1"
                  />
                  <div className="text-gray-700 font-semibold text-sm">
                    Nasi Goreng
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: "140px", // Adjust the width of the slides
              }}
            >
              <div className="w-32 shadow-2xl">
                <div className="bg-gray-200 p-2 rounded-md">
                  <img
                    src={ft1}
                    className="block w-full h-20 object-cover mb-2 rounded"
                    alt="Slide 1"
                  />
                  <div className="text-gray-700 font-semibold text-sm">
                    Nasi Goreng
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Add more SwiperSlides as needed */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
