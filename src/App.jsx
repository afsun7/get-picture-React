import { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./App.css";

function App() {
  const [deviceId, setDeviceId] = useState("");
  const [image, setImage] = useState("");
  const [load, setload] = useState(false);
  const webcamRef = useRef(null);
  const [input, setInput] = useState({ name: "", family: "" });
  const [user, setUser] = useState({});
  function handelCapture() {
    const imgSrc = webcamRef.current.getScreenshot();
    setImage(imgSrc);
  }
  function handelClear() {
    setImage("");
  }
  function handelInput(e) {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handelSubmit() {
    setUser(input);
    setInput({ name: "", family: "" });
  }

  return (
    <>
      <div className="md:w-[800px] p-4 mt-4 border-2 border-pink-600 rounded-lg bg-fuchsia-300 flex flex-col items-center  ">
        <h1 className=" m-auto text-5xl mt-8 font-bold">form Login</h1>
        <div className="mb-2 mt-10">
          <label htmlFor="name" className="mr-2 text-xl">
            name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John"
            className=" rounded-md px-3 h-8 border-none"
            onChange={handelInput}
            value={input.name}
          />
        </div>
        <div>
          <label htmlFor="family" className="mr-2 text-xl">
            family:
          </label>
          <input
            type="text"
            id="family"
            name="family"
            placeholder="Doe"
            className=" rounded-md px-3 h-8 border-none"
            onChange={handelInput}
            value={input.family}
          />
        </div>
        <div class="my-4 flex gap-1 md:gap-4">
          <button
            onClick={() => setload(true)}
            className=" bg-[#f87dbe] text-xl rounded-md px-3 mt-4 h-8 text-black  transition-all shadow-md hover:text-white hover:shadow-zinc-600"
          >
            <i className="fa fa-camera"></i>
          </button>
          <button
            disabled={image}
            onClick={handelCapture}
            className=" bg-[#f87dbe] text-xl rounded-md px-3 mt-4 h-8 text-black border-0 transition-all shadow-md hover:text-white hover:shadow-zinc-600"
          >
            Take photo
          </button>
          <button
            onClick={handelClear}
            className=" bg-[#f87dbe] text-xl rounded-md px-3 mt-4 h-8 text-black border-0 transition-all shadow-md hover:text-white hover:shadow-zinc-600"
          >
            Clear photo
          </button>
        </div>
        <div className="flex gap-4 flex-col md:flex-row">
          {image && (
            <img
              src={image}
              className="border-4 rounded-md border-pink-400"
            ></img>
          )}
          {load && (
            <Webcam
              audio={false}
              id={deviceId}
              ref={webcamRef}
              width={300}
              className="border-4 rounded-md border-pink-400 bg-auto"
            />
          )}
        </div>
        <button
          onClick={handelSubmit}
          type="submit"
          className=" bg-[#f87dbe] text-xl rounded-md px-3 mt-4 h-8 text-black border-0 transition-all shadow-md hover:text-white hover:shadow-zinc-600"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default App;
