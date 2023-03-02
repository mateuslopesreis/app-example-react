import {House, User, Gear} from 'phosphor-react'
import './NavStyle.css'

type NavProps ={
    type: 'navbar-menu'
}

export function Nav(props:NavProps){

    return(
        <>
            
       
         <nav className={props.type}>
        <House size={25}/>
        <User size={25}/>
        <Gear size={25}/>
         </nav>  
      
        </>
    )

}