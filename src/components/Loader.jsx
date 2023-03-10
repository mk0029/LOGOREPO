import React, { useEffect, useState } from "react";

function Loader() {
  const [loder, setloader] = useState(0);
  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 4000);
  }, []);
  {
    if (loder) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }
  return (
    <>
      {loder ? (
        <section className=" position-fixed bg-white w-100 min-vh-100 z_index2 d-flex flex-column justify-content-center align-items-center ">
          <div className=" container animationloader  ">
            <div className="wave-loader">
              <div className="layer-1"></div> <div className="layer-2"></div>
              <div className="layer-3"></div> <div className="layer-4"></div>
              <div className="layer-5"></div> <div className="layer-6"></div>
              <div className="layer-7"></div>
              <div className="layer-8"></div> <div className="layer-9"></div>
              <div className="layer-10"></div>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export default Loader;
