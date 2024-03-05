import { Link } from "react-scroll";

/*--------------------
* About Section
----------------------*/
export default function About() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
            <div className="lg:col-span-6 text-center mb-[50px] lg:mb-0 ">
              <img
                className="mx-auto"
                src="img/nelson-contact-img.png"
                title="Banner"
                alt="Banner"
              />
            </div>
            <div className="lg:col-span-6 lg:pl-12">
              <h3 className="font-[600] text-[26px] md:text-[40px] leading-[1.2] text-black mb-[25px]">
                I'm a novice Fullstack Developer, eager to dive into the tech
                realm.
              </h3>
              <p className="text-[16px] md:text-[18px]">
                From humble beginnings to the vibrant city of Cleveland, my
                journey as a Fullstack Developer has been nothing short of
                remarkable. I've honed my skills in crafting web applications
                that tackle real-world challenges, turning complex problems into
                elegant solutions. Working with me is like a rollercoaster, but
                the only screams you'll hear are the cheers of enthusiasm. I'm
                your go-to team member, a problem-solving maestro, and I devour
                new challenges like a coder at a pizza buffet. Let's make tech
                magic together – and maybe even share a good tech joke or two
                along the way! 😄
              </p>
              <div className=" grid-cols-12 pt-5 hidden">
                <div className="col-span-6 sm:col-span-4">
                  <h5 className="text-[26px] text-orange-600 font-[600]">5+</h5>
                  <span>Projet Completed</span>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <h5 className="text-[26px] text-orange-600 font-[600]">
                    10+
                  </h5>
                  <span>Happy Clients</span>
                </div>
              </div>
              <div className="pt-6">
                <Link className="px-btn px-btn-theme mr-4" to="contactus">
                  Contact Me
                </Link>
                <Link className="px-btn px-btn-dark" to="portfolio">
                  Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
