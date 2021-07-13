import "./header.css"
import {ReactComponent as Logo} from "./logo-desktop.svg"
import { useContext } from "react"
import {AppContext} from "../../context/AppContext"
export function Header(){
    const {darkmode,setDarkMode}=useContext(AppContext)
    return(
        <div className="Header">
            <Logo className={`header-logo ${darkmode?"dark":""}`}/>
            <button onClick={()=>setDarkMode(!darkmode)}className={`header-button ${darkmode?"dark-button":""}`}>{darkmode?"MODO LIGHT":"MODO DARK"}</button>
        </div>
    )
}