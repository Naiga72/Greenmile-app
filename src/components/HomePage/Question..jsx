import React,{useState} from 'react'
import './Answers.css'

function Qions() {
  const [isLoading, setLoading] = useState(true);
  const[state, setState] = useState([])

  const People = () => {
    setLoading(false)
    fetch("")
      .then((res) => res.json())
      .then((data) => setState(data.question))
      .then(()=> setLoading(true)) 
  };
  return (
    <div className='vip'>
         {!isLoading ? <div><h4>Getting questions...!!!</h4>
         <img style={{width:"200px",height:"200px"}} src="img/loader.gif" alt="spinner" /></div> : state.map(b=>{
           return <ol key={b._id}><li>{b.description}<button className="hat" >Answer</button></li></ol>
          })
        } 
        <button onClick={People}>View All Questions</button>
        
    </div>
  );
}

export default Qions;