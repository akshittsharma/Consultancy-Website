import React, { useState, useEffect } from "react";
import data from "./assets/data.json";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Card from './Components/Card';




const App = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <img
        src="image.jpg"
        alt="IMAGE LOADING...."
        className="w-[100vw] h-auto	"
      ></img>
      <div className="flex flex-wrap gap-5 justify-center">
        {data.map((element) => (
          <Card {...element}></Card>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default App;
