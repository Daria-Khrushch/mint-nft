import { useState, useEffect } from "react";
import preloaderImage from "../assets/img/preloader.gif";
const Preloader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading && (
        <div id="preloader">
          <div className={"spinner"}>
            <img src={preloaderImage} alt="preloader" />
          </div>
        </div>
      )}
    </>
  );
};

export default Preloader;
