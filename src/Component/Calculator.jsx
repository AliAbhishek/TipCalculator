import React, { memo, useEffect, useState } from "react";

const Calculator = ({ details, Reset, setDetails, setReset,setTipValue,setInputField }) => {
  const [Amount, setAmount] = useState(0.0);
  const [billperperson, setbillperperson] = useState(0.0);

  let tipAmount = (details.Bill / 100) * details.Tip;

  let finaltip = (tipAmount / details.People).toFixed(2);

  let bill = (details.Bill / details.People).toFixed(2);

  useEffect(() => {
    const parsedTip = parseFloat(finaltip);

    if (isFinite(parsedTip)) {
      setAmount(parsedTip);
    } else {
      console.error("Invalid tip value:", finaltip);
    }
  }, [finaltip]);

  useEffect(() => {
    const parsedBill=parseFloat(bill)
    if(isFinite(parsedBill)){
      setbillperperson(parsedBill)
    }else {
      console.error("Invalid bill:", bill);
    }
  }, [bill]);

  const handlereset = () => {
    setDetails({
      Bill: "",
      Tip: "",
      People: "",
    });
    setReset(false);
    setTipValue(0)
    setAmount(0.00)
    setbillperperson(0.00)
    setInputField(false)
    
  };

  console.log(details);

  return (
    <div className="p-10 ">
      <div className="bg-[#1c2f30] text-white p-14 rounded-xl ">
        <div className="flex justify-between ">
          <div className="tracking-wider">
            <p className="font-bol text-xl">Tip Amount</p>
            <p className="text-[#1f6165] mt-1">/Person</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#21c3ac]">
              ${Amount ? Amount : "0.00"}
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-between">
          <div className="tracking-wider">
            <p className="font-bold text-xl">Total</p>
            <p className="text-[#1f6165] mt-1">/Person</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#21c3ac]">
              ${billperperson ? billperperson : "0.00"}
            </p>
          </div>
        </div>
        <button
          onClick={handlereset}
          className={`${
            Reset ? "bg-[#9fe8dd] text-[#00474b]" : "bg-[#0d686d] text-black"
          }  mt-14 w-full  font-bold py-2 px-4 rounded`}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default memo(Calculator);
