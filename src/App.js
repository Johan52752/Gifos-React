import './App.css';
import {useState,useEffect} from "react"
import {Header} from "./components/header/headers";
import {Results} from "./components/results/results";
import {Search} from "./components/search/search";

function App() {
  const[inputData, setInputData]=useState("");
  const[click, setClick]=useState(false);
  const[gifs,setGifs]=useState(null);
  const[isLoading,setIsLoading]=useState(null);
  const [darkmode,setDarkMode]=useState(false);

  const handleInputData=(e)=>{
    setInputData(e.target.value);
  }
  const handleClick=()=>{
    setClick(!click);
  }
  const handleEnter=(e)=>{
    if (e.key === 'Enter') {
      setClick(!click);
    }
  }
  const handleDarkMode=()=>{
    console.log("Has clickeado el dark")
    setDarkMode(!darkmode);
  }
  useEffect(()=>{
    if(inputData){
      setIsLoading(true);
      const promise=fetch(`https://api.giphy.com/v1/gifs/search?api_key=dsHlCJELtdOpI8TdMJBPUV1hdVlUFjHa&q=${inputData}&limit=12&offset=0&rating=g&lang=en`)
      promise.then((response)=>response.json())
      .then((data)=>{
        setIsLoading(false)
        setGifs(data.data)
      })
      .catch((error)=>console.log(error))
    }else{
      setGifs(null)
    }
  },[click])
  return (
    <div className={`App ${darkmode?"dark":""}`}>
      <div className={`app-container ${darkmode?"dark":""}`}>
        <Header handledarkmode={handleDarkMode} darkmode={darkmode}/>
        <Search darkmode={darkmode} input={[inputData,handleInputData,setInputData]} button={handleClick} enter={handleEnter}/>
        <Results darkmode={darkmode} loading={isLoading} data={gifs}/>
      </div>
    </div>
  );
}

export default App;
