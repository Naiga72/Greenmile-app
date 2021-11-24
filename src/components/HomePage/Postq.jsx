import React, {useState} from "react";
import "./Post.css";

function Postq() {
  const[question, setQuestion] =  useState('')

  const handleChange = (e)=> {
    setQuestion(e.target.value)
  }
  const questions = (e) => {
    e.preventDefault();
    fetch("", {
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({description: question})
    })
      .then((res) => res.json())
      .then((data) =>{ 
        alert(data.message);
        setQuestion("")
      })
  };
  return (
    <div className="fk">
      <h2>Your Questions</h2>
      <form onSubmit={questions}>
      <textarea className="field" text="text" value={question}  onChange={handleChange} ></textarea>
      <div className="wag">
        <button className="wat" type="submit">Post Question</button>
      </div>
      </form>
    </div>
  );
}

export default Postq;