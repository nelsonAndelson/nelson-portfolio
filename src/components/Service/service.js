/*--------------------
* Service Section
----------------------*/
function Service(props) {
  return (
    <>
      <div className="lg:col-span-6">
        <div className={props.id.main + " feature-box-01"}>
          <div className="icon">
            <i className={props.id.icon}></i>
          </div>
          <div className="feature-content">
            <h5>{props.title}</h5>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

/*--------------------
* Service List Section
----------------------*/
export default function ServiceList() {
  const service_list = [
    {
      id: { main: "bg-1", icon: "fas fa-columns" },
      title: "Responsive Web Design",
      description:
        "I specialize in responsive web design for a seamless cross-device user experience.",
    },
    {
      id: { main: "bg-2", icon: "fas fa-laptop-code" },
      title: "Development",
      description:
        "I create cutting-edge web apps to solve real-world problems, following the latest industry standards and technologies.",
    },
    {
      id: { main: "bg-3", icon: "fas fa-globe" },
      title: "SEO Marketing",
      description:
        "I provide SEO marketing services to enhance your online visibility and reach your target audience effectively.",
    },
    {
      id: { main: "bg-4", icon: "fas fa-database" },
      title: "Database Management",
      description:
        "I provide end-to-end database support to keep your data organized, secure, and easily accessible, offering solutions tailored to your unique needs.",
    },
    {
      id: { main: "bg-5", icon: "fas fa-chart-line" },
      title: "Performance Optimization",
      description:
        "Boost your website's speed for better user engagement, conversions, and online success.",
    },
    {
      id: { main: "bg-6", icon: "fas fa-magic" },
      title: "UI/UX Design",
      description:
        "I provide UI/UX design services to create visually appealing and user-friendly web experiences.",
    },
  ];
  return (
    <>
      <section
        data-scroll-data="1"
        id="services"
        className="section services-section bg-gray"
        style={{
          backgroundImage: "url(img/effect/bg-effect-1.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="grid section-heading">
            <div className="lg:col-span-6 text-center mx-auto">
              <h3>
                <span>My Services</span>
              </h3>
            </div>
          </div>
          <div className="grid lg:grid-cols-12 md:grid-cols-2 gap-5 grid-cols-1 items-center">
            {service_list.map((val, i) => {
              return (
                <Service
                  key={i}
                  id={val.id}
                  title={val.title}
                  description={val.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
