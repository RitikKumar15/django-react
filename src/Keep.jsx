import React, { useState, useRef, useLayoutEffect } from 'react';
import Menu from "./Menu";

const Keep = () => {
  
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  
  const [getNotes, setNotes] = useState([]);
  
  const initialRender = useRef(true);
  
  useLayoutEffect(() => {
    if (initialRender.current){
      initialRender.current = false;
      return;
    }
    return alert("Note Added Successful!");
  }, [getNotes]); 
  
  const inputEvent = (e) => {
    let {name, value} = e.target;
    setNote((obj) => {
      return {
        ...obj,
        [name]: value
      }
    });
  }
  
  const clickEvent = () => {
    setNotes((arr) => {
      return [...arr, note]
    });
  }
  
  const delNote = (index) => {
    setNotes((arr) => {
      return arr.filter((elem, ind) => {
        return ind !== index
      });
    });
  }
  
  return (
    <>
    <Menu />
    <div className="container">
      <h1 className="text-center text-danger">Magic Notes </h1>
      <input type='text' name="title" className="form-control" placeholder="Enter Your Title..." autoComplete="off" value={note.title} onChange={inputEvent} />
      <div className="form-group my-1">
        <textarea rows="6" cols="36" name="content" className="form-control p-1" value={note.content} onChange={inputEvent} placeholder="Enter Your Notes..." />
      </div>
      <input type="submit" className="btn btn-success my-1" onClick={clickEvent} value="Add" />
      
      {getNotes.map((elem, index) => {
          return (
          <>
          <div className="card my-1" key={index} onClick={() => delNote(index)}>
            <header className="text-center text-dark py-2 my-1 fw-bold" style={{background: 'green'}}>Note: {index+1}</header>
            <label className="fw-bold">Title</label>
            <p className="px-3 text-center">{elem.title}</p>
            <label className="fw-bold">Content</label>
            <p className="px-3 text-center">{elem.content}</p>
            <p className="btn btn-danger btn-sm">Remove</p>
          </div>
          </>
        );
        })}
    </div>
    </>
    )
}

export default Keep;