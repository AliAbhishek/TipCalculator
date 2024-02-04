import React, { useEffect, useState } from "react";
import { MdPerson } from "react-icons/md";
import Calculator from "../Component/Calculator";

const Homepage = () => {
  const [details, setDetails] = useState({
    Bill: "",
    Tip: "",
    People: "",
  });
  const [Reset, setReset] = useState(false);
  const [error, setError] = useState("");
  const [borderError,setBorderError]=useState(false)

  const [tipValue, setTipValue] = useState("");
  const [inputField, setInputField] = useState(false);

  const handlechange = (e) => {
    setDetails((old) => ({ ...old, [e.target.name]: e.target.value }));
    setReset(true);
   
  };

  useEffect(() => {
    const peopleValue = parseFloat(details.People);
    if ( details.People && isNaN(peopleValue) || peopleValue <= 0) {
      setError("Invalid value");
      setBorderError(true);
    }else if(!details.People){
      setError("Can't be zero ");
    }

     else {
      setError("");
      setBorderError(false);
    }
  }, [details.People]);
  
  

  const handleclick = (value) => {
    setTipValue(value);
    setDetails((old) => ({ ...old, Tip: value }));
  };

  console.log(details);

  return (
    <div>
      <div className="bg-[#c5e4e7] h-[750px] w-screen absolute">
        <div className="flex items-center justify-center h-[100px]">
          <div className="text-2xl font-bold tracking-wider text-[#00474b]">
            <div>SPLT</div>
            <div>TTER</div>
          </div>
        </div>

        <div className="flex bg-white m-24  top-0 mt-12  justify-between shadow-xl border-2">
          <div className=" p-10 w-[45%]">
            <div className="relative">
              <p className="mb-4 tracking-wider">Bill</p>
              <label className="absolute top-[50px] left-3" htmlFor="">
                $
              </label>
              <input
                name="Bill"
                value={details.Bill}
                onChange={handlechange}
                className="focus:outline-0 text-right  bg-zinc-200 w-full h-full border-2 hover:border-[#9fe8dd] text-[#00474b] font-bold px-3 py-2.5 rounded-[7px] "
                placeholder="0"
              />
            </div>

            <div>
              <p className="mt-5">Select Tip %</p>
              <div className="flex gap-7 mt-6">
                <button
                  name="5"
                  onClick={() => handleclick("5")}
                  className={`${
                    tipValue === "5"
                      ? "bg-[#9fe8dd] text-[#00474b]"
                      : "bg-[#00474b]"
                  } w-28  text-white font-bold py-2 px-4 rounded`}
                >
                  5%
                </button>
                <button
                  name="10"
                  onClick={() => handleclick("10")}
                  className={`${
                    tipValue === "10"
                      ? "bg-[#9fe8dd] text-[#00474b]"
                      : "bg-[#00474b]"
                  } w-28  text-white font-bold py-2 px-4 rounded`}
                >
                  10%
                </button>
                <button
                  name="15"
                  onClick={() => handleclick("15")}
                  className={`${
                    tipValue === "15"
                      ? "bg-[#9fe8dd] text-[#00474b]"
                      : "bg-[#00474b]"
                  } w-28  text-white font-bold py-2 px-4 rounded`}
                >
                  15%
                </button>
              </div>

              <div className="flex gap-7 mt-8">
                <button
                  name="25"
                  onClick={() => handleclick("25")}
                  className={`${
                    tipValue === "25"
                      ? "bg-[#9fe8dd] text-[#00474b]"
                      : "bg-[#00474b]"
                  } w-28  text-white font-bold py-2 px-4 rounded`}
                >
                  25%
                </button>
                <button
                  name="50"
                  onClick={() => handleclick("50")}
                  className={`${
                    tipValue === "50"
                      ? "bg-[#9fe8dd] text-[#00474b]"
                      : "bg-[#00474b]"
                  } w-28  text-white font-bold py-2 px-4 rounded`}
                >
                  50%
                </button>
                <button
                  onClick={() => {
                    setInputField(true);
                    setDetails((old) => ({ ...old, Tip: "" }));
                  }}
                  className={`w-28 bg-zinc-200 border-2 ${
                    inputField ? "border-[#9fe8dd]" : "Custom"
                  }  text-[#00474b] font-bold py-2 px-4 rounded`}
                >
                  {inputField ? (
                    <input
                      type="text"
                      onChange={handlechange}
                      name="Tip"
                      value={details.Tip}
                      className=" focus:outline-0 bg-zinc-200 border-none text-[#00474b] w-20 font-bold  px-4 rounded"
                    />
                  ) : (
                    "Custom"
                  )}
                </button>

                {/*  */}
              </div>
            </div>

            <div className="relative mt-6">
              <div className="flex justify-between">
                <p className="mb-4 tracking-wider">No. of People</p>
                <p className="text-red-500">{error}</p>
              </div>

              <label className="absolute top-[53px] text-xl left-3" htmlFor="">
                <MdPerson />
              </label>
              <input
                name="People"
                value={details.People}
                onChange={handlechange}
                className={` ${borderError?"border-red-500":null} focus:outline-0 text-right  bg-zinc-200 w-full h-full border-2 px-3 py-2.5 rounded-[7px] `}
                placeholder="0"
              />
            </div>
          </div>

          <div className="w-[55%]">
            <Calculator
              details={details}
              Reset={Reset}
              setDetails={setDetails}
              setReset={setReset}
              setTipValue={setTipValue}
              setInputField={setInputField}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
