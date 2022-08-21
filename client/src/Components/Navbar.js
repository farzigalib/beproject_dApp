import React, { useState, useEffect } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      /*
       * First make sure we have access to window.ethereum
       */
      const { ethereum } = window;

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
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <nav className="w-full flex justify-around items-center px-4 pt-4">
      <div className="flex flex-initial justify-center items-center white-glassmorphism-logo py-2 px-3">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="rounded-full md:w-14 w-10 md:mr-5 mr-3"
          />
        </Link>
        <Link to="/">
          <h1 className="font-semibold md:text-2xl text-lg text-white">
            The Funder's Hub
          </h1>
        </Link>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {currentAccount && (
          <li className="mx-4 cursor-pointer text-xl transition duration-[1.5s] ease-in-out hover:text-[#F8933C]">
            <Link to="/createstartup">Create StartUp</Link>
          </li>
        )}
        <li className="mx-4 cursor-pointer text-xl transition duration-[1.5s] ease-in-out hover:text-[#F8933C]">
          <Link to="/">How it works</Link>
        </li>
        {/* {currentAccount && (
          <li className="bg-[#2953e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
            Disconnect Wallet
          </li>
        )} */}
      </ul>
      {/* <div className="flex relative"> */}
      {toggleMenu ? (
        <AiOutlineClose
          fontSize={28}
          className="text-white md:hidden cursor-pointer"
          onClick={() => setToggleMenu(false)}
        />
      ) : (
        <HiMenuAlt4
          fontSize={28}
          className="text-white md:hidden cursor-pointer"
          onClick={() => setToggleMenu(true)}
        />
      )}
      {toggleMenu && (
        <ul
          className="z-10 fixed top-0 -right-2 p-3 w-[70vw] 
                          h-screen shadow-2xl md:hidden list-none flex flex-col 
                          justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
        >
          <li className="text-xl w-full my-2">
            <AiOutlineClose onClick={() => setToggleMenu(false)} />
          </li>
          {currentAccount && (
            <li className="mx-4 cursor-pointer my-2 text-lg hover:text-[#F8933C]">
              <Link to="/createstartup">Create StartUp</Link>
            </li>
          )}
          <li className="mx-4 cursor-pointer my-2 text-lg hover:text-[#F8933C]">
            <Link to="/">How it works</Link>
          </li>
          {/* {currentAccount && (
            <li className="bg-[#2953e3] py-2 px-7 mt-20 mx-auto rounded-full cursor-pointer hover:bg-[#2546bd]">
              Disconnect Wallet
            </li>
          )} */}
        </ul>
      )}
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
