import React, { useState, useEffect } from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ethers } from "ethers";

const Welcome = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [accountAddress, setAccountAddress] = useState("");
  const [accountBalance, setAccountBalance] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      /*
       * First make sure we have access to window.ethereum
       */
      const { ethereum } = window;
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      if (!ethereum) {
        console.log("Make sure you have metamask!");
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      /*
       * Check if we're authorized to access the user's wallet
       */
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        var balance = await provider.getBalance(accounts[0]);
        var bal = ethers.utils.formatEther(balance);
        setAccountAddress(accounts[0]);
        setAccountBalance(bal);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  /*
   Implement your connectWallet method here
  */

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
      window.location.reload();
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="flex w-full my-32 md:justify-start justify-center items-center">
      <div className=" w-full flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-48 sm:w-80 w-full my-5 eth-card white-glassmorphism hover:animate-bounce">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white text-left text-sm">
                  Address: {accountAddress.slice(0, 5)}...
                  {accountAddress.slice(37, 42)}
                </p>
                <p className="text-white font-semibold text-lg">
                  Ethereum: {accountBalance.slice(0, 5)}{"ETH"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col text-center md:text-left mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white py-1">
            Investment &#38; Funding using the powers of Crypto &#38; Blockchain
          </h1>
          <button
            type="button"
            className="md:w-80 w-full flex flex-row justify-center items-center mt-10 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            {currentAccount ? (
              <p className="text-white text-base font-semibold">
                <Link to="/createstartup">Create Start Up</Link>
              </p>
            ) : (
              <p
                className="text-white text-base font-semibold"
                onClick={connectWallet}
              >
                Connect Wallet
              </p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
