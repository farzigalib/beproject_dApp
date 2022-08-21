import React from "react";
import HowToUse from "../Components/Howtouse";
import PostCard from "../Components/PostCard";
import Welcome from "../Components/Welcome";

const HomePage = () => {
  return (
    <div>
      <Welcome />
      <PostCard />
      <HowToUse />
    </div>
  );
};

export default HomePage;
