import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
import { BiArrowBack } from "react-icons/bi";
import { ethers } from "ethers";
import abi from "../utils/CreateStartUp.json";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    name={name}
    onChange={(e) => handleChange(e.target.value)}
    className="my-4 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-lg white-glassmorphism"
    required
  />
);

const CreateStartUpPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [startupName, setStartupName] = useState("");
  const [email, setEmail] = useState("");
  const [discription, setDiscription] = useState("");
  const [fileURL, setFileURL] = useState("");
  const [totalETH, setTotalETH] = useState("");

  const contractAddress = "0x9d565220538fd9a604c237ac222B9C4172B1015e";
  const contractABI = abi.abi;

  const createNewStartUp = async (event) => {
    if (discription.length > 100) {
      try {
        event.preventDefault();
        const { ethereum } = window;

        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const createStartUpContract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );

          let count = await createStartUpContract.getTotalStartUp();
          console.log("Retrieved total startUp count...", count.toNumber());

          setIsLoading(true);
          const createstartupTxn = await createStartUpContract.createstartup(
            startupName,
            email,
            discription,
            fileURL,
            totalETH
          );

          console.log("Mining...", createstartupTxn.hash);

          await createstartupTxn.wait();
          console.log("Mined -- ", createstartupTxn.hash);

          count = await createStartUpContract.getTotalStartUp();
          console.log("Retrieved total startUp count...", count.toNumber());
          setIsLoading(false);
          setStartupName("");
          setEmail("");
          setDiscription("");
          setFileURL("");
          setTotalETH("");
        } else {
          console.log("Ethereum object doesn't exist!");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Discription must be more than 100 words..");
    }
  };

  return (
    <div className="flex flex-col w-full md:mt-14 mt-0 items-center md:justify-start justify-center min-h-screen ">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-amber-500 md:text-4xl text-2xl font-semibold mb-5">
        Create a New StartUp
      </h1>

      <div className="p-5 md:w-1/2 w-11/12 flex flex-col justify-start items-center blue-glassmorphism">
        <form onSubmit={createNewStartUp}>
          <Input
            placeholder="StartUp Name"
            name="addressTo"
            type="text"
            value={startupName}
            handleChange={setStartupName}
          />
          <Input
            placeholder="Email"
            name="email"
            type="email"
            value={email}
            handleChange={setEmail}
          />
          <input
            placeholder="Description"
            type="text"
            value={discription}
            name="description"
            onChange={(e) => setDiscription(e.target.value)}
            className="my-4 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-lg white-glassmorphism"
            required
          />
          {/* <Input
            placeholder="Description"
            name="description"
            type="text"
            value={discription}
            handleChange={setDiscription}
          /> */}
          <Input
            placeholder="File URL"
            name="url"
            type="text"
            value={fileURL}
            handleChange={setFileURL}
          />
          <Input
            placeholder="Target Amount (ETH)"
            name="amount"
            type="number"
            value={totalETH}
            handleChange={setTotalETH}
          />

          <div className="h-[1px] w-full bg-gray-400 my-2" />

          {isLoading ? (
            <Loader />
          ) : (
            <input
              type="submit"
              className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer transition duration-[2s] ease-in-out hover:bg-rose-600"
              value="Send Now"
            />
          )}
        </form>
      </div>
      <div className="mt-2 w-60 text-green-500 transition duration-1000 ease-in-out hover:text-red-600">
        <p className="italic text-xl">
          <Link to="/" className="ml-5 flex">
            <BiArrowBack fontSize={30} className="mr-2" />
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CreateStartUpPage;
