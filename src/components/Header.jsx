import React, { useState } from "react";
import VenHeader from "../assets/img/Webp/VanHader.webp";
import Twitterlogo from "../assets/img/Png/logotwitter.png";
import Discordlogo from "../assets/img/Png/Discordlogo.png";
function Header() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      <section className=" d-flex flex-column overflow-hidden ">
        <nav className="pt-3 nav_bg">
          <div className=" container">
            <div
              data-aos="fade-down"
              data-aos-delay="500"
              className=" d-flex justify-content-between align-items-center w-100 "
            >
              <a
                className="ff_source_3 fw-bold fs_59 text_clr_cff z_index2 text-white"
                href="#"
              >
                THE LOGO
              </a>
              <ul className="d-flex gap-3  gap-xxl-5 py-3 list-unstyled d-none d-xl-flex align-items-center mb-0 justify-content-end">
                <li className="me--xxl-5 me-xl-3  ">
                  <a
                    class="ff_ubuntu text-white opacity-75 fs_32 fw-normal z_index text_stroke "
                    href="#Tokemonics"
                  >
                    Tokemonics
                  </a>
                </li>
                <li className="me--xxl-5 me-xl-3  ">
                  <a
                    class="ff_ubuntu text-white opacity-75 fs_32 fw-normal z_index text_stroke "
                    href="#Rarity"
                  >
                    Rarity
                  </a>
                </li>
                <li className="me--xxl-5 me-xl-3  ">
                  <a
                    class="ff_ubuntu text-white opacity-75 fs_32 fw-normal z_index text_stroke "
                    href="#Team"
                  >
                    Team
                  </a>
                </li>
                <li className="me--xxl-5 me-xl-3  ">
                  <a
                    class="ff_ubuntu text-white opacity-75 fs_32 fw-normal z_index text_stroke "
                    href="#FAQ"
                  >
                    FAQ
                  </a>
                </li>
                <span className="d-flex gap-3 nav_btn d-flex flex-column justify-content-center align-items-center">
                  <a
                    className=" px-4 py-2 text-white fw_500 ff_ubuntu text-white opacity-75 fs_32 "
                    href="#Roadmap"
                  >
                    Roadmap
                  </a>
                </span>
              </ul>
              <label
                className="menu_formatting d-flex z_index justify-content-end d-xl-none"
                for="check"
              >
                <input
                  onClick={() => setNavShow(!navShow)}
                  className="menu bg-black "
                  type="checkbox"
                  id="check"
                />
                <span className="d-flex justify-content-between bg-transparent">
                  <span className="span_nav12 span1"></span>
                  <span className="span_nav11 span1"></span>
                </span>
                <span className="d-flex justify-content-between bg-transparent">
                  <span className="span_nav01 span1"></span>
                  <span className="span_nav00 span1"></span>
                </span>
                <span className="d-flex justify-content-between bg-transparent">
                  <span className="span_nav12 span1"></span>
                  <span className="span_nav11 span1"></span>
                </span>
                {/* <span className="span_nav3"></span> */}
              </label>
            </div>
            <div className="d-xl-none d-flex ">
              <div className={` ${navShow ? "nav-fix " : "fix-navbar"}`}>
                <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center list-unstyled gap-3 gap-md-5 pt-3 transition">
                  <li className="me--xxl-5 me-xl-3  ">
                    <a
                      class="ff_ubuntu text-white opacity-75 fs_32 fw-normal z_index text_stroke "
                      href="#Tokemonics"
                      onClick={() => setNavShow(!navShow)}
                    >
                      Tokemonics
                    </a>
                  </li>
                  <li className="me--xxl-5 me-xl-3  ">
                    <a
                      class="ff_ubuntu text-white opacity-75 fs_32 fw-normal z_index text_stroke "
                      href="#Rarity"
                    >
                      Rarity
                    </a>
                  </li>
                  <li className="me--xxl-5 me-xl-3  ">
                    <a
                      class="ff_ubuntu text-white opacity-75 fs_32 fw-normal z_index text_stroke "
                      href="#Team"
                    >
                      Team
                    </a>
                  </li>
                  <li className="me--xxl-5 me-xl-3  ">
                    <a
                      class="ff_ubuntu text-white opacity-75 fs_32 fw-normal z_index text_stroke "
                      href="#FAQ"
                    >
                      FAQ
                    </a>
                  </li>
                  <span className="d-flex gap-3">
                    <a
                      className="nav_btn px-4 py-2 text-white fw_500 ff_ubuntu text-white opacity-75 fs_32 "
                      href="#Roadmap"
                    >
                      Roadmap
                    </a>
                  </span>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className=" d-flex flex-column justify-content-center align-items-center py-xxl-5 py-xl-4 py-md-3 pb-xxl-5  pb-md-4 pb-2 hadderbg">
          <div className=" container">
            <div className="py-xxl-4 py-xl-3 py-2">
              <div className="row flex-column-reverse flex-xl-row">
                <div className="col-xl-7 ">
                  <div className="d-flex align-items-center align-items-xl-start flex-column text-center text-xl-start  mt-xl-0 mt-md-4 mt-2">
                    <h1 className="Text_gridentH1 ff_source_pro fw_black fs_82 mb-0 text-start">
                      LOREM IPSUM
                    </h1>
                    <p className=" ff_source_pro fw_semibold fs_54 Text_grident_p lh_68">
                      Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <p className=" ff_source_pro fs_35 fw-light text_dark_gray">
                      Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="d-flex gap-2 gap-sm-4 gap-xl-0  gap-xxl-5 pt-xxl-5 pt-xl-4 pt-md-3 pt-2 flex-md-row ju">
                      <span className="btn_Twitter d-flex justify-content-center align-items-center me-md-5">
                        <a
                          href="#?"
                          className=" ff_fira_code fw_medium fs_32 text-white  d-flex d-flex gap-xxl-3 gap-xl-2 gap-md-3 gap-1 align-items-center  "
                        >
                          <img
                            className=" logotwitter_discord"
                            src={Twitterlogo}
                            alt=""
                          />
                          Twitter
                        </a>
                      </span>
                      <span className="btn_discord d-flex justify-content-center align-items-center ">
                        <a
                          href="#?"
                          className=" ff_fira_code fw_medium fs_32 text-white d-flex gap-xxl-3 gap-xl-2 gap-md-3 gap-1 align-items-center "
                        >
                          <img
                            className=" logotwitter_discord "
                            src={Discordlogo}
                            alt=""
                          />
                          Discord
                        </a>
                      </span>
                      {/* <a href="#?">Twitter</a> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 ">
                  <div className="d-flex justify-content-center justify-content-xxl-start align-items-center h-100 align-items-xxl-start ">
                    <div className="boximgven p-0 m-0 imgven my-3 my-xxl-0">
                      <img className="w-100" src={VenHeader} alt="ven" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Header;
