import React from "react";
import { Link } from "react-router-dom";
import { FcGlobe } from "react-icons/fc";
import { BsCurrencyBitcoin, BsTwitter, BsGithub } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col gradient-bg-footer mt-8">
      <hr className="py-3 md:mx-12 mx-0" />
      <div className="mx-auto w-80">
        <div className="flex justify-center items-center white-glassmorphism-logo py-2 px-3">
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
        <div className="flex justify-around my-3 font-semibold text-white">
          <a href="/" className="underline hover:no-underline">
            Home
          </a>
          <a target="_blank" href="#" className="underline hover:no-underline">
            Github
          </a>
          <a target="_blank" href="#" className="underline hover:no-underline">
            Contact
          </a>
        </div>
      </div>
      <div className="flex flex-wrap gap-y-5 justify-around bg-gray-400 py-2">
        <div className="flex font-bold text-center md:text-lg text-sm items-center">
          <FcGlobe fontSize={30} className="mr-2" />
          Made by Himanshu, Dhrumi, Hanumant(Boss)
        </div>
        <div className="flex gap-x-5 items-center">
          <a
            href="#"
            className="rounded-full bg-[#2affbf] transition duration-[1.3s] ease-in-out hover:bg-[#FFC83D] p-2"
          >
            <BsCurrencyBitcoin fontSize={20} />
          </a>
          <a
            href="#"
            className="rounded-full bg-[#2affbf] transition duration-[1.3s] ease-in-out hover:bg-[#FFC83D] p-2"
          >
            <BsTwitter fontSize={20} />
          </a>
          <a
            href="#"
            className="rounded-full bg-[#2affbf] transition duration-[1.3s] ease-in-out hover:bg-[#FFC83D] p-2"
          >
            <BsGithub fontSize={20} />
          </a>
          <a
            href="#"
            className="rounded-full bg-[#2affbf] transition duration-[1.3s] ease-in-out hover:bg-[#FFC83D] p-2"
          >
            <SiHashnode fontSize={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
