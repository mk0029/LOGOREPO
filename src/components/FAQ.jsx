import React from "react";
import { Faq_DATA } from "./MyMap";
import Footer from "react-bootstrap";

function FAQ() {
  return (
    <>
      {" "}
      <section className="  bg_roadmap py-xxl-4 py-lg-3 py-2" id="FAQ">
        <div className=" container">
          <div>
            <h2 className="ff_space_mono fw-bold fs_91 Faq_text text-center">
              FAQ
            </h2>
            <div>
              <div className="row justify-content-center flex-column align-items-center ">
                {Faq_DATA.map((Pastdata) => {
                  return (
                    <div
                      className="col-xl-6   "
                      data-aos="fade-down-right"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="1000"
                    >
                      <div className="boxFaq my-3 py-2 px-xl-5 px-lg-4 px-2 h-100 min_hight_200">
                        <h2 className="text-center fw-bold fs_36 pt-3">
                          {Pastdata.data1}
                        </h2>
                        <p className="text-center fs_35 fw-semibold mb-0">
                          {Pastdata.data2}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <>
        <section className=" bg_dark_black py-xxl-4 py-3 ">
          {" "}
          <div className=" container">
            {" "}
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center ">
              <div className="d-flex gap-xxl-5 gap-4  ">
                <span>
                  <a
                    className="text_dark_gray ff_source_pro fs_35 text_strock_hover fw-semibold"
                    href="#@"
                  >
                    Tokemonics
                  </a>
                </span>
                <span>
                  <a
                    className="text_dark_gray ff_source_pro fs_35 text_strock_hover fw-semibold"
                    href="!@"
                  >
                    Rarity
                  </a>
                </span>
                <span>
                  {" "}
                  <a
                    className="text_dark_gray ff_source_pro fs_35 text_strock_hover fw-semibold "
                    href="#@"
                  >
                    <abbr
                      title="View Our Team Info  "
                      className="cursor_pointer"
                    >
                      Team
                    </abbr>
                  </a>
                </span>
                <span>
                  <a
                    className="text_dark_gray ff_source_pro fs_35 text_strock_hover fw-semibold"
                    href="#@"
                  >
                    FAQ
                  </a>
                </span>
              </div>{" "}
              <div className="d-flex gap-4 mt-4 mt-sm-0">
                <span className="twitter">
                  <a href="#$%">
                    {" "}
                    <svg
                      width="50"
                      height="41"
                      viewBox="0 0 50 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M49.4634 4.75854C47.6435 5.56565 45.6877 6.11114 43.6349 6.35648C45.7302 5.10049 47.3392 3.11175 48.0969 0.742161C46.1362 1.90497 43.9643 2.74953 41.6528 3.20474C39.8016 1.23247 37.1642 0 34.2455 0C28.641 0 24.0972 4.5436 24.0972 10.1478C24.0972 10.9431 24.1871 11.7177 24.3601 12.4604C15.926 12.0372 8.44853 7.99712 3.44339 1.85757C2.56988 3.35636 2.06943 5.09959 2.06943 6.95933C2.06943 10.48 3.86115 13.5861 6.58408 15.4059C4.92047 15.3532 3.35582 14.8967 1.98747 14.1367C1.98675 14.179 1.98675 14.2215 1.98675 14.2642C1.98675 19.1811 5.48478 23.2827 10.1272 24.2148C9.27554 24.4467 8.37905 24.5707 7.45344 24.5707C6.79957 24.5707 6.16379 24.5072 5.5443 24.3887C6.83557 28.4204 10.5833 31.3543 15.0239 31.4363C11.5509 34.158 7.17517 35.7803 2.42079 35.7803C1.60174 35.7803 0.793904 35.7324 0 35.6387C4.49095 38.5179 9.8252 40.1978 15.556 40.1978C34.2218 40.1978 44.429 24.7346 44.429 11.3245C44.429 10.8845 44.4192 10.4469 44.3997 10.0117C46.3822 8.58097 48.1028 6.7936 49.4634 4.75854Z"
                        fill="url(#paint0_linear_1_282)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_282"
                          x1="-1.57979e-07"
                          y1="40.1909"
                          x2="48.9618"
                          y2="40.1898"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop className="stop1" stop-color="#22A2FF" />
                          <stop offset="1" stop-color="#F72BEE" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </span>
                <span className="discord">
                  <svg
                    width="53"
                    height="40"
                    viewBox="0 0 53 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44.0745 3.28961C40.7561 1.76699 37.1976 0.645196 33.477 0.00269521C33.4093 -0.00970486 33.3416 0.0212836 33.3067 0.0832619C32.849 0.89723 32.3421 1.95912 31.9871 2.79376C27.9853 2.19465 24.0041 2.19465 20.0844 2.79376C19.7294 1.94057 19.204 0.89723 18.7443 0.0832619C18.7094 0.0233515 18.6417 -0.00763696 18.574 0.00269521C14.8554 0.643143 11.297 1.76494 7.97652 3.28961C7.94777 3.30201 7.92313 3.32269 7.90678 3.34952C1.15711 13.4334 -0.691911 23.2694 0.215155 32.9835C0.21926 33.031 0.245938 33.0765 0.282878 33.1054C4.73612 36.3757 9.04985 38.3611 13.2835 39.6771C13.3512 39.6978 13.423 39.673 13.4661 39.6172C14.4676 38.2496 15.3603 36.8076 16.1257 35.2911C16.1709 35.2023 16.1278 35.0969 16.0355 35.0618C14.6195 34.5247 13.2711 33.8697 11.9742 33.126C11.8716 33.0661 11.8634 32.9194 11.9577 32.8491C12.2307 32.6446 12.5037 32.4318 12.7643 32.217C12.8114 32.1777 12.8771 32.1694 12.9326 32.1942C21.4532 36.0844 30.6778 36.0844 39.0979 32.1942C39.1533 32.1674 39.219 32.1757 39.2682 32.2149C39.5289 32.4298 39.8019 32.6446 40.0768 32.8491C40.1712 32.9194 40.1651 33.0661 40.0625 33.126C38.7655 33.8842 37.4172 34.5247 35.9991 35.0597C35.9068 35.0949 35.8657 35.2023 35.9109 35.2911C36.6927 36.8054 37.5855 38.2475 38.5684 39.6151C38.6095 39.673 38.6834 39.6978 38.7511 39.6771C43.0053 38.3611 47.319 36.3757 51.7722 33.1054C51.8112 33.0765 51.8359 33.033 51.84 32.9855C52.9255 21.755 50.0217 11.9997 44.1422 3.35158C44.1278 3.32269 44.1032 3.30201 44.0745 3.28961ZM17.3981 27.0686C14.8329 27.0686 12.7191 24.7135 12.7191 21.8211C12.7191 18.9288 14.7919 16.5737 17.3981 16.5737C20.0249 16.5737 22.1182 18.9495 22.0771 21.8211C22.0771 24.7135 20.0044 27.0686 17.3981 27.0686ZM34.698 27.0686C32.1328 27.0686 30.0191 24.7135 30.0191 21.8211C30.0191 18.9288 32.0917 16.5737 34.698 16.5737C37.3248 16.5737 39.418 18.9495 39.3771 21.8211C39.3771 24.7135 37.3248 27.0686 34.698 27.0686Z"
                      fill="url(#paint0_linear_1_281)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_281"
                        x1="-1.66285e-07"
                        y1="39.6775"
                        x2="51.5362"
                        y2="39.6763"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop className="stop1" stop-color="#22A2FF" />
                        <stop offset="1" stop-color="#F72BEE" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}

export default FAQ;
