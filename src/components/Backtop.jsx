import React, { useEffect, useState } from "react";
import img_top from "../assets/img/Png/image.png";
function Backtop() {
  const [backtop, setBackTop] = useState(0);
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 700) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    });
  }, []);
  return (
    <>
      <section>
        <div>
          {" "}
          <button
            id="btn"
            onClick={() => top()}
            style={{ zIndex: "99" }}
            className={
              backtop
                ? "btn d-block position-fixed end-0 bottom-0 mb-2 me-md-4 pe-0 pe-sm-2"
                : "d-none  "
            }
          >
            <img
              className="img_go_to_top position-relative"
              src={img_top}
              alt=""
            />
          </button>{" "}
        </div>
      </section>
    </>
  );
}

export default Backtop;
