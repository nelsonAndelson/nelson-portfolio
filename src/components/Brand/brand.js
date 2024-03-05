import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaFileDownload } from "react-icons/fa";

export default function Intrested() {
  return (
    <section className="py-10 bg-slate-900">
      <div className="container">
        <div className="grid grid-cols-12 gap-5 items-center">
          <div className="col-span-12 lg:col-span-8 md:col-span-7 text-center md:text-left">
            <h4 className="text-[25px] md:text-[30px] lg:text-[35px] m-0 text-white font-[600]">
              Turn your vision into code - let's collaborate!
            </h4>
          </div>
          <div className="col-span-12 lg:col-span-4 md:col-span-5 sm:mx-auto text-center text-md-end flex text-[50px] gap-5 mx-auto">
            <a href="https://github.com/nelsonAndelson" title="GitHub">
              <AiFillGithub className="text-[#efefef] hover:scale-110 transition-all duration-100 ease-in-out" />
            </a>
            <a
              href="https://www.linkedin.com/in/baguma-nelson-a7bb94146/"
              title="LinkedIn"
            >
              <AiFillLinkedin className="text-[#efefef] hover:scale-110 transition-all duration-100 ease-in-out" />
            </a>
            <a
              href="/nelson-resume.pdf"
              download="nelson-resume.pdf"
              title="Download Resume"
            >
              <FaFileDownload className="text-[#efefef] text-[40px] mt-1 hover:scale-110 transition-all duration-100 ease-in-out" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
