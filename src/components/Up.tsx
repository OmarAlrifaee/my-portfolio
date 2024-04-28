import { IoArrowUpCircle } from "react-icons/io5";
import { useState, useEffect } from "react";
const Up = () => {
  const hundleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    const hundleScroll = () => {
      if (window.scrollY > 700) setShow(true);
      else setShow(false);
    };
    window.addEventListener("scroll", hundleScroll);
    return () => window.removeEventListener("scroll", hundleScroll);
  }, []);
  return (
    <>
      {show && (
        <button onClick={hundleClick} className={`fixed right-5 bottom-5`}>
          <IoArrowUpCircle className="text-c-primary text-[30px] z-[500]" />
        </button>
      )}
    </>
  );
};

export default Up;
