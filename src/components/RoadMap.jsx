import React from "react";
import { MYCARD_2 } from "./MyMap";

export const RoadMap = () => {
  return (
    <>
      <section className="py-xxl-5 py-xl-4 py-lg-3 py-2 bg_roadmap overflow-hidden">
        <div className=" container">
          <h2 className="text-center ff_space_mono fw-bold fs_91 Faq_text ">
            Roadmap
          </h2>
          <div className="mx-lg-5 mt-xxl-5 mt-lg-4 mt-sm-3 pt-xxl-5 pt-lg-4 pt-sm-3">
            {MYCARD_2.map((Pastdata) => {
              return (
                <div className="mx-lg-5">
                  <div
                    className="col-lg-12 d-flex justify-content-center justify-content-lg-start"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    <div className="text-start">
                      <h2 className=" ff_ubuntu fw-bold fs_48 Text_gridentH1 line_after_roadmap1 position-relative  mb-xxl-5 mb-xl-4 mb-md-3 mb-2">
                        {" "}
                        <span className="box_circel position-absolute"></span>
                        {Pastdata.data1}
                      </h2>
                      <h3 className=" ff_source_pro fw_black fs_40 text_white">
                        {Pastdata.data2}
                      </h3>
                      <p className=" ff_source_pro fw_black text_dark_gray">
                        <span className="d-sm-block">{Pastdata.data3}</span>
                        <span className="d-sm-block">{Pastdata.data3_1}</span>
                        {Pastdata.data3_2}
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-12 d-flex justify-content-center justify-content-lg-end my-3 my-lg-0"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    <div className="text-lg-end">
                      <h2 className=" ff_ubuntu fw-bold fs_48 Text_gridentH1 mb-xxl-5 mb-xl-4 mb-md-3 mb-2 line_after_roadmap2 position-relative">
                        {" "}
                        <span className="box_circel2 position-absolute"></span>
                        {Pastdata.data4}
                      </h2>
                      <h3 className=" ff_source_pro fw_black fs_40 text_white">
                        {Pastdata.data5}
                      </h3>
                      <p className=" ff_source_pro fw_black text_dark_gray ">
                        <span className="d-sm-block"> {Pastdata.data6}</span>{" "}
                        <span className="d-sm-block"> {Pastdata.data6_1}</span>{" "}
                        {Pastdata.data6_2}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="mx-lg-5">
              <div className="col-lg-12 d-flex justify-content-center justify-content-lg-start">
                <div className="text-start">
                  <h2 className=" ff_ubuntu fw-bold fs_48 Text_gridentH1 line_after_roadmap1 position-relative  mb-5">
                    {" "}
                    <span className="box_circel position-absolute"></span>
                    01 Lorem Ipsum
                  </h2>
                  <h3 className=" ff_source_pro fw_black fs_40 text_white">
                    Lorem Ipsum dolor sit amet
                  </h3>
                  <p className=" ff_source_pro fw_black text_dark_gray">
                    <span className="d-sm-block">
                      Lorem Ipsum dolor sit amet, consectetur
                    </span>
                    <span className="d-sm-block">
                      adipiscing elit, sed do eiusmod tempor
                    </span>
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div className="col-lg-12 d-flex justify-content-center justify-content-lg-end">
                <div className="text-lg-end">
                  <h2 className=" ff_ubuntu fw-bold fs_48 Text_gridentH1 mb-4 line_after_roadmap2 position-relative">
                    {" "}
                    <span className="box_circel2 position-absolute"></span>
                    01 Lorem Ipsum
                  </h2>
                  <h3 className=" ff_source_pro fw_black fs_40 text_white">
                    Lorem Ipsum dolor sit amet
                  </h3>
                  <p className=" ff_source_pro fw_black text_dark_gray ">
                    <span className="d-sm-block">
                      {" "}
                      Lorem Ipsum dolor sit amet, consectetur
                    </span>{" "}
                    <span className="d-sm-block">
                      {" "}
                      adipiscing elit, sed do eiusmod tempor
                    </span>{" "}
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
