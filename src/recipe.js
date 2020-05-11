import React,{useState} from 'react';
import './index.css';

const Recipe = (props)=>{

  const [val,setVal] = useState(false);

  const showrecipe = () =>{
      if(val == false){
          setVal(true);
      }
      else{
          setVal(false);
      }
  }


    return(
        <div className="card">
        <h1 className="header">{props.title}</h1>
        <div><button className="show-btn" onClick={showrecipe}>Show Recipe</button></div>
        <br></br>
        <ul className={val?"dontshow":"showlist"}>
        {props.ingredients.map(step=>(
        <li>{step.text}</li>
        ))}
        </ul>
        <img src={props.img} alt='food'></img>
        </div>
    );
}

export default Recipe;