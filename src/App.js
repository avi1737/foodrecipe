import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './recipe';

const App=()=> {

  const APP_ID = "070b8256";
  const APP_KEY = "98830a4835f39a71cb795f469b75b24c";

  const [recipes,setRecipe] =useState([]);
  const [foodval,setValue] = useState("");
  const [query,setQuery] = useState("chiken");

  useEffect(
    ()=>{
      getRecipe();
    },[query]);

  const getRecipe = async()=>{
    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await res.json();
    setRecipe(data.hits);
    console.log(data.hits);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setQuery(foodval);
  }

  const inputChange=(e)=>{
    setValue(e.target.value);
  }


  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={inputChange} className="search-input" placeholder='enter food item'></input>
          <button className="search-btn">Search</button>
        </form>
      </div>
      <div className="Content">
        {recipes.map(recipe => (<Recipe title={recipe.recipe.label} img={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>))}
      </div>
    </div>
  );
}

export default App;
