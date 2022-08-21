import React from "react";
import { FcDonate, FcShare, FcMoneyTransfer } from "react-icons/fc";

const HowToUse = () => {
  return (
    <div id="howtouse" className="flex flex-col pt-5 md:mx-16 text-white text-left mx-3 white-glassmorphism">
      <h1 className="mb-5 mt-2 md:text-3xl text-lg text-white text-center">
        How <strong className="text-orange-500">The Funder's Hub</strong> Works
      </h1>
      <hr />
      <div className="gradient-bg-services p-5">
        <div className="flex md:flex-row flex-col justify-around gap-12 mt-5 ">
          <div className="flex flex-col gap-y-3">
            <FcDonate fontSize={50} className="p-2 rounded-full bg-white" />
            <h2 className="font-semibold text-xl text-orange-500">
              Create a Campaign for Fundraising
            </h2>
            <p>
              It’ll take only 2 minutes. Just enter a few details about the
              funds you are raising for.
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <FcShare fontSize={50} className="p-2 rounded-full bg-white" />
            <h2 className="font-semibold text-xl text-orange-500">
              Create a Campaign for Fundraising
            </h2>
            <p>
              It’ll take only 2 minutes. Just enter a few details about the
              funds you are raising for.
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <FcMoneyTransfer
              fontSize={50}
              className="p-2 rounded-full bg-white"
            />
            <h2 className="font-semibold text-xl text-orange-500">
              Create a Campaign for Fundraising
            </h2>
            <p>
              It’ll take only 2 minutes. Just enter a few details about the
              funds you are raising for.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
