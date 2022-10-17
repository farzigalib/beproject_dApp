import React, { useEffect, useState } from "react";
import { SiEthereum } from "react-icons/si";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import abi from "../utils/CreateStartUp.json";

const PostCard = () => {
  const [allStartUp, setAllStartUp] = useState([]);

  const contractAddress = "0x53dc87D711967503BEB352Db44a097100230Dc03";
  const contractABI = abi.abi;

  const getStartUp = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const createStartUpContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const startUp = await createStartUpContract.getAllStartUp();

        const startUpData = startUp.map((data) => {
          return {
            address: data.creater,
            startUpName: data.startUpName,
            email: data.email,
            discription: data.discription,
            fileURL: data.fileURL,
            totalETH: data.totalETH,
          };
        });

        setAllStartUp(startUpData);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStartUp();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-x-12 gap-y-28 my-20">
      {allStartUp
        .map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col md:w-96 w-11/12 justify-center items-center rounded-lg"
            >
              <Link to="/viewstartup" state={{
                dataStartup: data,
              }}>
                <img
                  src={`https://source.unsplash.com/random/383x330/?blockchain,ether,${data.startUpName}`}
                  className="rounded-t-lg"
                />
                <div className="flex flex-col text-white px-4 py-5 gap-y-2 gradient-bg-transactions">
                  <p className="text-xl font-thin">
                    <strong>StartUp Name</strong> : {data.startUpName}
                  </p>
                  <p className="text-xl font-thin">
                    <strong>Email</strong> : {data.email.slice(0, 20)}...
                  </p>
                  <p className="text-xl font-thin">
                    <strong>Description</strong> :{" "}
                    {data.discription.slice(0, 20)}
                    {"\n"}
                    {data.discription.slice(21, 40)}
                    {"\n"}
                    {data.discription.slice(41, 60)}
                    {"\n"}
                    {data.discription.slice(61, 80)}
                    {"\n"}
                    {data.discription.slice(81, 100)}
                  </p>
                  <p className="text-xl font-thin">
                    <strong>File URL</strong> : {data.fileURL.slice(0, 20)}
                  </p>
                  <p className="flex items-center text-xl font-thin">
                    <strong className="flex items-center">
                      Target Amount (<SiEthereum />)
                    </strong>
                    {": "} {(data.totalETH).toNumber()} ETH
                  </p>
                </div>
              </Link>
            </div>
          );
        })
        .reverse()}
    </div>
  );
};

export default PostCard;
