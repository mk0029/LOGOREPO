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
        <section className=" position-fixed bg_preloader w-100 min-vh-100  d-flex flex-column justify-content-center align-items-center ">
          <div id="preloader">
            <div id="loader"></div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export default Loader;
