import React, { useState } from "react";
import Menu from "./Menu";

const Search = () => {
  
  const [image, setImage] = useState("");
  
  const inputEvent = (e) => {
    setImage(e.target.value);
  };
  
  const Simg = (props) => {
    const img = `https://source.unsplash.com/280x280/?${props.name}`;
    return (
      props.name ? <img src={img} alt="..." className="my-2" /> : null
      );
  };

  return (
    <>
      <Menu />
      <div style={{textAlign: "center", width: "100%", margin: "5px 0px"}}>
        <input type="text" placeholder="search..." onChange={inputEvent} value={image} className="form-control px-2" />
        <br />
        <Simg name={image} />
      </div>
    </>
    );
};

export default Search;