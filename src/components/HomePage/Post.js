import React, {useState} from "react";
import "./Post.css";

function Post() {
  const[answers, setAnswer] =  useState('')

  const handleChange = (e)=> {
    setAnswer(e.target.value)
  }
  const answer = (e) => {
    e.preventDefault();
    fetch("", {
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({description: answers})
    })
      .then((res) => res.json())
      .then((data) =>{ 
        alert(data.message);
        setAnswer("")
      })
  };
  return (
    <div className="fk">
      <h2>Your Answer</h2>
      <form onSubmit={answer}>
      <textarea className="field" text="text" value={answers}  onChange={handleChange} ></textarea>
      <div className="wag">
        <button className="wat" type="submit">Post Answer</button>
      </div>
      </form>
    </div>
  );
}

export default Post;
