import React from "react";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
import { BiArrowBack } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";

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

const WithdrawalRequestPage = () => {
  return (
    <div className="flex flex-col w-full md:mt-28 mt-0 items-center md:justify-start justify-center">
      <div className="flex justify-around w-full">
        <div className="w-72 text-green-500 transition duration-1000 ease-in-out hover:text-red-600">
          <p className="italic text-xl">
            <Link to="/viewstartup" className="ml-5 flex">
              <BiArrowBack fontSize={30} className="mr-2" />
              Back to View StartUp
            </Link>
          </p>
        </div>
        <p className="text-2xl font-thin text-white">
            Balance{" "}:
          <span className="font-normal text-white">{" "}13.85 Ether </span>
          ($44663.62)
        </p>
      </div>
      <div className="flex w-full justify-around mt-16">
        <h1 className="text-white md:text-4xl text-2xl mt-1 font-semibold">
          Withdrawal Request for StartUp...
        </h1>
        <div>
          <Link to="/createrequest">
            <button
              type="button"
              // onClick={handleSubmit}
              className="text-black font-semibold w-full border-[1px] py-2 px-4 border-[#3d4f7c] rounded cursor-pointer bg-gradient-to-r from-green-500 to-green-300"
            >
              View Withdrawal Request
            </button>
          </Link>
        </div>
      </div>

      <div class="w-4/5 mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                Description
              </th>
              <th scope="col" class="px-6 py-3">
                Amount
              </th>
              <th scope="col" class="px-6 py-3">
                Recipient Wallet Address
              </th>
              <th scope="col" class="px-6 py-3">
                Approval Count
              </th>
              <th scope="col" class="px-6 py-3">
                Approval
              </th>
              <th scope="col" class="px-6 py-3">
                Finalize
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                1
              </th>
              <td class="px-6 py-4">Need for Computers</td>
              <td class="px-6 py-4">5ETH($6500)</td>
              <td class="px-6 py-4">
                0x5b78103E11D48c98389623fFd5BEb5D982E774Ef
              </td>
              <td class="px-6 py-4">2/3</td>
              <td class="px-6 py-4">
                <AiFillCheckCircle color="green" />
              </td>
              <td class="px-6 py-4">
                <AiFillCheckCircle color="green" />
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                2
              </th>
              <td class="px-6 py-4">Need for Internet</td>
              <td class="px-6 py-4">5ETH($6500)</td>
              <td class="px-6 py-4">
                0x5b78103E11D48c98389623fFd5BEb5D982E774Ef
              </td>
              <td class="px-6 py-4">2/3</td>
              <td class="px-6 py-4">
                <AiFillCheckCircle color="green" />
              </td>
              <td class="px-6 py-4">
                <AiFillCheckCircle color="green" />
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                3
              </th>
              <td class="px-6 py-4">Need for Computers</td>
              <td class="px-6 py-4">5ETH($6500)</td>
              <td class="px-6 py-4">
                0x5b78103E11D48c98389623fFd5BEb5D982E774Ef
              </td>
              <td class="px-6 py-4">2/3</td>
              <td class="px-6 py-4">
                <AiFillCheckCircle color="green" />
              </td>
              <td class="px-6 py-4">
                <AiFillCheckCircle color="green" />
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                3
              </th>
              <td class="px-6 py-4">Need for Computers</td>
              <td class="px-6 py-4">5ETH($6500)</td>
              <td class="px-6 py-4">
                0x5b78103E11D48c98389623fFd5BEb5D982E774Ef
              </td>
              <td class="px-6 py-4">2/3</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-amber-900 bg-white hover:bg-gray-100 border-2 border-amber-500 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
                >
                  Approve
                </button>
              </td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-green-900 bg-white hover:bg-gray-100 border-2 border-green-500 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
                >
                  Finalize
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WithdrawalRequestPage;
