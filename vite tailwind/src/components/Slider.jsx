import React, { useEffect, useState } from "react";

function Slider() {

  const [index, setIndex] = useState(0)
  useEffect(()=>{
    setInterval(()=>{
      setIndex(index+1 < 3 ? index + 1 : 0);
    },3000);
  },[]);

  const images = [
    "./images/dgs1.jpg",
    "./images/dgs2.jpg",
    "./images/dgs3.jpg",
  ];

  return (
    <div>
      <div>
        <img src={images[index]} />
      </div>
    </div>
  );
}

export default Slider;
