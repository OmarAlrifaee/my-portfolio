import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import avatar4 from "../assets/avatar4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <div className="container md:w-[40%]">
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="bg-c-bg-variant p-5 py-12 rounded-xl select-none cursor-grab">
              <div className="overflow-hidden aspect-[1/1] w-[4rem] rounded-[50%] mx-auto mb-3 border-[4px] border-c-primary-variant">
                <img
                  src={avatar1}
                  alt=""
                />
              </div>
              <h5>Lorem ipsum dolor sit amet.</h5>
              <small className="text-c-light font-[300] w-[80%]  mx-auto mt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At in
                quae maxime nisi, quaerat consequatur officia voluptatum tempora
                debitis doloremque provident dolorum voluptatem? Ratione
                numquam, quis eius maiores saepe fuga.
              </small>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-c-bg-variant p-5 py-12 rounded-xl select-none cursor-grab">
              <div className="overflow-hidden aspect-[1/1] w-[4rem] rounded-[50%] mx-auto mb-3 border-[4px] border-c-primary-variant">
                <img
                  src={avatar2}
                  alt=""
                />
              </div>
              <h5>Lorem ipsum dolor sit amet.</h5>
              <small className="text-c-light font-[300] w-[80%]  mx-auto mt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At in
                quae maxime nisi, quaerat consequatur officia voluptatum tempora
                debitis doloremque provident dolorum voluptatem? Ratione
                numquam, quis eius maiores saepe fuga.
              </small>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-c-bg-variant p-5 py-12 rounded-xl select-none cursor-grab">
              <div className="overflow-hidden aspect-[1/1] w-[4rem] rounded-[50%] mx-auto mb-3 border-[4px] border-c-primary-variant">
                <img
                  src={avatar3}
                  alt=""
                />
              </div>
              <h5>Lorem ipsum dolor sit amet.</h5>
              <small className="text-c-light font-[300] w-[80%]  mx-auto mt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At in
                quae maxime nisi, quaerat consequatur officia voluptatum tempora
                debitis doloremque provident dolorum voluptatem? Ratione
                numquam, quis eius maiores saepe fuga.
              </small>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-c-bg-variant p-5 py-12 rounded-xl select-none cursor-grab">
              <div className="overflow-hidden aspect-[1/1] w-[4rem] rounded-[50%] mx-auto mb-3 border-[4px] border-c-primary-variant">
                <img
                  src={avatar4}
                  alt=""
                />
              </div>
              <h5>Lorem ipsum dolor sit amet.</h5>
              <small className="text-c-light font-[300] w-[80%]  mx-auto mt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At in
                quae maxime nisi, quaerat consequatur officia voluptatum tempora
                debitis doloremque provident dolorum voluptatem? Ratione
                numquam, quis eius maiores saepe fuga.
              </small>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
