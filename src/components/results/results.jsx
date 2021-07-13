import "./results.css"
import { useContext } from "react";
import {AppContext} from "../../context/AppContext"
export function Results({data,loading}){
    const {darkmode,setDarkMode}=useContext(AppContext);
    let response=""
    if(loading===true){
        response=(<img className="loading" src="./images\VAyR.gif" alt="" />)
    }else if(loading===false&& data){
        response=(
            data.length===0?<p>No se encontraron resultados</p>:data.map((gif,index)=>{
                return(<img className="results-gifs-gif" key={index}src={gif.images.original.url} alt="" />)
            })
        )
    }

    return(
        <div className={`Results ${darkmode?"dark-results":""}`}>
            {
                response?<h1 className="results-text">Resultados de busqueda</h1> : <h1 className="results-text max">Escribe algo para empezar a buscar un gif</h1>
            }
            <div className={Array.isArray(response)?"results-gifs grey":"results-gifs"}>
                {response} 
            </div>
        </div>
    )
}