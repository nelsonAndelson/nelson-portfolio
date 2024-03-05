import { useState } from "react";
import { Link } from "react-scroll";

/*--------------------
* Header Menu
----------------------*/
function Menu(props) {
  return (
    <li>
      <Link data-scroll-nav={props.id} smooth={true} to={props.link}>
        <span>{props.name}</span>
      </Link>
    </li>
  );
}

/*--------------------
* Header
----------------------*/
export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const header_menus = [
    { id: 0, name: "Home", scroll_link: "home" },
    { id: 1, name: "Services", scroll_link: "services" },
    { id: 2, name: "Skills", scroll_link: "skill" },
    { id: 3, name: "Portfolio", scroll_link: "portfolio" },
    { id: 4, name: "Contact", scroll_link: "contactus" },
  ];
  return (
    <>
      <header className="main-header fixed left-0 right-0  z-[111]">
        <div className="container flex items-center justify-between one-page-nav relative py-5 lg:py-3">
          <div className="logo">
            <Link smooth={true} to="home">
              <img
                src="img/nelson-logo2.svg"
                title="Logo"
                alt="Logo"
                className="w-full h-[35px] cursor-pointer"
              />
            </Link>
          </div>
          <button
            className="lg:hidden mobile_toggle w-[40px] flex flex-col"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <span className="w-[25px] h-[2px] bg-slate-900 inline-block"></span>
            <span className="w-[25px] h-[2px] bg-slate-900 inline-block my-[5px]"></span>
            <span className="w-[25px] h-[2px] bg-slate-900 inline-block"></span>
          </button>
          <div
            className={`navbar-collapse flex ${isOpenMenu ? "menu-open" : ""}`}
          >
            <ul className="navbar lg:mx-auto flex flex-col lg:flex-row p-4 lg:p-0">
              {header_menus.map((val, i) => {
                return (
                  <Menu
                    key={i}
                    id={val.id}
                    name={val.name}
                    link={val.scroll_link}
                  />
                );
              })}
            </ul>
          </div>
          <div className="ms-auto hidden lg:flex">
            <Link
              className="px-btn px-btn-theme"
              data-scroll-nav="4"
              to="contactus"
            >
              LET'S CONNECT! 😄
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
