import "./header.css"
import {ReactComponent as Logo} from "./logo-desktop.svg"
export function Header({handledarkmode, darkmode}){
    return(
        <div className="Header">
            <Logo className={`header-logo ${darkmode?"dark":""}`}/>
            <button onClick={handledarkmode} className={`header-button ${darkmode?"dark-button":""}`}>{darkmode?"MODO LIGHT":"MODO DARK"}</button>
        </div>
    )
}