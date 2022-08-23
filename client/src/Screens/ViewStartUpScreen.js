import React from "react";
import { Link, useLocation } from "react-router-dom";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="mt-2 w-11/12 rounded-sm p-2 outline-none bg-transparent text-white border-none text-lg white-glassmorphism"
  />
);

const ViewStartUpPage = () => {
  const location = useLocation();
  console.log(location.state.dataStartup);
  const data = location.state.dataStartup;

  return (
    <div className="text-white md:mx-20 mx-5 my-28 flex md:flex-row flex-col justify-center gap-x-24 gap-y-12">
      <div className="flex flex-col flex-1 gap-y-12">
        <h1 className="md:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-amber-500">
          {data.startUpName}
        </h1>
        <p className="md:justify-center justify-start items-center font-thin leading-8">
          {data.discription.slice(0, 50)}
          {"\n"}
          {data.discription.slice(51, 100)}
          {"\n"}
          {data.discription.slice(101, 150)}
          {"\n"}
          {data.discription.slice(151, 200)}
          {"\n"}
          {data.discription.slice(201, 250)}
          {"\n"}
          {data.discription.slice(251, 300)}
          {"\n"}
          {data.discription.slice(301, 350)}
          {"\n"}
          {data.discription.slice(351, 400)}
          {"\n"}
          {data.discription.slice(401, 450)}
          {"\n"}
          {data.discription.slice(451, 500)}
          {"\n"}
          {data.discription.slice(501, 550)}
          {"\n"}
          {data.discription.slice(551, 600)}
          {"\n"}
          {data.discription.slice(601, 650)}
          {"\n"}
          {data.discription.slice(651, 700)}
          {"\n"}
          {data.discription.slice(701, 750)}
          {"\n"}
          {data.discription.slice(751, 800)}
          {"\n"}
          {data.discription.slice(801, 850)}
          {"\n"}
          {data.discription.slice(851, 900)}
        </p>
        <div className="py-5 md:pl-10 pl-4 flex flex-col justify-start blue-glassmorphism">
          <p className="font-thin md:text-base text-sm mb-2">
            Wallet Address of StartUp Creator
          </p>
          <p className="font-semibold md:text-lg text-sm">
            {data.address.slice(0, 30)}...
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-y-12">
        <div className="py-5 md:pl-10 pl-4 flex flex-col justify-start blue-glassmorphism gap-y-2">
          <p className="font-thin text-base">Startup Balance</p>
          <p className="text-2xl font-thin">
            <span className="font-normal text-orange-500">5.85 Ether </span>
            ($44663.62)
          </p>
          <p className="text-base">
            target of 15 Ether
          </p>
        </div>
        <div className="py-5 md:pl-10 pl-4 flex flex-col justify-start blue-glassmorphism">
          <h1 className="font-normal text-2xl text-orange-500 mb-6">
            Contribute Now!
          </h1>
          <p className="font-thin text-base">
            Amount in Ether you want to contribute
          </p>
          <Input
            placeholder="Amount (ETH)"
            name="amount"
            type="number"
            handleChange={() => {}}
          />
          <button
            type="button"
            // onClick={handleSubmit}
            className="text-black font-semibold w-11/12 mt-2 border-[1px] p-2 border-[#3d4f7c] rounded cursor-pointer bg-gradient-to-r from-green-500 to-green-300 transition duration-[2s] ease-in-out hover:bg-rose-600"
          >
            Contribute Here...
          </button>
        </div>
        <div className="py-5 md:pl-10 pl-4 flex flex-col justify-start blue-glassmorphism">
          <Link to="/withdrawalrequest">
            <button
              type="button"
              // onClick={handleSubmit}
              className="text-black font-semibold w-11/12 mt-2 border-[1px] p-2 border-[#3d4f7c] rounded cursor-pointer bg-gradient-to-r from-orange-500 to-amber-500 transition duration-[2s] ease-in-out hover:bg-rose-600"
            >
              View Withdrawal Request
            </button>
          </Link>
          <p className="w-11/12 mt-4">
            * You can Request these funds for further uses and creater as well
            as investor have track of funds :)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewStartUpPage;
