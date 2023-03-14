import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Mask from "../assets/img/Png/Maskhengrup.png";
import MYCARDS_1 from "./MyMap";
import { RandomCards } from "./MyMap";
import { Row } from "react-bootstrap";
import Select from "react-select";
import Carousel from "react-bootstrap/Carousel";
import outimg from "../assets/img/Png/outimg.png";
import img_grident from "../assets/img/Png/line_grident.png";
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
      <section className="toke_bg py-3 py-xxl-5 py-lg-4 py-3" id="Tokemonics">
        <div className="container pb-xxl-5 pb-lg-4 pb-sm-3">
          <h2 className="text-center ff_space_mono fw-bold fs_91 Toke_text">
            Tokemonics
          </h2>
          <div className="row">
            <div className="col-12">
              <div className="row mt-xxl-5 mt-xl-4 mt-md-3 mt-2 row_border mx-xxl-5 mx-xl-4 mx-md-3 mx-1 ">
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between mt-4 ">
                  <span className="w-25 d-flex flex-column align-items-center pb-3">
                    <img className="mask_grup" src={Mask} alt="icon" />
                  </span>
                  <div className="width_65 d-flex flex-column justify-content-end">
                    <p className=" ff_open fw-normal fs_28 text_blue mb-0">
                      THE NAME TOKEN (TNAT)
                    </p>
                    <p className=" ff_open fw-normal fs_30 text_dark_gray  translate-middle-y mt-2 mb-0">
                      0.332627
                      <span className="fs_20 text_green ps-3 ps-sm-5">
                        (+17.4%){" "}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-lg-3  col_top_bottom_border">
                  <div className=" d-flex flex-column align-items-center">
                    <p className=" ff_open fw-normal fs_22 text-white-50 mb-0">
                      RANK
                    </p>
                    <p className=" ff_open fw-normal fs_22 text-white-50">0</p>
                  </div>
                </div>
                <div className="col-lg-6 col_border">
                  <div className=" d-flex flex-column align-items-center">
                    <p className=" ff_open fw-normal fs_22 text-white-50 mb-0">
                      MARKET CAP
                    </p>
                    <p className=" ff_open fw-normal fs_25 text-white-50">
                      $? <span className="fs_18">USD</span>
                    </p>
                  </div>
                </div>
                <div className="col-lg-3  col_top_bottom_border">
                  <div className=" d-flex flex-column align-items-center">
                    <p className=" ff_open fw-normal fs_22 text-white-50 mb-0">
                      VOLUME
                    </p>
                    <p className=" ff_open fw-normal fs_22 text-white-50">
                      $12.65 K <span className="fs_18">USD</span>
                    </p>
                  </div>
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
                  <div className="col-xxl-4 col-lg-6  px-md-4 my-2 my-md-4 my-xxl-0">
                    <div className="box_nft w-100 p-3 px-md-4 pe-md-5 me-5 h-100 position-relative ">
                      <div className="ovrlaynft position-absolute h-100 w-100"></div>
                      <div className="d-flex flex- flex-md-row justify-content-between text-white pe-md-4 align-items-center ">
                        <h2 className="ff_source_pro fw_black fs_40 mb-0 z_index2">
                          {pastData.data1}{" "}
                          <span className="d-block">{pastData.data1_2}</span>
                        </h2>
                        <h3 className=" ff_source_pro fw_black fs_48  mt-2 z_index">
                          {pastData.data2}
                        </h3>
                      </div>
                      <p className=" text_gray_9c ff_source_pro fw-semibold fs_25 pe-3xl-5 me-3xl-5 pe-xl-3 me-xl-3 pe-3 z_index2">
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
      <section
        className="rarity_sec_bg  overflow-hidden  border_dashed_tob_bottom py-xxl-5 py-xl-4 py-4 "
        id="Rarity"
      >
        <div className="container px-xl-5">
          <h2 className=" ff_space_mono fw-bold fs_91 Toke_text text-center pt-4 pb-3">
            Rarity
          </h2>
          <div className="d-flex px-4 w-100 my-5 d-none d-md-flex row justify-content-between ">
            <span className=" d-inline-block col-xl-2 col-md-4 my-md-3 my-xl-0  ">
              <div>
                <a
                  className=" ff_fira_code fw-bold fs_29 text-white text-center rarity_component py-2 d-inline-block"
                  href="#"
                >
                  Background
                </a>
              </div>
            </span>

            <span className="col-xl-2 col-md-4 my-md-3 my-xl-0  translate_middle_y">
              <div>
                <a
                  className="d-inline-block ff_fira_code fw-bold fs_29 text-white text-center rarity_component py-2"
                  href="#"
                >
                  Skin
                </a>
              </div>
            </span>

            <span className="col-xl-2 col-md-4 my-md-3 my-xl-0 ">
              <div>
                <a
                  className="d-inline-block ff_fira_code fw-bold fs_29 text-white text-center rarity_component py-2"
                  href="#"
                >
                  Clothes
                </a>
              </div>
            </span>

            <span className="col-xl-2 col-md-4 my-md-3 my-xl-0 ">
              <div>
                <a
                  className="d-inline-block ff_fira_code fw-bold fs_29 text-white text-center rarity_component py-2"
                  href="#"
                >
                  Eyes
                </a>
              </div>
            </span>

            <span className="col-xl-2 col-md-4 my-md-3 my-xl-0 ">
              <div>
                <a
                  className="d-inline-block ff_fira_code fw-bold fs_29 text-white text-center rarity_component py-2"
                  href="#"
                >
                  Hats
                </a>
              </div>
            </span>
          </div>
          <label
            className="w-100 me-2 mb-4 z_index d-flex align-items-center d-md-none my-xxl-5  my-sm-3 my-2"
            htmlFor="To"
          >
            <Select
              placeholder="Background"
              className="w-75 ff_fira_code fw-bold fs_29 bg-transparent border-0 bg_css-1hb7zxy-IndicatorsContainer "
              options={Parcel}
              styles={style}
            />{" "}
          </label>{" "}
          <div className=" d-block  d-none d-md-block">
            <img className="w-100" src={img_grident} alt="line" />{" "}
          </div>
          <Row className=" justify-content-between d-none d-md-flex">
            {RandomCards.map((cards, i) => {
              if (i <= 10) {
                return (
                  <div
                    className="col-lg-3 col-sm-6 mt-5 px-0 px-xxl-3 "
                    data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  >
                    <div className="px-sm-3 px-lg-2  pt-3 h-100 position-relative ">
                      <img
                        className="position-absolute w-100 h-100 top-0 start-0"
                        src={outimg}
                        alt="outimg"
                      />{" "}
                      <div className="d-flex flex-column align-items-center  rounded-2 position-relative  px-4 py-5 py-sm-4 py-xl-5 pb-sm-5 mb-4 ">
                        <img
                          className=" z_index bg_shaddow_Randomhen pt-2 pt-lg-0"
                          src={cards.Image}
                          alt="img"
                        />{" "}
                        <h2 className=" ff_ubuntu fw-bold fs_29 text-center text-white mt-3 pt-2">
                          {cards.head}
                          <span className="d-block">{cards.span}</span>
                        </h2>
                        <span className=" mt-3 mb-5 z_index2 position-relative btndudehover">
                          <span className=" d-block w-100 h-100 position-absolute btndude_overlay z_index0"></span>
                          <a
                            className=" ff_source_pro fw-bolder fs_23 text-center text_black_2d z_index2 btndude  py-1 px-xl-4 px-2"
                            href="#"
                          >
                            {cards.num}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </Row>
          <Carousel className="d-md-none">
            <Carousel.Item>
              <div className=" d-flex justify-content-center">
                {RandomCards.map((cards, i) => {
                  if (i <= 0) {
                    return (
                      <div
                        className="col-lg-3 col-sm-6 mt-5 px-0 px-xxl-3 "
                        data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                      >
                        <div className="px-sm-3 px-lg-2  pt-3 h-100 position-relative ">
                          <img
                            className="position-absolute w-100 h-100 top-0 start-0"
                            src={outimg}
                            alt="outimg"
                          />{" "}
                          <div className="d-flex flex-column align-items-center  rounded-2 position-relative  px-4 py-5 py-sm-4 py-xl-5 pb-sm-5 mb-4 ">
                            <img
                              className=" z_index bg_shaddow_Randomhen pt-2 pt-lg-0"
                              src={cards.Image}
                              alt="img"
                            />{" "}
                            <h2 className=" ff_ubuntu fw-bold fs_29 text-center text-white mt-3 pt-2">
                              {cards.head}
                              <span className="d-block">{cards.span}</span>
                            </h2>
                            <span className=" mt-3 mb-5 z_index2 position-relative btndudehover">
                              <span className=" d-block w-100 h-100 position-absolute btndude_overlay z_index0"></span>
                              <a
                                className=" ff_source_pro fw-bolder fs_23 text-center text_black_2d z_index2 btndude  py-1 px-xl-4 px-2"
                                href="#"
                              >
                                {cards.num}
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className=" d-flex justify-content-center ">
                {RandomCards.map((cards, i) => {
                  if (i <= 0) {
                    return (
                      <div
                        className="col-lg-3 col-sm-6 mt-5 px-0 px-xxl-3 "
                        data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                      >
                        <div className="px-sm-3 px-lg-2  pt-3 h-100 position-relative  ">
                          <img
                            className="position-absolute w-100 h-100 top-0 start-0"
                            src={outimg}
                            alt="outimg"
                          />{" "}
                          <div className="d-flex flex-column align-items-center bg_shaddow_hover  rounded-2 position-relative  px-4 py-5 py-sm-4 py-xl-5 pb-sm-5 mb-4 ">
                            <img
                              className="  bg_shaddow_Randomhen pt-2 pt-lg-0"
                              src={cards.Image}
                              alt="img"
                            />{" "}
                            <h2 className=" ff_ubuntu fw-bold fs_29 text-center text-white mt-3 pt-2">
                              {cards.head}
                              <span className="d-block">{cards.span}</span>
                            </h2>
                            <span className=" mt-3 mb-5 z_index2 position-relative btndudehover ">
                              <span className=" d-block w-100 h-100 position-absolute btndude_overlay z_index0"></span>
                              <a
                                className=" ff_source_pro fw-bolder fs_23 text-center text_black_2d z_index2 btndude  py-1 px-xl-4 px-2  "
                                href="#"
                              >
                                {cards.num}
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className=" d-flex justify-content-center">
                {RandomCards.map((cards, i) => {
                  if (i <= 0) {
                    return (
                      <div
                        className="col-lg-3 col-sm-6 mt-5 px-0 px-xxl-3 "
                        data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                      >
                        <div className="px-sm-3 px-lg-2  pt-3 h-100 position-relative ">
                          <img
                            className="position-absolute w-100 h-100 top-0 start-0"
                            src={outimg}
                            alt="outimg"
                          />{" "}
                          <div className="d-flex flex-column align-items-center  rounded-2 position-relative  px-4 py-5 py-sm-4 py-xl-5 pb-sm-5 mb-4 ">
                            <img
                              className=" z_index bg_shaddow_Randomhen pt-2 pt-lg-0"
                              src={cards.Image}
                              alt="img"
                            />{" "}
                            <h2 className=" ff_ubuntu fw-bold fs_29 text-center text-white mt-3 pt-2">
                              {cards.head}
                              <span className="d-block">{cards.span}</span>
                            </h2>
                            <span className=" mt-3 mb-5 z_index2 position-relative btndudehover">
                              <span className=" d-block w-100 h-100 position-absolute btndude_overlay z_index0"></span>
                              <a
                                className=" ff_source_pro fw-bolder fs_23 text-center text_black_2d z_index2 btndude  py-1 px-xl-4 px-2"
                                href="#"
                              >
                                {cards.num}
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className=" d-flex justify-content-center">
                {RandomCards.map((cards, i) => {
                  if (i <= 0) {
                    return (
                      <div
                        className="col-lg-3 col-sm-6 mt-5 px-0 px-xxl-3 "
                        data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                      >
                        <div className="px-sm-3 px-lg-2  pt-3 h-100 position-relative ">
                          <img
                            className="position-absolute w-100 h-100 top-0 start-0"
                            src={outimg}
                            alt="outimg"
                          />{" "}
                          <div className="d-flex flex-column align-items-center  rounded-2 position-relative  px-4 py-5 py-sm-4 py-xl-5 pb-sm-5 mb-4 ">
                            <img
                              className=" z_index bg_shaddow_Randomhen pt-2 pt-lg-0"
                              src={cards.Image}
                              alt="img"
                            />{" "}
                            <h2 className=" ff_ubuntu fw-bold fs_29 text-center text-white mt-3 pt-2">
                              {cards.head}
                              <span className="d-block">{cards.span}</span>
                            </h2>
                            <span className=" mt-3 mb-5 z_index2 position-relative btndudehover">
                              <span className=" d-block w-100 h-100 position-absolute btndude_overlay z_index0"></span>
                              <a
                                className=" ff_source_pro fw-bolder fs_23 text-center text_black_2d z_index2 btndude  py-1 px-xl-4 px-2"
                                href="#"
                              >
                                {cards.num}
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className=" d-flex justify-content-center">
                {RandomCards.map((cards, i) => {
                  if (i <= 0) {
                    return (
                      <div
                        className="col-lg-3 col-sm-6 mt-5 px-0 px-xxl-3 "
                        data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                      >
                        <div className="px-sm-3 px-lg-2  pt-3 h-100 position-relative ">
                          <img
                            className="position-absolute w-100 h-100 top-0 start-0"
                            src={outimg}
                            alt="outimg"
                          />{" "}
                          <div className="d-flex flex-column align-items-center  rounded-2 position-relative  px-4 py-5 py-sm-4 py-xl-5 pb-sm-5 mb-4 ">
                            <img
                              className=" z_index bg_shaddow_Randomhen pt-2 pt-lg-0"
                              src={cards.Image}
                              alt="img"
                            />{" "}
                            <h2 className=" ff_ubuntu fw-bold fs_29 text-center text-white mt-3 pt-2">
                              {cards.head}
                              <span className="d-block">{cards.span}</span>
                            </h2>
                            <span className=" mt-3 mb-5 z_index2 position-relative btndudehover">
                              <span className=" d-block w-100 h-100 position-absolute btndude_overlay z_index0"></span>
                              <a
                                className=" ff_source_pro fw-bolder fs_23 text-center text_black_2d z_index2 btndude  py-1 px-xl-4 px-2"
                                href="#"
                              >
                                {cards.num}
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className=" d-flex justify-content-center">
                {RandomCards.map((cards, i) => {
                  if (i <= 0) {
                    return (
                      <div
                        className="col-lg-3 col-sm-6 mt-5 px-0 px-xxl-3 "
                        data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                      >
                        <div className="px-sm-3 px-lg-2  pt-3 h-100 position-relative ">
                          <img
                            className="position-absolute w-100 h-100 top-0 start-0"
                            src={outimg}
                            alt="outimg"
                          />{" "}
                          <div className="d-flex flex-column align-items-center  rounded-2 position-relative  px-4 py-5 py-sm-4 py-xl-5 pb-sm-5 mb-4 ">
                            <img
                              className=" z_index bg_shaddow_Randomhen pt-2 pt-lg-0"
                              src={cards.Image}
                              alt="img"
                            />{" "}
                            <h2 className=" ff_ubuntu fw-bold fs_29 text-center text-white mt-3 pt-2">
                              {cards.head}
                              <span className="d-block">{cards.span}</span>
                            </h2>
                            <span className=" mt-3 mb-5 z_index2 position-relative btndudehover">
                              <span className=" d-block w-100 h-100 position-absolute btndude_overlay z_index0"></span>
                              <a
                                className=" ff_source_pro fw-bolder fs_23 text-center text_black_2d z_index2 btndude  py-1 px-xl-4 px-2"
                                href="#"
                              >
                                {cards.num}
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
}
export default Tokemonics;
// boxrandom;
