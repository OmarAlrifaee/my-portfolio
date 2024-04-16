import avatar1 from "../assets/myPhoto/gaming.avif";
import avatar2 from "../assets/myPhoto/coding.webp";
import avatar3 from "../assets/myPhoto/gym.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Hobbies = () => {
  return (
    <section id="hobbies">
      <h5>Thats Me</h5>
      <h2>My Hobbies</h2>
      <div className="container md:w-[40%]">
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="bg-c-bg-variant p-5 py-12 rounded-xl select-none cursor-grab min-h-[250px]">
              <div className="overflow-hidden aspect-[1/1] w-[4rem] rounded-[50%] mx-auto mb-3 border-[4px] border-c-primary-variant">
                <img
                  src={avatar1}
                  alt=""
                />
              </div>
              <h5>Playing Video Games</h5>
              <small className="text-c-light font-[300] w-[80%]  mx-auto mt-3">
                I Love Playing Shotting Video Games, Games Such As CS:GO and
                Valorant
              </small>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-c-bg-variant p-5 py-12 rounded-xl select-none cursor-grab min-h-[250px]">
              <div className="overflow-hidden aspect-[1/1] w-[4rem] rounded-[50%] mx-auto mb-3 border-[4px] border-c-primary-variant">
                <img
                  src={avatar2}
                  alt=""
                />
              </div>
              <h5>Writing Code</h5>
              <small className="text-c-light font-[300] w-[80%]  mx-auto mt-3">
                I Just Love Doing My Job
              </small>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-c-bg-variant p-5 py-12 rounded-xl select-none cursor-grab min-h-[250px]">
              <div className="overflow-hidden aspect-[1/1] w-[4rem] rounded-[50%] mx-auto mb-3 border-[4px] border-c-primary-variant">
                <img
                  src={avatar3}
                  alt=""
                />
              </div>
              <h5>Body Building</h5>
              <small className="text-c-light font-[300] w-[80%]  mx-auto mt-3">
                It's An Amazing Way To Keep Your Self Healthy And Strong
              </small>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hobbies;
