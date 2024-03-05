import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";

/*--------------------
* Testimonial Section
----------------------*/
export default function Testimonial() {
  const testimonail_list = [
    {
      id: 1,
      image: "img/patrick-portrait.jpg",
      author_name: "Patrick Kearns",
      position: "Executive Director",
      description:
        "Since Nelson joined our team, he has had a very positive impact on our organization and our team. Nelson is always interested in new challenges, more responsibilities, and assisting others with projects. Nelson is the kind of employee every organization dreams of having on staff.",
    },
    {
      id: 2,
      image: "img/kim.png",
      author_name: "Kim Wheeler",
      position: "Teen Response Program Manager",
      description:
        "Nelson is an exceptional team member and role model for new teenagers in our community. With grace, compassion, and kindness, he exemplifies our organization's values. I have utmost confidence and support in him.",
    },
  ];

  return (
    <>
      <section className="section testimonial-section">
        <div className="container">
          <div className="grid section-heading">
            <div className="lg:col-span-6 text-center mx-auto">
              <h3>
                <span>Testimonial</span>
              </h3>
            </div>
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 1,
              },
            }}
          >
            {testimonail_list.map((val, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="feature-box-03">
                    <div className="feature-img">
                      <img
                        className="h-[100px] max-w-none"
                        src={val.image}
                        title={val.image}
                        alt={val.image}
                      />
                    </div>
                    <div className="feature-content">
                      <div className="icons">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <p>{val.description}</p>
                      <h6>{val.author_name}</h6>
                      <span>{val.position}</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}
