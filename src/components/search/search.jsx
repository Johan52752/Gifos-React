import "./search.css"
import {useState,useEffect} from "react"
import {ReactComponent as Lupa} from "./lupa.svg"
import {ReactComponent as Cerrar} from "./cerrar.svg"
import { useContext } from "react";
import {AppContext} from "../../context/AppContext"
export function Search({input, button, enter}){
    const [tags,setTags]=useState([])
    const [showUl,setShowUl]=useState(false);
    const {darkmode,setDarkMode}=useContext(AppContext)
    useEffect(()=>{
        if (input[0] && showUl) {
            const promise=fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=dsHlCJELtdOpI8TdMJBPUV1hdVlUFjHa&q=${input[0]}&limit=5&offset=0&rating=g&lang=en`)
            promise.then(response=>response.json())
            .then(data=>{
                setTags(data.data)
            })
        }else{
            setTags([]);
            setShowUl(false)
        }
    },[input[0]])
    return(
        <div className="Search">
            <h1 className={`search-text ${darkmode?"dark-text":""}`}>¡Inspirate y busca los mejores <b>GIFS!</b> </h1>
            <img src="./images/ilustra_header.svg" alt="" />
            <label className={`search-label ${showUl?"border":""} ${darkmode?"dark-label":""}`} htmlFor="">
                {
                    input[0]?<Lupa
                                onClick={()=>{
                                    button()
                                    setShowUl(false)
                                }} 
                                className="lupa-label"/>
                                :null
                }
                <input 
                    onKeyDown={(e)=>{
                        enter(e)
                        setShowUl(false);
                    }} 
                    value={input[0]} 
                    onChange={(e)=>{
                        input[1](e);
                        setShowUl(true);
                    }} 
                    placeholder="Busca gifs"
                    type="text"
                /> 
                <button
                    onClick={()=>{
                        if(input[0]){
                            input[2]("")
                            button()
                        }else{
                            button()
                        }
                        setShowUl(false)
                    }}>
                    {input[0]?<Cerrar />:<Lupa />}
                </button>
            </label>
            <ul className={`search-tags ${showUl?"":"hidden"} ${darkmode?"dark-ul":""}`}>
                <hr />
                {
                    tags.length>0?tags.map((tag,index)=>{
                        return(
                            <a key={index}onClick={()=>{
                                input[2](tag.name)
                                button()
                                setShowUl(false);
                            }}>
                                <Lupa />
                                <li >{tag.name}</li>
                            </a>
                        )
                    }):(
                        <li>No hay sugerencias de busqueda</li>
                        )
                }
            </ul>
        </div>
    )
}