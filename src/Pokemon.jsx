import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Menu from "./Menu";
import axios from "axios";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Pokemon = () => {
  
  const [num, setNum] = useState("");
  const [getData, setData] = useState([]);
  const [item, setItem] = useState("");
  
  const {number} = useParams();
  console.log(`useParams Passed Value is ${number}`);
  
  useEffect(() => {
    listData();
  }, []);
  
  function listData(){
    axios.get("http://127.0.0.1:8000/list").then((response)=> {
      let res = response.data;
      setData(res);
    }).catch(() => {
      alert("some error occur");
    });
  };
  
  const postData = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/create", {
      items: item
    }).then((response) => {
      alert("data posted");
      listData();
    }).catch((error) => {
      alert("some errors occur")
    });
  };
  
  const deleteData = (id) => {
    axios.delete(`http://127.0.0.1:8000/destroy/${id}`).then((response) => {
      alert("data delete");
      listData();
    }).catch((error) => {
      alert("some errors occur")
    });
  };
  
  /*useEffect(() => {
    async function getData(){
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      alert(`You select ${res.data.name} & it has ${res.data.moves.length} moves.`);
    }
    getData();
  });*/
  
  return (
    <>
    <Menu />
    <div className="container">
      <h6 className="text-center text-danger">You Choose {num}</h6>
      <select
       className="form-control" 
       value={num}
       onChange={(e) => setNum(e.target.value)} 
      >
        <option value="">select</option>
        <option value="1">1</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="25">25</option>
      </select>
      <h1 className="text-center"> React+Django </h1>
      <form className="form-group my-2" onSubmit={postData}>
        <input 
         type="text"
         className="form-control"
         placeholder="Enter Today's Plan"
         name="text"
         value={item}
         onChange={(e) => setItem(e.target.value)}        
        />
        <input
         type="submit"
         className="btn btn-outline-success my-2"
        />
      </form>
      {getData.map((elem, i) => {
        return <h5>{i+1}. {elem.items} <span onClick={() => deleteData(elem.id)} className="text-danger px-2"><HighlightOffIcon /></span></h5>
      })}
    </div>
    </>
    )
};

export default Pokemon;