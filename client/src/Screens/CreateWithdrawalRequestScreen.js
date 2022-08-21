import React from "react";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
import { BiArrowBack } from "react-icons/bi";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-5 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-lg white-glassmorphism"
  />
);

const CreateWithdrawalRequestPage = () => {
  return (
    <div className="flex flex-col w-full md:mt-28 mt-0 items-center md:justify-start justify-center min-h-screen ">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-amber-500 md:text-4xl text-2xl font-semibold mb-5">
        Create a Withdrawal Request
      </h1>

      <div className="p-5 md:w-1/2 w-11/12 flex flex-col justify-start items-center blue-glassmorphism">
        <Input
          placeholder="Request Description"
          name="requestDescription"
          type="text"
          handleChange={() => {}}
        />
        <Input
          placeholder="Amount (ETH)"
          name="amount"
          type="number"
          handleChange={() => {}}
        />
        <Input
          placeholder="Recipient Ethereum Wallet address"
          name="receiverAddress"
          type="text"
          handleChange={() => {}}
        />

        <div className="h-[1px] w-full bg-gray-400 my-2" />

        {false ? (
          <Loader />
        ) : (
          <button
            type="button"
            // onClick={handleSubmit}
            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer transition duration-[2s] ease-in-out hover:bg-rose-600"
          >
            Send Request
          </button>
        )}
      </div>
      <div className="mt-4 w-72 text-green-500 transition duration-1000 ease-in-out hover:text-red-600">
        <p className="italic text-xl">
          <Link to="/withdrawalrequest" className="ml-5 flex">
            <BiArrowBack fontSize={30} className="mr-2" />
            Back to Request List
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CreateWithdrawalRequestPage;
