import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Mask from "../assets/img/Png/Maskhengrup.png";
import MYCARDS_1 from "./MyMap";
import { RandomCards } from "./MyMap";
import { Row } from "react-bootstrap";
import Select from "react-select";
function Tokemonics() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const style = {
    control: (base) => ({
      ...base,
      border: "0 !important",
      boxShadow: "0 !important",
      "&:hover": { border: "0 !important" },
    }),
  };
  const Parcel = [
    { label: " Background" },
    { label: " Skin" },
    { label: "Clothes" },
    { label: "Eyes" },
    { label: "Hats" },
  ];
  return (
    <>
      <section className="toke_bg py-3 py-xxl-5 py-lg-4 py-sm-3">
        <div className="container pb-xxl-5 pb-lg-4 pb-sm-3">
          <h2 className="text-center ff_space_mono fw-bold fs_91 Toke_text">
            Tokemonics
          </h2>
          <div className="row">
            <div className="col-12">
              <div className="row mt-5 row_border mx-xxl-5 mx-xl-4 mx-md-3 mx-1 ">
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between mt-4 ">
                  <span className="w-25 d-flex flex-column align-items-center pb-3">
                    <img className="mask_grup" src={Mask} alt="icon" />
                  </span>
                  <article className="width_65 d-flex flex-column justify-content-end">
                    <p className=" ff_open fw-normal fs_28 text_blue mb-0">
                      THE NAME TOKEN (TNAT)
                    </p>
                    <p className=" ff_open fw-normal fs_30 text_dark_gray  translate-middle-y mt-2 mb-0">
                      0.332627
                      <span className="fs_20 text_green ps-3 ps-sm-5">
                        (+17.4%){" "}
                      </span>
                    </p>
                  </article>
                </div>
                <div className="col-lg-3  col_top_bottom_border">
                  <article className=" d-flex flex-column align-items-center">
                    <p className=" ff_open fw-normal fs_22 text-white-50 mb-0">
                      RANK
                    </p>
                    <p className=" ff_open fw-normal fs_22 text-white-50">0</p>
                  </article>
                </div>
                <div className="col-lg-6 col_border">
                  <article className=" d-flex flex-column align-items-center">
                    <p className=" ff_open fw-normal fs_22 text-white-50 mb-0">
                      MARKET CAP
                    </p>
                    <p className=" ff_open fw-normal fs_25 text-white-50">
                      $? <span className="fs_18">USD</span>
                    </p>
                  </article>
                </div>
                <div className="col-lg-3  col_top_bottom_border">
                  <article className=" d-flex flex-column align-items-center">
                    <p className=" ff_open fw-normal fs_22 text-white-50 mb-0">
                      VOLUME
                    </p>
                    <p className=" ff_open fw-normal fs_22 text-white-50">
                      $12.65 K <span className="fs_18">USD</span>
                    </p>
                  </article>
                </div>
                <p className="py-1 ff_open fw-normal fs_22 text_blue_light text-center mb-0">
                  <i> Powered by CoinMarketCap</i>
                </p>
              </div>
            </div>
          </div>
          <div className="pt-5 mx-xxl-5 mx-xl-4 mx-md-3 mx-1">
            <div className="row justify-content-center">
              {MYCARDS_1.map((pastData) => {
                return (
                  <div className="col-xxl-4 col-lg-6  px-md-4 my-3 my-md-4 my-xxl-0">
                    <div className="box_nft w-100 p-3 px-md-4 pe-md-5 me-5 h-100 position-relative ">
                      <div className="ovrlaynft position-absolute h-100 w-100"></div>
                      <div className="d-flex flex- flex-md-row justify-content-between text-white pe-md-4 align-items-center">
                        <h2 className="ff_source_pro fw_black fs_40 mb-0">
                          {/* NFT <span className="d-block">Holders</span> */}
                          {pastData.data1}{" "}
                          <span className="d-block">{pastData.data1_2}</span>
                        </h2>
                        <h3 className=" ff_source_pro fw_black fs_48  mt-2">
                          {pastData.data2}
                        </h3>
                      </div>
                      <p className=" text_gray_9c ff_source_pro fw-semibold fs_25 pe-xxl-5 me-xxl-5 pe-xl-3 me-xl-3 pe-3">
                        {pastData.data3}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="rarity_sec_bg py-2 py-lg-5 overflow-hidden py-xxl-4 py-lg-3 py-sm-2">
        <div className="container px-lg-5">
          <h2 className=" ff_space_mono fw-bold fs_91 Toke_text text-center">
            Rarity
          </h2>
          <article className="d-flex gap-3 white_space justify-content-xxl-between px-4 w-100 my-5 d-none d-xl-flex">
            <span className=" d-inline-block  ">
              <a
                className=" ff_fira_code fw-bold fs_29 text-white text-center rarity_component py-2 d-inline-block"
                href="#"
              >
                Background
              </a>
            </span>

            <span className="">
              <a
                className="d-inline-block ff_fira_code fw-bold fs_29 text-white text-center rarity_component py-2"
                href="#"
              >
                Skin
              </a>
            </span>

            <span className="">
              <a
                className="d-inline-block ff_fira_code fw-bold fs_29 text-white text-center rarity_component py-2"
                href="#"
              >
                Clothes
              </a>
            </span>

            <span className="">
              <a
                className="d-inline-block ff_fira_code fw-bold fs_29 text-white text-center rarity_component py-2"
                href="#"
              >
                Eyes
              </a>
            </span>

            <span className="">
              <a
                className="d-inline-block ff_fira_code fw-bold fs_29 text-white text-center rarity_component py-2"
                href="#"
              >
                Hats
              </a>
            </span>
          </article>
          <label
            className="w-100 me-2 mb-4 z_index d-flex align-items-center d-xl-none my-5"
            htmlFor="To"
          >
            {" "}
            <Select
              placeholder="Background"
              className="w-75 ff_fira_code fw-bold fs_29 bg-transparent border-0 "
              options={Parcel}
              styles={style}
            />{" "}
          </label>{" "}
          <div className="bottom_border d-block"></div>
          <Row className=" justify-content-between">
            {RandomCards.map((cards) => {
              return (
                <div
                  className="col-lg-3 col-sm-6 mt-5 px-0 px-xxl-5"
                  data-aos="zoom-in"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <div className="px-sm-4 px-xl-2  pt-4">
                    <div className="d-flex flex-column align-items-center bgrandomcrd  px-4 py-5 py-sm-4 py-xl-5">
                      <img className=" z_index" src={cards.Image} alt="img" />

                      <h2 className=" ff_ubuntu fw-bold fs_29 text-center text-white mt-3 pt-2">
                        {cards.head}
                        <span className="d-block">{cards.span}</span>
                      </h2>

                      <span className=" mt-3 mb-5 z_index2 position-relative btndudehover">
                        <span className=" d-block w-100 h-100 position-absolute btndude_overlay z_index0"></span>
                        <a
                          className=" ff_source_pro fw-bolder fs_23 text-center text_black_2d z_index2 btndude  py-1 px-4"
                          href="#"
                        >
                          {cards.num}
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </Row>
        </div>
      </section>
    </>
  );
}
export default Tokemonics;
// import React from "react";
// import { Row } from "react-bootstrap";
// ;
// function Rarity() {
//   return (
//     <>

//     </>
//   );
// }
// export default Rarity;
