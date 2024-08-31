import React from "react";
import ProductSlide from "../components/ProductSlide";
import CardSlider from "../components/CardSlider";
import DownloadAll from "../components/DownloadAll";
import RawSlider from "../components/RawSlider";
import RengBar from "../components/RengBar";

const Home = () => {
  return (
    <>
      <ProductSlide />
      <CardSlider />
      <DownloadAll />
      <RawSlider />
      <RengBar />
    </>
  );
};

export default Home;
