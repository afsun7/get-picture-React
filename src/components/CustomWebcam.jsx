import { useRef } from "react";
import Webcam from "react-webcam";

const CustomWebcam = () => {
  const webcamRef = useRef(null);
  return (
    <div className="container">
      {/* <Webcam height={600} width={600} ref={webcamRef} /> */}
    </div>
  );
};

export default CustomWebcam;
