import React, { useRef, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import validateForm from "./formValidation";
import emailjs from "@emailjs/browser";
/*--------------------
* Contact Section
----------------------*/

export default function Contact() {
  const form = useRef();

  const initialFormState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "" ? "Please fill this field" : "",
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const { isValid, errors } = validateForm(formData);

    console.log(formData);
    if (isValid) {
      emailjs
        .sendForm(
          "service_fs0kkk4",
          "template_af9stjf",
          form.current,
          "HBF2TH4vUhSDWi1Ea"
        )
        .then((result) => {
          setFormData(initialFormState);
          setFormErrors({});
          result && setIsEmailSent(true);
          setTimeout(() => {
            setIsEmailSent(false);
          }, 4500);
        })
        .catch((err) => {
          console.error(err.text);
        });
    } else {
      setFormErrors(errors);
      console.log({ formErrors });
    }
  };

  return (
    <>
      <section
        data-scroll-data="4"
        id="contactus"
        className="section contactus-section bg-slate-900"
        style={{
          backgroundImage: "url(img/effect/bg-effect-3.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6 ">
              <div className="p-[25px] md:p-[35px] bg-white">
                <h6 className="text-[32px] font-[600] text-black mb-[5px]">
                  Get in touch
                </h6>
                <p className="text-[18px] mb-[30px]">
                  Our friendly team would love to hear from you.
                </p>

                <form id="contact-form" method="POST" onSubmit={sendEmail}>
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 md:col-span-6">
                      <div className="form-group">
                        <label className="form-label">First name</label>
                        <input
                          name="user_name"
                          id="name"
                          placeholder="Name *"
                          className="form-control"
                          type="text"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <div className="form-group">
                        <label className="form-label">Your Email</label>
                        <input
                          name="user_email"
                          id="email"
                          placeholder="Email *"
                          className="form-control"
                          type="email"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="form-group">
                        <label className="form-label">Subject</label>
                        <input
                          name="user_subject"
                          id="subject"
                          placeholder="Subject *"
                          className="form-control"
                          type="text"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="form-group">
                        <label className="form-label">Your message</label>
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your message *"
                          rows="4"
                          className="form-control"
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="send">
                        <button
                          className="px-btn px-btn-theme2"
                          type="submit"
                          value="Send"
                        >
                          {" "}
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 flex">
              <div className="lg:max-w-[410px] w-full lg:ml-auto pt-[50px] lg:pt-0">
                <div className="pb-10">
                  <img
                    className="w-3/4"
                    src="img/nelson-again.png"
                    title=""
                    alt=""
                  />
                </div>
                <ul className="contact-infos">
                  <li>
                    <div className="icon bg-1">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="col">
                      <h5>Phone</h5>
                      <p>+1 216 304 1233</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon bg-2">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="col">
                      <h5>Mail</h5>
                      <a
                        className="text-[#fefefe] underline hover:text-[#fff] hover:no-underline"
                        href="#"
                      >
                        info@domainname.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon bg-3">
                      <AiFillGithub />
                    </div>
                    <div className="col">
                      <h5>Visit My Github</h5>

                      <a
                        href="https://github.com/nelsonAndelson"
                        className="text-[#fefefe] underline hover:text-[#fff] hover:no-underline"
                      >
                        Github
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
