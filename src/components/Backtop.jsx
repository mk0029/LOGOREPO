import React, { useEffect, useState } from "react";

function Backtop() {
  const [backtop, setBackTop] = useState(0);
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 500) {
        setBackTop(true);
      } else {
        setBackTop(true);
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
                ? "btn d-block position-fixed end-0 bottom-0 mb-2 me-4"
                : "btn d-none position-fixed end-0 bottom-0 mb-2 me-4"
            }
          >
            top{" "}
          </button>{" "}
        </div>
      </section>
    </>
  );
}

export default Backtop;
